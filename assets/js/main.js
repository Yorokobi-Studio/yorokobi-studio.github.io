/* Yorokobi Studio — progressive enhancement only, no dependencies */
(() => {
  'use strict';

  const toggle = document.querySelector('[data-menu-toggle]');
  const mobileNav = document.querySelector('[data-mobile-nav]');
  const header = document.querySelector('[data-header]');
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

  const closeMenu = () => {
    if (!toggle || !mobileNav) return;
    toggle.setAttribute('aria-expanded', 'false');
    toggle.setAttribute('aria-label', 'Open navigation menu');
    mobileNav.hidden = true;
    document.body.classList.remove('menu-open');
  };

  if (toggle && mobileNav) {
    toggle.addEventListener('click', () => {
      const isOpen = toggle.getAttribute('aria-expanded') === 'true';
      toggle.setAttribute('aria-expanded', String(!isOpen));
      toggle.setAttribute('aria-label', isOpen ? 'Open navigation menu' : 'Close navigation menu');
      mobileNav.hidden = isOpen;
      document.body.classList.toggle('menu-open', !isOpen);
    });
    mobileNav.querySelectorAll('a').forEach((link) => link.addEventListener('click', closeMenu));
    window.addEventListener('keydown', (event) => {
      if (event.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') {
        closeMenu(); toggle.focus();
      }
    });
    window.addEventListener('resize', () => {
      if (window.innerWidth > 900) closeMenu();
    }, { passive: true });
  }

  if (header) {
    const updateHeader = () => header.classList.toggle('scrolled', window.scrollY > 25);
    window.addEventListener('scroll', updateHeader, { passive: true });
    updateHeader();
  }

  const items = Array.from(document.querySelectorAll('.reveal'));
  if ('IntersectionObserver' in window && !reducedMotion.matches) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { rootMargin: '0px 0px -45px 0px', threshold: 0.08 });
    items.forEach((item) => observer.observe(item));
  } else {
    items.forEach((item) => item.classList.add('visible'));
  }

  const toolkitTrack = document.querySelector('[data-toolkit-track]');
  if (toolkitTrack) {
    const originalGroup = toolkitTrack.querySelector('.toolkit-group');
    if (originalGroup) {
      const duplicateGroup = originalGroup.cloneNode(true);
      duplicateGroup.setAttribute('aria-hidden', 'true');
      duplicateGroup.querySelectorAll('a').forEach((link) => { link.tabIndex = -1; });
      toolkitTrack.append(duplicateGroup);
      toolkitTrack.classList.add('is-ready');
    }
  }

  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener('click', (event) => {
      const hash = link.getAttribute('href');
      if (!hash || hash === '#') return;
      const target = document.querySelector(hash);
      if (!target) return;
      event.preventDefault();
      target.scrollIntoView({ behavior: reducedMotion.matches ? 'auto' : 'smooth', block: 'start' });
      window.history.replaceState(null, '', hash);
    });
  });

  const year = document.getElementById('year');
  if (year) year.textContent = String(new Date().getFullYear());
})();
