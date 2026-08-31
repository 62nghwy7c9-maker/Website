/* Webgewerk — Vorgehen-Bühne.

   Eine scrollgesteuerte Werkbank: vier Segmente aus mattem Aluminium, durch die
   eine blaue Lichtfuge wandert. Segment für Segment, im Takt der vier Schritte.

   Technik wie bei scrollgetriebenen Filmseiten: die Scrollposition wird auf einen
   Wert 0…1 abgebildet und als Uniform an einen Shader gereicht. Nur wird hier
   kein Video abgetastet, sondern die Fläche direkt gerechnet — das spart die
   Filmdateien und hält die Seite bei ein paar Kilobyte.

   Kein Framework, kein Build-Schritt: WebGL ist im Browser eingebaut.

   Die Bühne ist reine Zugabe. Ohne JavaScript, ohne WebGL, auf schmalen Geräten
   oder bei „prefers-reduced-motion" bleibt sie aus — die vier Schritt-Karten
   darunter tragen den Inhalt dann allein und vollständig. */

(function () {
  'use strict';

  var stage = document.querySelector('[data-stage]');
  if (!stage) return;

  var canvas = stage.querySelector('[data-stage-canvas]');
  var caption = stage.querySelector('[data-stage-caption]');
  if (!canvas) return;

  /* ---- Wann die Bühne überhaupt läuft ---------------------------------- */

  var reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var roomy = window.matchMedia('(min-width: 700px)').matches;

  /* Auf schmalen Geräten kostet die gepinnte Bühne mehr, als sie einbringt. */
  if (!roomy) return;

  var gl = null;
  try {
    gl = canvas.getContext('webgl', {
      alpha: true,
      premultipliedAlpha: false,
      antialias: true,
      depth: false,
      stencil: false
    });
  } catch (e) {
    gl = null;
  }
  if (!gl) return;

  /* ---- Beschriftung aus den Karten darunter ----------------------------- */
  /* Die Schritte stehen genau einmal im HTML. Wir lesen sie von dort, damit
     Bühne und Karten nicht auseinanderlaufen können. */

  var steps = Array.prototype.map.call(
    document.querySelectorAll('#vorgehen .step'),
    function (el) {
      var num = el.querySelector('.step__num');
      var title = el.querySelector('h3');
      return {
        num: num ? num.textContent.trim() : '',
        title: title ? title.textContent.trim() : ''
      };
    }
  );
  if (steps.length !== 4) return;

  /* ---- Shader ----------------------------------------------------------- */

  var VERT = [
    'attribute vec2 aPos;',
    'varying vec2 vUv;',
    'void main() {',
    '  vUv = aPos * 0.5 + 0.5;',
    '  gl_Position = vec4(aPos, 0.0, 1.0);',
    '}'
  ].join('\n');

  var FRAG = [
    'precision highp float;',
    '',
    'varying vec2 vUv;',
    'uniform vec2  uRes;',
    'uniform float uProg;',
    'uniform float uTime;',
    '',
    /* Der einzige chromatische Ton der Seite — hier als Licht, nicht als UI. */
    'const vec3 ACCENT = vec3(0.000, 0.443, 0.890);', /* #0071e3 */
    'const vec3 CORE   = vec3(0.353, 0.682, 1.000);', /* #5aaeff */
    '',
    'float sdRoundBox(vec2 p, vec2 b, float r) {',
    '  vec2 q = abs(p) - b + r;',
    '  return min(max(q.x, q.y), 0.0) + length(max(q, 0.0)) - r;',
    '}',
    '',
    /* Aluminium wie in assets/img/hero.svg: hochkey, vier Stufen von oben nach unten. */
    'vec3 aluminium(float t) {',
    '  vec3 c0 = vec3(0.992, 0.992, 0.996);', /* #fdfdfe */
    '  vec3 c1 = vec3(0.925, 0.933, 0.945);', /* #eceef1 */
    '  vec3 c2 = vec3(0.875, 0.886, 0.906);', /* #dfe2e7 */
    '  vec3 c3 = vec3(0.949, 0.953, 0.961);', /* #f2f3f5 */
    '  if (t < 0.34) return mix(c0, c1, t / 0.34);',
    '  if (t < 0.62) return mix(c1, c2, (t - 0.34) / 0.28);',
    '  return mix(c2, c3, (t - 0.62) / 0.38);',
    '}',
    '',
    'void main() {',
    '  float aspect = uRes.x / max(uRes.y, 1.0);',
    '  vec2 p = vUv * 2.0 - 1.0;',
    '  p.x *= aspect;',
    '',
    '  float px = 2.0 / max(uRes.y, 1.0);',   /* eine Gerätezeile in p-Einheiten */
    '',
    /* Breite und Höhe hängen am Seitenverhältnis, damit der Riegel die Fläche
       füllt statt in der Mitte zu schwimmen. */
    '  float HW  = aspect * 0.93;',
    '  float HH  = 0.78;',
    /* Am Anfang ein Werkstück, am Ende vier Segmente. */
    '  float gap = mix(0.004, 0.048, uProg);',
    '  float segW = (2.0 * HW - 3.0 * gap) / 4.0;',
    '  float sw = segW * 0.5;',
    '',
    '  vec3  col = vec3(0.0);',
    '  float alpha = 0.0;',
    '',
    '  for (int i = 0; i < 4; i++) {',
    '    float fi = float(i);',
    '    float cx = -HW + sw + fi * (segW + gap);',
    '',
    /* Die Segmente zünden nacheinander, mit Überlappung. */
    '    float a = smoothstep(fi * 0.235, fi * 0.235 + 0.30, uProg);',
    '',
    /* Beim Zünden hebt sich das Segment eine Spur an. */
    '    vec2 q = vec2(p.x - cx, p.y + 0.030 * a);',
    '',
    '    float d = sdRoundBox(q, vec2(sw, HH), 0.075);',
    '    float cov = smoothstep(px * 1.5, -px * 1.5, d);',
    '    if (cov <= 0.0) { continue; }',
    '',
    '    float t = clamp((HH - q.y) / (2.0 * HH), 0.0, 1.0);',
    '    vec3  c = aluminium(t);',
    '',
    /* Kantenlicht — schmal, sonst wirkt die Fläche wie ein Knopf. */
    '    c += smoothstep(0.040, 0.0, abs(d)) * 0.055;',
    '',
    /* Ein Hauch Bürstung, damit die Fläche als Metall liest und nicht als Karte. */
    '    c += 0.010 * sin(q.x * 7.0);',
    '',
    '    float line = smoothstep(0.0130, 0.0035, abs(q.y));',
    '    float halo = smoothstep(0.150, 0.0, abs(q.y));',
    '',
    /* Die Nut ist von Anfang an da — gefräst, nur noch nicht beleuchtet.
       Ohne sie stünden am Anfang vier leere Kacheln da. */
    '    c = mix(c, vec3(0.784, 0.792, 0.804), line * 0.80);',
    '    c *= 1.0 - smoothstep(0.034, 0.0, abs(q.y - 0.020)) * 0.045;',
    '',
    /* Und füllt sich beim Scrollen von links mit Licht. */
    '    float front = -sw + 2.0 * sw * a;',
    '    float lit  = smoothstep(front + 0.010, front - 0.010, q.x);',
    '',
    '    c = mix(c, ACCENT, halo * lit * 0.32);',
    '    c = mix(c, CORE,   line * lit * 0.95);',
    '',
    /* Die Front selbst glimmt, solange sie unterwegs ist. */
    '    float moving = step(0.015, a) * (1.0 - smoothstep(0.97, 1.0, a));',
    '    float tip = smoothstep(0.075, 0.0, abs(q.x - front)) * moving;',
    '    float breathe = 0.62 + 0.38 * sin(uTime * 1.6);',
    '    c = mix(c, CORE, tip * halo * 0.45 * breathe);',
    '',
    '    col   = mix(col, c, cov);',
    '    alpha = max(alpha, cov);',
    '  }',
    '',
    '  gl_FragColor = vec4(col, alpha);',
    '}'
  ].join('\n');

  function compile(type, src) {
    var sh = gl.createShader(type);
    gl.shaderSource(sh, src);
    gl.compileShader(sh);
    if (!gl.getShaderParameter(sh, gl.COMPILE_STATUS)) {
      gl.deleteShader(sh);
      return null;
    }
    return sh;
  }

  var vs = compile(gl.VERTEX_SHADER, VERT);
  var fs = compile(gl.FRAGMENT_SHADER, FRAG);
  if (!vs || !fs) return;

  var prog = gl.createProgram();
  gl.attachShader(prog, vs);
  gl.attachShader(prog, fs);
  gl.linkProgram(prog);
  if (!gl.getProgramParameter(prog, gl.LINK_STATUS)) return;
  gl.useProgram(prog);

  var buf = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, buf);
  gl.bufferData(
    gl.ARRAY_BUFFER,
    new Float32Array([-1, -1, 3, -1, -1, 3]), /* ein übergroßes Dreieck deckt die Fläche */
    gl.STATIC_DRAW
  );
  var aPos = gl.getAttribLocation(prog, 'aPos');
  gl.enableVertexAttribArray(aPos);
  gl.vertexAttribPointer(aPos, 2, gl.FLOAT, false, 0, 0);

  var uRes = gl.getUniformLocation(prog, 'uRes');
  var uProg = gl.getUniformLocation(prog, 'uProg');
  var uTime = gl.getUniformLocation(prog, 'uTime');

  gl.enable(gl.BLEND);
  gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);

  /* ---- Ab hier ist die Bühne sichtbar ----------------------------------- */

  stage.classList.add('is-live');
  if (reduced) stage.classList.add('is-static');

  var w = 0, h = 0;

  function resize() {
    var dpr = Math.min(window.devicePixelRatio || 1, 2);
    var rect = canvas.getBoundingClientRect();
    var nw = Math.max(1, Math.round(rect.width * dpr));
    var nh = Math.max(1, Math.round(rect.height * dpr));
    if (nw === w && nh === h) return;
    w = canvas.width = nw;
    h = canvas.height = nh;
    gl.viewport(0, 0, w, h);
  }

  var shown = -1;

  function setCaption(prog01) {
    if (!caption) return;
    /* Der Schritt gilt als erreicht, sobald seine Fuge zu laufen beginnt. */
    var i = 0;
    for (var k = 3; k >= 0; k--) {
      if (prog01 >= k * 0.235) { i = k; break; }
    }
    if (i === shown) return;
    shown = i;
    caption.textContent = steps[i].num + ' · ' + steps[i].title;
  }

  function draw(prog01, time) {
    resize();
    gl.clearColor(0, 0, 0, 0);
    gl.clear(gl.COLOR_BUFFER_BIT);
    gl.uniform2f(uRes, w, h);
    gl.uniform1f(uProg, prog01);
    gl.uniform1f(uTime, time);
    gl.drawArrays(gl.TRIANGLES, 0, 3);
    setCaption(prog01);
  }

  /* Bei „prefers-reduced-motion" steht die Bühne still: ein Bild, fertig gebaut. */
  if (reduced) {
    var once = function () { draw(1, 0); };
    once();
    window.addEventListener('resize', once);
    return;
  }

  /* ---- Scroll → Fortschritt --------------------------------------------- */

  var running = false;
  var start = (window.performance && performance.now) ? performance.now() : Date.now();

  function progress() {
    var r = stage.getBoundingClientRect();
    var travel = r.height - window.innerHeight;
    if (travel <= 0) return 1;
    var v = -r.top / travel;
    return v < 0 ? 0 : (v > 1 ? 1 : v);
  }

  function frame(now) {
    if (!running) return;
    draw(progress(), (now - start) / 1000);
    requestAnimationFrame(frame);
  }

  /* Nur rechnen, solange die Bühne im Bild ist. */
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting && !running) {
          running = true;
          requestAnimationFrame(frame);
        } else if (!entry.isIntersecting) {
          running = false;
        }
      });
    }, { rootMargin: '10% 0px' });
    io.observe(stage);
  } else {
    running = true;
    requestAnimationFrame(frame);
  }

  /* Ein erstes Bild, damit die Fläche nie leer steht. */
  draw(progress(), 0);
})();
