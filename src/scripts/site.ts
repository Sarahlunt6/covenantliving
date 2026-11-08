// Site-wide motion and interaction. Everything here is an enhancement:
// the pages read fine with JavaScript off or with reduced motion on.
const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;

/* Scroll reveal: elements with data-reveal rise in as they enter the screen */
const revealEls = document.querySelectorAll<HTMLElement>('[data-reveal]');
if (reduce || !('IntersectionObserver' in window)) {
  revealEls.forEach((el) => el.classList.add('in'));
} else {
  const io = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          entry.target.classList.add('in');
          io.unobserve(entry.target);
        }
      }
    },
    { rootMargin: '0px 0px -6% 0px', threshold: 0.06 },
  );
  revealEls.forEach((el) => io.observe(el));
}

/* Header state, reading progress bar, hero scroll parallax */
const header = document.querySelector('.site-header');
const progress = document.querySelector<HTMLElement>('[data-progress]');
const hero = document.querySelector<HTMLElement>('[data-hero]');
let ticking = false;

function onScroll() {
  ticking = false;
  const y = window.scrollY;
  header?.classList.toggle('scrolled', y > 40);
  if (progress) {
    const max = document.documentElement.scrollHeight - window.innerHeight;
    progress.style.transform = `scaleX(${max > 0 ? Math.min(1, y / max) : 0})`;
  }
  if (hero && !reduce) hero.style.setProperty('--scroll', String(Math.min(y, window.innerHeight)));
}
window.addEventListener(
  'scroll',
  () => {
    if (!ticking) {
      ticking = true;
      requestAnimationFrame(onScroll);
    }
  },
  { passive: true },
);
onScroll();

/* Hero mockups drift gently toward the mouse */
if (hero && !reduce && matchMedia('(pointer: fine)').matches) {
  hero.addEventListener('pointermove', (e) => {
    const r = hero.getBoundingClientRect();
    hero.style.setProperty('--mx', ((e.clientX - r.left) / r.width - 0.5).toFixed(3));
    hero.style.setProperty('--my', ((e.clientY - r.top) / r.height - 0.5).toFixed(3));
  });
}

/* Filter buttons: <div data-filters="grid-id"> with buttons data-filter="value",
   items in the grid carry data-filter-item="value". data-hash links /shop/#section. */
document.querySelectorAll<HTMLElement>('[data-filters]').forEach((group) => {
  const grid = document.getElementById(group.dataset.filters ?? '');
  if (!grid) return;
  const buttons = [...group.querySelectorAll<HTMLButtonElement>('button[data-filter]')];
  const items = [...grid.querySelectorAll<HTMLElement>('[data-filter-item]')];

  const apply = (value: string) => {
    buttons.forEach((b) => b.setAttribute('aria-pressed', String(b.dataset.filter === value)));
    items.forEach((item) => {
      item.hidden = value !== 'all' && item.dataset.filterItem !== value;
      if (!item.hidden) item.classList.add('in');
    });
    grid.classList.toggle('is-filtered', value !== 'all');
  };

  const run = (value: string) => {
    const doc = document as Document & { startViewTransition?: (cb: () => void) => { finished: Promise<void> } };
    if (reduce || !doc.startViewTransition) return apply(value);
    items.forEach((item, i) => (item.style.viewTransitionName = `filter-item-${i}`));
    doc.startViewTransition(() => apply(value)).finished.finally(() => {
      items.forEach((item) => (item.style.viewTransitionName = ''));
    });
  };

  buttons.forEach((b) =>
    b.addEventListener('click', () => {
      run(b.dataset.filter ?? 'all');
      if (b.dataset.hash !== undefined) {
        history.replaceState(null, '', b.dataset.hash ? `#${b.dataset.hash}` : location.pathname);
      }
    }),
  );

  const fromHash = buttons.find((b) => b.dataset.hash && `#${b.dataset.hash}` === location.hash);
  if (fromHash) apply(fromHash.dataset.filter ?? 'all');
});
