'use strict';

/* ─── PRODUCT DATA ─────────────────────────────────────────────── */
const products = [
  /* ── Night Dresses ── */
  {
    id: 1, category: 'night', name: 'Black Starlight', price: 189,
    tag: 'Bestseller',
    image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=600&h=800&q=80',
    desc: 'Ultra-sleek black micro-sequins fall across a body-skimming silhouette. An asymmetric hemline and open-back cut make every step impossible to ignore.'
  },
  {
    id: 2, category: 'night', name: 'Gold Rush', price: 245,
    tag: 'New',
    image: 'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=600&h=800&q=80',
    desc: 'Dripping in 24k gold micro-sequins, this strapless mini turns every entrance into a statement. Boning for shape, slip-lining for comfort.'
  },
  {
    id: 3, category: 'night', name: 'Silver Galaxy', price: 320,
    tag: 'Limited',
    image: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?auto=format&fit=crop&w=600&h=800&q=80',
    desc: 'A galaxy of holographic silver sequins ripples across this figure-hugging mini. The fabric shifts from silver to rose-gold depending on the light.'
  },
  {
    id: 4, category: 'night', name: 'Midnight Sapphire', price: 450,
    tag: 'Exclusive',
    image: 'https://images.unsplash.com/photo-1529139574466-a303027f89bc?auto=format&fit=crop&w=600&h=800&q=80',
    desc: 'Deep cobalt sequins shimmer over a nude base. The plunging back and sculptural hem whisper luxury and untamed confidence in equal measure.'
  },
  {
    id: 5, category: 'night', name: 'Ruby Sparkle', price: 280,
    tag: 'Hot',
    image: 'https://images.unsplash.com/photo-1550005809-8255d8a69378?auto=format&fit=crop&w=600&h=800&q=80',
    desc: 'Scarlet sequins blaze across a fitted silhouette with a daring thigh-high slit. Red has never been this unapologetically bold.'
  },
  {
    id: 6, category: 'night', name: 'Emerald Dream', price: 395,
    tag: 'New',
    image: 'https://images.unsplash.com/photo-1583396500589-c8ca8f6a15b8?auto=format&fit=crop&w=600&h=800&q=80',
    desc: 'Emerald iridescent sequins wrap this sleeveless mini for a jewel-toned look that balances edge with elegance. The color of envy, perfected.'
  },

  /* ── Wedding Dresses ── */
  {
    id: 7, category: 'wedding', name: 'Crystal Bride', price: 850,
    tag: 'Signature',
    image: 'https://images.unsplash.com/photo-1511174183052-ccc42bfd10d0?auto=format&fit=crop&w=600&h=800&q=80',
    desc: 'Thousands of hand-sewn Swarovski crystals adorn this micro-mini bridal gown. A sweetheart neckline and structured bodice redefine modern romance.'
  },
  {
    id: 8, category: 'wedding', name: 'Pearl Romance', price: 1200,
    tag: 'Bestseller',
    image: 'https://images.unsplash.com/photo-1519657337289-077653f724f4?auto=format&fit=crop&w=600&h=800&q=80',
    desc: 'Freshwater pearls cascade over soft ivory organza in this column-silhouette mini with a deep-V back. Understated bridal glamour at its absolute peak.'
  },
  {
    id: 9, category: 'wedding', name: 'Diamond Glow', price: 950,
    tag: 'Limited',
    image: 'https://images.unsplash.com/photo-1494774157916-02d683dba2ac?auto=format&fit=crop&w=600&h=800&q=80',
    desc: 'A diamond-dust finish coats every inch of this sleek bridal mini. Under candlelight it literally glows. There are only twelve of these in existence.'
  },
  {
    id: 10, category: 'wedding', name: 'Ivory Stardust', price: 690,
    tag: 'New',
    image: 'https://images.unsplash.com/photo-1495385928735-70dae78c7c75?auto=format&fit=crop&w=600&h=800&q=80',
    desc: 'Star-dusted ivory tulle over a crystal-studded base. A flounced mini hem gives movement to this cloud-like bridal style you will never forget.'
  },
  {
    id: 11, category: 'wedding', name: 'Champagne Bliss', price: 780,
    tag: 'Hot',
    image: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=600&h=800&q=80',
    desc: 'Warm champagne sequins shimmer against golden skin. The off-shoulder cut and structured bodice create a timeless bridal silhouette with modern spirit.'
  },
  {
    id: 12, category: 'wedding', name: 'White Aurora', price: 1500,
    tag: 'Exclusive',
    image: 'https://images.unsplash.com/photo-1465495976277-a8e8a0ef4cff?auto=format&fit=crop&w=600&h=800&q=80',
    desc: 'The pinnacle of our bridal collection. Handcrafted with aurora borealis crystals that scatter every colour of the spectrum. For the bride who wants everything.'
  }
];

/* ─── STATE ────────────────────────────────────────────────────── */
let activeCategory = 'night';
let activePriceFilter = 'all';
let cartCount = 0;
let nazvanie = 'test'; 
nazvanie = 'test2';
const konstant = 'constant value';
konstant = 'new value'; // This will cause an error because 'konstant' is a constant and cannot be reassigned.

/* ─── HELPERS ──────────────────────────────────────────────────── */
function fmt(price) {
  return '$' + price.toLocaleString();
}

function filterProducts() {
  return products.filter(p => {
    if (p.category !== activeCategory) return false;
    switch (activePriceFilter) {
      case 'under300':  return p.price < 300;
      case '300-600':   return p.price >= 300 && p.price <= 600;
      case '600-1000':  return p.price > 600 && p.price <= 1000;
      case 'over1000':  return p.price > 1000;
      default:          return true;
    }
  });
}

/* ─── RENDER ───────────────────────────────────────────────────── */
function renderProducts(list) {
  const grid      = document.getElementById('product-grid');
  const empty     = document.getElementById('empty-state');
  const countEl   = document.getElementById('product-count');

  grid.innerHTML = '';

  if (!list.length) {
    grid.style.display = 'none';
    empty.classList.add('show');
    countEl.textContent = '';
    return;
  }

  grid.style.display = 'grid';
  empty.classList.remove('show');
  countEl.textContent = `Showing ${list.length} ${list.length === 1 ? 'piece' : 'pieces'}`;

  list.forEach((p, i) => {
    const card = document.createElement('article');
    card.className = 'product-card';
    card.style.animationDelay = `${i * 0.07}s`;
    card.dataset.id = p.id;

    card.innerHTML = `
      <div class="card-img-wrap">
        <img src="${p.image}" alt="${p.name}" loading="lazy">
        ${p.tag ? `<span class="card-tag">${p.tag}</span>` : ''}
        <button class="card-wishlist" aria-label="Wishlist" data-id="${p.id}">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/>
          </svg>
        </button>
      </div>
      <div class="card-body">
        <h3 class="card-name">${p.name}</h3>
        <p class="card-price">${fmt(p.price)}</p>
        <button class="card-quick" data-id="${p.id}">Quick View</button>
      </div>`;

    card.querySelector('.card-wishlist').addEventListener('click', e => {
      e.stopPropagation();
      e.currentTarget.classList.toggle('active');
    });

    card.querySelector('.card-quick').addEventListener('click', e => {
      e.stopPropagation();
      openModal(p.id);
    });

    card.addEventListener('click', () => openModal(p.id));
    grid.appendChild(card);
  });
}

/* ─── MODAL ────────────────────────────────────────────────────── */
function openModal(id) {
  const p = products.find(x => x.id === id);
  if (!p) return;

  document.getElementById('modal-img').src       = p.image;
  document.getElementById('modal-img').alt       = p.name;
  document.getElementById('modal-img-badge').textContent = p.tag || '';
  document.getElementById('modal-category').textContent  =
    p.category === 'night' ? '✦ Night Collection' : '✦ Bridal Collection';
  document.getElementById('modal-name').textContent  = p.name;
  document.getElementById('modal-price').textContent = fmt(p.price);
  document.getElementById('modal-desc').textContent  = p.desc;

  /* reset sizes */
  document.querySelectorAll('.size-btn').forEach((b, i) => {
    b.classList.toggle('active', i === 0);
  });

  const overlay = document.getElementById('modal-overlay');
  overlay.classList.add('open');
  overlay.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  const overlay = document.getElementById('modal-overlay');
  overlay.classList.remove('open');
  overlay.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}

/* ─── SPARKLE CANVAS — background ──────────────────────────────── */
function initBgSparkles() {
  const canvas = document.getElementById('sparkle-bg');
  const ctx    = canvas.getContext('2d');
  const TOTAL  = 110;
  const particles = [];

  function resize() {
    canvas.width  = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  resize();
  window.addEventListener('resize', resize);

  function mkParticle() {
    const gold = Math.random() > 0.45;
    return {
      x:  Math.random() * canvas.width,
      y:  Math.random() * canvas.height,
      r:  Math.random() * 1.8 + 0.4,
      op: Math.random(),
      vx: (Math.random() - 0.5) * 0.28,
      vy: (Math.random() - 0.5) * 0.28 - 0.08,
      ts: Math.random() * 0.018 + 0.004,
      td: Math.random() > 0.5 ? 1 : -1,
      rgb: gold ? '212,175,106' : '195,195,220'
    };
  }
  for (let i = 0; i < TOTAL; i++) particles.push(mkParticle());

  function drawStar(p) {
    const { x, y, r, op, rgb } = p;
    ctx.save();
    ctx.globalAlpha  = op;
    ctx.shadowBlur   = r * 5;
    ctx.shadowColor  = `rgba(${rgb},${op})`;
    ctx.fillStyle    = `rgba(${rgb},${op})`;
    ctx.beginPath();
    ctx.arc(x, y, r, 0, Math.PI * 2);
    ctx.fill();
    if (r > 1.1) {
      ctx.strokeStyle = `rgba(${rgb},${op * 0.55})`;
      ctx.lineWidth   = 0.45;
      ctx.beginPath();
      ctx.moveTo(x - r * 3.5, y); ctx.lineTo(x + r * 3.5, y);
      ctx.moveTo(x, y - r * 3.5); ctx.lineTo(x, y + r * 3.5);
      ctx.stroke();
    }
    ctx.restore();
  }

  (function loop() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(p => {
      p.x  += p.vx; p.y  += p.vy;
      p.op += p.ts * p.td;
      if (p.op >= 0.88) p.td = -1;
      if (p.op <= 0.04) p.td =  1;
      if (p.x < 0) p.x = canvas.width;
      if (p.x > canvas.width) p.x = 0;
      if (p.y < 0) p.y = canvas.height;
      if (p.y > canvas.height) p.y = 0;
      drawStar(p);
    });
    requestAnimationFrame(loop);
  })();
}

/* ─── SPARKLE CANVAS — hero rising particles ────────────────────── */
function initHeroSparkles() {
  const canvas = document.getElementById('hero-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let particles = [];

  function resize() {
    canvas.width  = canvas.parentElement.offsetWidth  || window.innerWidth;
    canvas.height = canvas.parentElement.offsetHeight || window.innerHeight;
    particles = [];
    for (let i = 0; i < 70; i++) spawn(true);
  }
  window.addEventListener('resize', resize);

  function spawn(anywhere) {
    particles.push({
      x:    Math.random() * canvas.width,
      y:    anywhere ? Math.random() * canvas.height : canvas.height + 8,
      r:    Math.random() * 1.4 + 0.4,
      life: anywhere ? Math.random() : 0.7 + Math.random() * 0.3,
      vy:   -(Math.random() * 0.45 + 0.12),
      vx:   (Math.random() - 0.5) * 0.18,
      fade: 0.002 + Math.random() * 0.004
    });
  }

  resize();

  (function loop() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles = particles.filter(p => p.life > 0);
    while (particles.length < 70) spawn(false);

    particles.forEach(p => {
      p.x += p.vx; p.y += p.vy; p.life -= p.fade;
      const op = Math.max(0, p.life);
      ctx.save();
      ctx.globalAlpha = op;
      ctx.shadowBlur  = 7;
      ctx.shadowColor = `rgba(212,175,106,${op})`;
      ctx.fillStyle   = `rgba(224,192,118,${op})`;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
    });
    requestAnimationFrame(loop);
  })();
}

/* ─── EVENT WIRING ──────────────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {

  /* init canvases */
  initBgSparkles();
  initHeroSparkles();

  /* initial render */
  renderProducts(filterProducts());

  /* category tabs */
  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.tab-btn').forEach(b => {
        b.classList.remove('active');
        b.setAttribute('aria-selected', 'false');
      });
      btn.classList.add('active');
      btn.setAttribute('aria-selected', 'true');
      activeCategory = btn.dataset.category;
      renderProducts(filterProducts());
    });
  });

  /* price filter */
  document.querySelectorAll('input[name="price"]').forEach(r => {
    r.addEventListener('change', () => {
      activePriceFilter = r.value;
      renderProducts(filterProducts());
    });
  });

  /* modal close */
  document.getElementById('modal-close').addEventListener('click', closeModal);
  document.getElementById('modal-overlay').addEventListener('click', e => {
    if (e.target === e.currentTarget) closeModal();
  });
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeModal();
  });

  /* size buttons (delegated) */
  document.getElementById('size-options').addEventListener('click', e => {
    const btn = e.target.closest('.size-btn');
    if (!btn) return;
    document.querySelectorAll('.size-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
  });

  /* add to cart */
  document.getElementById('btn-add-cart').addEventListener('click', () => {
    cartCount++;
    const badge = document.getElementById('cart-badge');
    badge.textContent = cartCount;
    badge.classList.add('bump');
    setTimeout(() => badge.classList.remove('bump'), 300);
    closeModal();
  });

  /* reset filter from empty state */
  document.getElementById('btn-reset').addEventListener('click', () => {
    const allRadio = document.querySelector('input[name="price"][value="all"]');
    allRadio.checked = true;
    activePriceFilter = 'all';
    renderProducts(filterProducts());
  });
});
