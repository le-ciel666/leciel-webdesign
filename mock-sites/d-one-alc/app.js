/* =========================================================================
   株式会社D-ONE — interactions
   ========================================================================= */
(function () {
  'use strict';

  /* ---- Tweak defaults (host persists this block) ---- */
  var TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{"accent":"#2f7fff"}/*EDITMODE-END*/;

  var ACCENTS = [
    { v: '#2f7fff', name: 'BLUE' },
    { v: '#f2691e', name: 'SAFETY' },
    { v: '#1f9d57', name: 'GREEN' },
    { v: '#d8332f', name: 'CRIMSON' }
  ];

  /* ---------- Header scroll state ---------- */
  var header = document.getElementById('header');
  var ctaBar = document.getElementById('ctaBar');
  var onScroll = function () {
    var y = window.scrollY || window.pageYOffset;
    header.classList.toggle('scrolled', y > 24);
    ctaBar.classList.toggle('show', y > 560);
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* ---------- Mobile menu ---------- */
  var burger = document.getElementById('burger');
  var menu = document.getElementById('mobileMenu');
  var setMenu = function (open) {
    burger.classList.toggle('open', open);
    menu.classList.toggle('open', open);
    burger.setAttribute('aria-expanded', open ? 'true' : 'false');
    document.body.style.overflow = open ? 'hidden' : '';
  };
  burger.addEventListener('click', function () {
    setMenu(!menu.classList.contains('open'));
  });
  menu.querySelectorAll('a').forEach(function (a) {
    a.addEventListener('click', function () { setMenu(false); });
  });

  /* ---------- Scroll reveal ---------- */
  var reveals = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });
    reveals.forEach(function (el) { io.observe(el); });
  } else {
    reveals.forEach(function (el) { el.classList.add('in'); });
  }

  /* ---------- Contact form (demo) ---------- */
  var form = document.getElementById('contactForm');
  var done = document.getElementById('formDone');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      if (!form.checkValidity()) { form.reportValidity(); return; }
      form.style.display = 'none';
      done.classList.add('show');
      done.scrollIntoView ? window.scrollTo({ top: done.getBoundingClientRect().top + window.scrollY - 120, behavior: 'smooth' }) : null;
    });
  }

  /* ---------- Tweaks: accent color ---------- */
  var current = Object.assign({}, TWEAK_DEFAULTS);

  function applyAccent(hex) {
    document.documentElement.style.setProperty('--accent', hex);
    // keep contrast text white for all curated accents
    document.documentElement.style.setProperty('--accent-ink', '#ffffff');
    document.querySelectorAll('.twkx-sw').forEach(function (sw) {
      sw.setAttribute('data-on', sw.dataset.v === hex ? '1' : '0');
    });
  }

  // Build swatches
  var box = document.getElementById('accentSwatches');
  if (box) {
    ACCENTS.forEach(function (a) {
      var b = document.createElement('button');
      b.className = 'twkx-sw';
      b.dataset.v = a.v;
      b.style.background = a.v;
      b.innerHTML = '<span>' + a.name + '</span>';
      b.addEventListener('click', function () {
        current.accent = a.v;
        applyAccent(a.v);
        try {
          window.parent.postMessage({ type: '__edit_mode_set_keys', edits: { accent: a.v } }, '*');
        } catch (err) {}
      });
      box.appendChild(b);
    });
  }
  applyAccent(current.accent);

  /* ---------- Tweaks: host protocol (vanilla) ---------- */
  var panel = document.getElementById('tweaks');
  var closeBtn = document.getElementById('twkxClose');
  window.addEventListener('message', function (e) {
    var t = e && e.data && e.data.type;
    if (t === '__activate_edit_mode') panel.classList.add('open');
    else if (t === '__deactivate_edit_mode') panel.classList.remove('open');
  });
  if (closeBtn) {
    closeBtn.addEventListener('click', function () {
      panel.classList.remove('open');
      try { window.parent.postMessage({ type: '__edit_mode_dismissed' }, '*'); } catch (err) {}
    });
  }
  try { window.parent.postMessage({ type: '__edit_mode_available' }, '*'); } catch (err) {}
})();
