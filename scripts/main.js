/* Webgewerk — Interaktion.
   Bewusst klein gehalten: kein Framework, kein Build-Schritt. */

(function () {
  'use strict';

  /* ---- Navigation: transparent → erhoben, sobald gescrollt wird ---- */
  var nav = document.querySelector('.nav');
  var onScroll = function () {
    if (!nav) return;
    nav.classList.toggle('is-scrolled', window.scrollY > 8);
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* ---- Mobiles Menü ---- */
  var burger = document.querySelector('.nav__burger');
  var menu = document.getElementById('nav-menu');
  if (burger && menu) {
    burger.addEventListener('click', function () {
      var open = burger.getAttribute('aria-expanded') === 'true';
      burger.setAttribute('aria-expanded', String(!open));
      menu.classList.toggle('is-open', !open);
      document.body.classList.toggle('is-locked', !open);
    });
    menu.addEventListener('click', function (e) {
      if (e.target.closest('a')) {
        burger.setAttribute('aria-expanded', 'false');
        menu.classList.remove('is-open');
        document.body.classList.remove('is-locked');
      }
    });
  }

  /* ---- Einblenden beim Scrollen ---- */
  var reveals = document.querySelectorAll('[data-reveal]');
  var reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (reduced || !('IntersectionObserver' in window)) {
    reveals.forEach(function (el) { el.classList.add('is-in'); });
  } else {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-in');
        io.unobserve(entry.target);
      });
    }, { rootMargin: '0px 0px -12% 0px', threshold: 0.12 });
    reveals.forEach(function (el) { io.observe(el); });
  }

  /* ---- FAQ: immer nur eine Antwort offen ---- */
  var faqs = Array.prototype.slice.call(document.querySelectorAll('.faq__item'));
  faqs.forEach(function (item) {
    item.addEventListener('toggle', function () {
      if (!item.open) return;
      faqs.forEach(function (other) { if (other !== item) other.open = false; });
    });
  });

  /* ---- Kontaktformular ----
     Ohne Backend: wir prüfen die Eingaben und öffnen eine vorbereitete E-Mail.
     Sobald ein Endpunkt existiert, hier fetch() einsetzen. */
  var form = document.querySelector('.contact__form');
  if (form) {
    var status = form.querySelector('.form__status');
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      if (!form.reportValidity()) return;

      var data = new FormData(form);
      var name = (data.get('name') || '').toString().trim();
      var firma = (data.get('firma') || '').toString().trim();
      var mail = (data.get('email') || '').toString().trim();
      var text = (data.get('anliegen') || '').toString().trim();

      var body =
        'Name: ' + name + '\n' +
        'Firma: ' + firma + '\n' +
        'E-Mail: ' + mail + '\n\n' +
        text + '\n';

      window.location.href =
        'mailto:moin@webgewerk.de' +
        '?subject=' + encodeURIComponent('Projektanfrage — ' + (firma || name)) +
        '&body=' + encodeURIComponent(body);

      if (status) {
        status.hidden = false;
        status.textContent =
          'Danke, ' + (name.split(' ')[0] || 'gern') +
          '. Wir haben eine E-Mail für Sie vorbereitet — bitte abschicken.';
      }
    });
  }

  /* ---- Jahreszahl im Footer ---- */
  var year = document.querySelector('[data-year]');
  if (year) year.textContent = String(new Date().getFullYear());
})();
