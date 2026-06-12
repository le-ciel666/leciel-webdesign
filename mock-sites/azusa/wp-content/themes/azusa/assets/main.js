/* AZUSA — interactions: header scroll, mobile menu, reveal, contact form */
(function () {
  'use strict';

  var header = document.querySelector('.az-header');
  var menu = document.querySelector('.az-mobile-menu');

  /* ---- Header solid-on-scroll (also solid while the menu is open) ---- */
  function syncHeader() {
    if (!header) return;
    var solid = window.scrollY > 50 || document.body.classList.contains('az-menu-open');
    header.classList.toggle('is-solid', solid);
  }
  window.addEventListener('scroll', syncHeader, { passive: true });

  /* ---- Mobile menu ---- */
  function openMenu(e) { if (e) e.preventDefault(); if (menu) menu.classList.add('is-open'); document.body.classList.add('az-menu-open'); syncHeader(); }
  function closeMenu(e) { if (e) e.preventDefault(); if (menu) menu.classList.remove('is-open'); document.body.classList.remove('az-menu-open'); syncHeader(); }

  document.querySelectorAll('[data-az-menu-open]').forEach(function (b) { b.addEventListener('click', openMenu); });
  document.querySelectorAll('[data-az-menu-close]').forEach(function (b) { b.addEventListener('click', closeMenu); });
  // Tapping a destination inside the menu should close it.
  if (menu) {
    menu.querySelectorAll('a:not([data-az-menu-close])').forEach(function (a) {
      a.addEventListener('click', function () { closeMenu(); });
    });
  }
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') closeMenu(); });

  /* ---- Reveal on scroll ---- */
  function initReveals() {
    var els = document.querySelectorAll('[data-reveal]');
    if (!('IntersectionObserver' in window)) {
      els.forEach(function (el) { el.classList.add('az-in'); });
      return;
    }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (!en.isIntersecting) return;
        var el = en.target;
        var d = parseInt(el.getAttribute('data-reveal-delay') || '0', 10);
        el.style.transitionDelay = d + 'ms';
        el.classList.add('az-in');
        io.unobserve(el);
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
    els.forEach(function (el) { io.observe(el); });
  }

  /* ---- Contact form (client-side validation + success state) ---- */
  function initForm() {
    var form = document.getElementById('az-contact-form');
    var sent = document.getElementById('az-sent');
    if (!form || !sent) return;

    function setErr(name, msg) {
      var span = form.querySelector('.az-err[data-for="' + name + '"]');
      if (span) span.textContent = msg || '';
    }

    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var f = form.elements;
      var ok = true;
      setErr('name', ''); setErr('email', ''); setErr('message', '');

      if (!f.name.value.trim()) { setErr('name', 'お名前を入力してください'); ok = false; }
      var em = f.email.value.trim();
      if (!em) { setErr('email', 'メールアドレスを入力してください'); ok = false; }
      else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(em)) { setErr('email', 'メールアドレスの形式が正しくありません'); ok = false; }
      if (!f.message.value.trim()) { setErr('message', 'お問い合わせ内容を入力してください'); ok = false; }

      if (!ok) return;

      form.style.display = 'none';
      sent.hidden = false;
      sent.style.display = 'flex';
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  function init() { syncHeader(); initReveals(); initForm(); }
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
