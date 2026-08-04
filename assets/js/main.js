(() => {
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
})();

  // ===== Gallery lightbox =====
  // Only photos above this width are sharp enough to enlarge nicely;
  // smaller/older photos stay as plain thumbnails.
  (() => {
    const MIN_WIDTH = 600;
    const grids = document.querySelectorAll('.gallery-grid');
    if (!grids.length) return;

    const overlay = document.createElement('div');
    overlay.className = 'lightbox';
    overlay.setAttribute('role', 'dialog');
    overlay.setAttribute('aria-modal', 'true');
    overlay.innerHTML =
      '<button class="lightbox-close" type="button" aria-label="Fermer">&times;</button>' +
      '<button class="lightbox-prev" type="button" aria-label="Photo précédente">&lsaquo;</button>' +
      '<button class="lightbox-next" type="button" aria-label="Photo suivante">&rsaquo;</button>' +
      '<figure><img alt=""><figcaption></figcaption></figure>';
    document.body.appendChild(overlay);

    const imgEl = overlay.querySelector('img');
    const captionEl = overlay.querySelector('figcaption');
    const closeBtn = overlay.querySelector('.lightbox-close');
    const prevBtn = overlay.querySelector('.lightbox-prev');
    const nextBtn = overlay.querySelector('.lightbox-next');

    let activeItems = [];
    let activeIndex = 0;
    let lastFocused = null;

    function render() {
      const item = activeItems[activeIndex];
      imgEl.src = item.src;
      imgEl.alt = item.alt;
      captionEl.textContent = item.caption;
      const multiple = activeItems.length > 1;
      prevBtn.hidden = !multiple;
      nextBtn.hidden = !multiple;
    }

    function openLightbox(items, index, trigger) {
      activeItems = items;
      activeIndex = index;
      lastFocused = trigger;
      render();
      overlay.classList.add('is-open');
      document.body.classList.add('lightbox-locked');
      closeBtn.focus();
    }

    function closeLightbox() {
      overlay.classList.remove('is-open');
      document.body.classList.remove('lightbox-locked');
      imgEl.src = '';
      if (lastFocused) lastFocused.focus();
    }

    function step(delta) {
      if (!activeItems.length) return;
      activeIndex = (activeIndex + delta + activeItems.length) % activeItems.length;
      render();
    }

    closeBtn.addEventListener('click', closeLightbox);
    prevBtn.addEventListener('click', () => step(-1));
    nextBtn.addEventListener('click', () => step(1));
    overlay.addEventListener('click', (e) => { if (e.target === overlay) closeLightbox(); });
    document.addEventListener('keydown', (e) => {
      if (!overlay.classList.contains('is-open')) return;
      if (e.key === 'Escape') closeLightbox();
      else if (e.key === 'ArrowLeft') step(-1);
      else if (e.key === 'ArrowRight') step(1);
    });

    grids.forEach((grid) => {
      const entries = Array.from(grid.querySelectorAll('figure'))
        .map((fig) => ({ fig, img: fig.querySelector('img'), caption: fig.querySelector('figcaption') }))
        .filter((entry) => entry.img);

      const ready = entries.map((entry) => entry.img.complete
        ? Promise.resolve()
        : new Promise((resolve) => {
            entry.img.addEventListener('load', resolve, { once: true });
            entry.img.addEventListener('error', resolve, { once: true });
          }));

      Promise.all(ready).then(() => {
        const items = [];
        entries.forEach((entry) => {
          if (entry.img.naturalWidth < MIN_WIDTH) return;
          const index = items.length;
          items.push({
            src: entry.img.currentSrc || entry.img.src,
            alt: entry.img.alt || '',
            caption: entry.caption ? entry.caption.textContent : ''
          });
          entry.fig.classList.add('zoomable');
          entry.img.setAttribute('tabindex', '0');
          entry.img.setAttribute('role', 'button');
          entry.img.setAttribute('aria-label', 'Agrandir la photo');
          const activate = () => openLightbox(items, index, entry.img);
          entry.img.addEventListener('click', activate);
          entry.img.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); activate(); }
          });
        });
      });
    });
  })();
