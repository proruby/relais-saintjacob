const toggle = document.getElementById('navToggle');
  const nav = document.getElementById('mainNav');
  toggle.addEventListener('click', () => {
    const open = nav.getAttribute('data-open') === 'true';
    nav.setAttribute('data-open', String(!open));
    toggle.setAttribute('aria-expanded', String(!open));
  });
  nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
    nav.setAttribute('data-open', 'false');
    toggle.setAttribute('aria-expanded', 'false');
  }));
