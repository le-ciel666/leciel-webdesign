// ============================================
// QuickCRM Renewal — UI behavior
// ============================================

// Sticky header shadow
(() => {
  const header = document.querySelector('.site-header');
  if (!header) return;
  const onScroll = () => header.classList.toggle('scrolled', window.scrollY > 8);
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
})();

// Mobile drawer
(() => {
  const toggle = document.querySelector('.nav-mobile-toggle');
  const drawer = document.querySelector('.drawer');
  if (!toggle || !drawer) return;
  const close = () => drawer.classList.remove('open');
  toggle.addEventListener('click', () => drawer.classList.toggle('open'));
  drawer.addEventListener('click', (e) => {
    if (e.target === drawer) close();
  });
  drawer.querySelectorAll('a').forEach(a => a.addEventListener('click', close));
  const x = drawer.querySelector('[data-drawer-close]');
  if (x) x.addEventListener('click', close);
})();

// FAQ accordion
(() => {
  document.querySelectorAll('.faq-item').forEach(item => {
    const q = item.querySelector('.faq-q');
    const a = item.querySelector('.faq-a');
    if (!q || !a) return;
    q.addEventListener('click', () => {
      const open = item.classList.toggle('open');
      a.style.maxHeight = open ? a.scrollHeight + 'px' : '0px';
    });
  });
})();

// Reveal on scroll
(() => {
  const els = document.querySelectorAll('.reveal');
  if (!('IntersectionObserver' in window) || !els.length) {
    els.forEach(e => e.classList.add('in'));
    return;
  }
  const io = new IntersectionObserver((entries) => {
    entries.forEach(en => {
      if (en.isIntersecting) {
        en.target.classList.add('in');
        io.unobserve(en.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
  els.forEach(e => io.observe(e));
})();

// Active section nav highlight (desktop)
(() => {
  const links = document.querySelectorAll('.nav-links a[href^="#"]');
  if (!links.length || !('IntersectionObserver' in window)) return;
  const map = new Map();
  links.forEach(a => {
    const id = a.getAttribute('href').slice(1);
    const sec = document.getElementById(id);
    if (sec) map.set(sec, a);
  });
  const io = new IntersectionObserver((entries) => {
    entries.forEach(en => {
      const a = map.get(en.target);
      if (!a) return;
      if (en.isIntersecting) {
        links.forEach(l => l.style.color = '');
        a.style.color = 'var(--brand)';
      }
    });
  }, { rootMargin: '-50% 0px -45% 0px' });
  map.forEach((_, sec) => io.observe(sec));
})();
