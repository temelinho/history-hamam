/**
 * History Hamam - Interactive App Engine
 */

let currentLang = 'tr';
let currentCurrency = 'TRY';
let currentMainTab = 'services'; // Default to HAMAM & SPA HİZMETLERİ (Up-Sell Focus)
let currentSubCategory = 'all';
let searchQuery = '';
let currentSort = 'featured';

let currentView = 'landing'; // 'landing' or 'catalog'

document.addEventListener('DOMContentLoaded', () => {
  initApp();
});

function initApp() {
  // Initialize Lucide icons
  if (window.lucide) {
    window.lucide.createIcons();
  }

  // Setup Event Listeners
  setupLanguageSelector();
  setupCurrencySelector();
  setupMainTabs();
  setupViewNavigation();
  setupSearch();
  setupSort();
  setupModal();

  // Initial Render
  updateLanguageUI();
  handleInitialRoute();
}

function setupViewNavigation() {
  // Landing Card Clicks
  const openCategoryCards = document.querySelectorAll('[data-open-category]');
  openCategoryCards.forEach((card) => {
    card.addEventListener('click', () => {
      const cat = card.getAttribute('data-open-category');
      openCatalogView(cat, true);
    });
  });

  // Back to Home Button
  const btnBack = document.getElementById('btnBackToHome');
  if (btnBack) {
    btnBack.addEventListener('click', () => {
      openLandingView(true);
    });
  }

  // Handle Browser Back / Forward buttons
  window.addEventListener('popstate', () => {
    handleInitialRoute();
  });
}

function openLandingView(updateHistory = true) {
  currentView = 'landing';
  const landingSec = document.getElementById('landingShowcase');
  const catalogSec = document.getElementById('catalogDetailView');

  if (landingSec) landingSec.style.display = 'block';
  if (catalogSec) catalogSec.style.display = 'none';

  if (updateHistory) {
    history.pushState({ view: 'landing' }, '', window.location.pathname);
  }

  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function openCatalogView(category, updateHistory = true) {
  currentView = 'catalog';
  currentMainTab = category || 'services';
  currentSubCategory = 'all';

  const landingSec = document.getElementById('landingShowcase');
  const catalogSec = document.getElementById('catalogDetailView');

  if (landingSec) landingSec.style.display = 'none';
  if (catalogSec) catalogSec.style.display = 'block';

  // Sync mini tabs
  const miniTabs = document.querySelectorAll('[data-main-tab]');
  miniTabs.forEach((b) => {
    b.classList.toggle('active', b.getAttribute('data-main-tab') === currentMainTab);
  });

  if (updateHistory) {
    history.pushState({ view: 'catalog', category: currentMainTab }, '', `#${currentMainTab}`);
  }

  renderSubCategories();
  renderCatalog();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function handleInitialRoute() {
  const hash = window.location.hash.replace('#', '');
  if (hash === 'services' || hash === 'products') {
    openCatalogView(hash, false);
  } else {
    openLandingView(false);
  }
}

/* ==========================================
   LANGUAGE & CURRENCY CONTROLLERS
   ========================================== */

function setupLanguageSelector() {
  const triggerBtn = document.getElementById('langDropdownTrigger');
  const menu = document.getElementById('langDropdownMenu');
  const langBtns = document.querySelectorAll('[data-lang]');

  if (triggerBtn && menu) {
    triggerBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      const currMenu = document.getElementById('currDropdownMenu');
      if (currMenu) currMenu.classList.remove('show');
      menu.classList.toggle('show');
    });

    document.addEventListener('click', () => {
      menu.classList.remove('show');
    });
  }

  const flagMap = { tr: '🇹🇷', en: '🇬🇧', ru: '🇷🇺', de: '🇩🇪' };

  langBtns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      currentLang = btn.getAttribute('data-lang');

      // Update header button label
      const flagEl = document.getElementById('headerCurrentFlag');
      const langEl = document.getElementById('headerCurrentLang');
      if (flagEl) flagEl.textContent = flagMap[currentLang] || '🇹🇷';
      if (langEl) langEl.textContent = currentLang.toUpperCase();

      // Update active state
      document.querySelectorAll('[data-lang]').forEach((b) => {
        b.classList.toggle('active', b.getAttribute('data-lang') === currentLang);
      });

      if (menu) menu.classList.remove('show');

      updateLanguageUI();
      renderSubCategories();
      renderCatalog();
    });
  });
}

function setupCurrencySelector() {
  const triggerBtn = document.getElementById('currDropdownTrigger');
  const menu = document.getElementById('currDropdownMenu');
  const currBtns = document.querySelectorAll('[data-curr]');

  if (triggerBtn && menu) {
    triggerBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      const langMenu = document.getElementById('langDropdownMenu');
      if (langMenu) langMenu.classList.remove('show');
      menu.classList.toggle('show');
    });

    document.addEventListener('click', () => {
      menu.classList.remove('show');
    });
  }

  currBtns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      currentCurrency = btn.getAttribute('data-curr');

      // Update header button label
      const currObj = CURRENCY_RATES[currentCurrency] || CURRENCY_RATES.TRY;
      const symbolEl = document.getElementById('headerCurrentSymbol');
      const currEl = document.getElementById('headerCurrentCurr');
      if (symbolEl) symbolEl.textContent = currObj.symbol;
      if (currEl) currEl.textContent = currentCurrency;

      // Update active state
      document.querySelectorAll('[data-curr]').forEach((b) => {
        b.classList.toggle('active', b.getAttribute('data-curr') === currentCurrency);
      });

      if (menu) menu.classList.remove('show');

      renderCatalog();
    });
  });
}

function updateLanguageUI() {
  const dict = UI_TRANSLATIONS[currentLang] || UI_TRANSLATIONS.tr;

  // Text contents
  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const key = el.getAttribute('data-i18n');
    if (dict[key]) {
      el.textContent = dict[key];
    }
  });

  // Placeholders
  document.querySelectorAll('[data-i18n-placeholder]').forEach((el) => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (dict[key]) {
      el.placeholder = dict[key];
    }
  });

  // HTML lang attribute
  document.documentElement.lang = currentLang;
}

/* ==========================================
   FORMATTING HELPERS
   ========================================== */

function formatPrice(priceTRY) {
  const currObj = CURRENCY_RATES[currentCurrency] || CURRENCY_RATES.TRY;
  const converted = Math.round(priceTRY * currObj.rate);

  if (currObj.position === 'before') {
    return `${currObj.symbol}${converted}`;
  } else {
    return `${converted} ${currObj.symbol}`;
  }
}

/* ==========================================
   TABS & SUB-CATEGORY FILTERS
   ========================================== */

function setupMainTabs() {
  const mainTabBtns = document.querySelectorAll('[data-main-tab]');
  mainTabBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      const target = btn.getAttribute('data-main-tab');
      openCatalogView(target, true);
    });
  });
}

function renderSubCategories() {
  const container = document.getElementById('subCategoryFilters');
  if (!container) return;

  const subs = SUB_CATEGORIES[currentMainTab] || SUB_CATEGORIES.all;
  container.innerHTML = '';

  subs.forEach((item) => {
    const btn = document.createElement('button');
    btn.className = `sub-pill ${item.key === currentSubCategory ? 'active' : ''}`;
    btn.textContent = item.label[currentLang] || item.label.tr;

    btn.addEventListener('click', () => {
      container.querySelectorAll('.sub-pill').forEach((p) => p.classList.remove('active'));
      btn.classList.add('active');
      currentSubCategory = item.key;
      renderCatalog();
    });

    container.appendChild(btn);
  });
}

/* ==========================================
   SEARCH & SORT
   ========================================== */

function setupSearch() {
  const input = document.getElementById('searchInput');
  const clearBtn = document.getElementById('clearSearchBtn');
  if (!input || !clearBtn) return;

  input.addEventListener('input', (e) => {
    searchQuery = e.target.value.toLowerCase().trim();
    clearBtn.style.display = searchQuery ? 'flex' : 'none';
    renderCatalog();
  });

  clearBtn.addEventListener('click', () => {
    input.value = '';
    searchQuery = '';
    clearBtn.style.display = 'none';
    renderCatalog();
  });

  const resetBtn = document.getElementById('resetFilterBtn');
  if (resetBtn) {
    resetBtn.addEventListener('click', () => {
      input.value = '';
      searchQuery = '';
      clearBtn.style.display = 'none';
      currentMainTab = 'services';
      currentSubCategory = 'all';

      document.querySelectorAll('[data-main-tab]').forEach((b) => {
        b.classList.toggle('active', b.getAttribute('data-main-tab') === 'services');
      });

      renderSubCategories();
      renderCatalog();
    });
  }
}

function setupSort() {
  const select = document.getElementById('sortSelect');
  if (!select) return;
  select.addEventListener('change', (e) => {
    currentSort = e.target.value;
    renderCatalog();
  });
}

/* ==========================================
   CATALOG GRID RENDERING
   ========================================== */

function getFilteredItems() {
  return CATALOG_ITEMS.filter((item) => {
    // Filter Main Category (services vs products)
    if (currentMainTab === 'services' && item.mainCategory !== 'services') {
      return false;
    }
    if (currentMainTab === 'products' && item.mainCategory === 'services') {
      return false;
    }

    // Filter Sub Category
    if (currentSubCategory !== 'all') {
      if (item.subCategory !== currentSubCategory && item.mainCategory !== currentSubCategory) {
        return false;
      }
    }

    // Search Filter
    if (searchQuery) {
      const title = (item.title[currentLang] || item.title.tr).toLowerCase();
      const desc = (item.shortDesc[currentLang] || item.shortDesc.tr).toLowerCase();
      return title.includes(searchQuery) || desc.includes(searchQuery);
    }

    return true;
  }).sort((a, b) => {
    const titleA = (a.title[currentLang] || a.title.tr).toLowerCase();
    const titleB = (b.title[currentLang] || b.title.tr).toLowerCase();

    if (currentSort === 'price-asc') {
      return a.priceTRY - b.priceTRY;
    } else if (currentSort === 'price-desc') {
      return b.priceTRY - a.priceTRY;
    } else if (currentSort === 'name') {
      return titleA.localeCompare(titleB);
    }
    return 0; // default featured
  });
}

function renderCatalog() {
  const grid = document.getElementById('catalogGrid');
  const emptyState = document.getElementById('emptyState');
  const resultsCount = document.getElementById('resultsCount');
  if (!grid) return;

  const items = getFilteredItems();
  const dict = UI_TRANSLATIONS[currentLang] || UI_TRANSLATIONS.tr;

  if (resultsCount) {
    resultsCount.textContent = `${items.length} ${dict.tab_all || 'öğe gösteriliyor'}`;
  }

  if (items.length === 0) {
    grid.style.display = 'none';
    if (emptyState) emptyState.style.display = 'block';
    return;
  }

  grid.style.display = 'grid';
  if (emptyState) emptyState.style.display = 'none';
  grid.innerHTML = '';

  items.forEach((item) => {
    const card = document.createElement('div');
    card.className = 'catalog-card';

    const titleText = item.title[currentLang] || item.title.tr;
    const descText = item.shortDesc[currentLang] || item.shortDesc.tr;
    const priceFormatted = formatPrice(item.priceTRY);

    let durationHTML = '';
    if (item.duration) {
      durationHTML = `
        <div class="card-duration">
          <i data-lucide="clock"></i>
          <span>${item.duration} ${dict.minutes}</span>
        </div>
      `;
    }

    card.innerHTML = `
      <div class="card-image-wrap">
        <img src="${item.image}" alt="${titleText}" class="card-image" loading="lazy" />
        ${item.badge ? `<span class="card-badge">${item.badge}</span>` : ''}
        ${durationHTML}
      </div>
      <div class="card-body">
        <h3 class="card-title">${titleText}</h3>
        <p class="card-desc">${descText}</p>
        <div class="card-footer">
          <span class="card-price">${priceFormatted}</span>
          <button class="btn-card-detail" data-item-id="${item.id}">
            <span>${dict.detail_btn}</span>
            <i data-lucide="arrow-right"></i>
          </button>
        </div>
      </div>
    `;

    // Click handler for card details
    card.querySelector('.btn-card-detail').addEventListener('click', () => {
      openModal(item);
    });

    grid.appendChild(card);
  });

  if (window.lucide) {
    window.lucide.createIcons();
  }
}

/* ==========================================
   MODAL DRAWER SYSTEM
   ========================================== */

function setupModal() {
  const backdrop = document.getElementById('modalBackdrop');
  const closeBtn = document.getElementById('modalCloseBtn');

  closeBtn.addEventListener('click', closeModal);
  backdrop.addEventListener('click', (e) => {
    if (e.target === backdrop) {
      closeModal();
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModal();
  });
}

function openModal(item) {
  const backdrop = document.getElementById('modalBackdrop');
  const content = document.getElementById('modalContent');

  const dict = UI_TRANSLATIONS[currentLang] || UI_TRANSLATIONS.tr;
  const titleText = item.title[currentLang] || item.title.tr;
  const longDescText = item.longDesc[currentLang] || item.longDesc.tr;
  const priceFormatted = formatPrice(item.priceTRY);
  const includedItems = item.included ? (item.included[currentLang] || item.included.tr) : [];

  // WhatsApp Pre-filled message generator
  const waMsg = encodeURIComponent(
    `Merhaba History Hamam! Kataloğunuzdan şu ürün/hizmet hakkında bilgi ve rezervasyon almak istiyorum:\n\n*${titleText}*\nFiyat: ${priceFormatted}\n\nMüsaitlik durumunu öğrenebilir miyim?`
  );
  const waUrl = `https://wa.me/905523040101?text=${waMsg}`;

  let metaHTML = '';
  if (item.duration) {
    metaHTML += `
      <div class="modal-meta-item">
        <i data-lucide="clock"></i>
        <span>${item.duration} ${dict.minutes}</span>
      </div>
    `;
  }
  if (item.badge) {
    metaHTML += `
      <div class="modal-meta-item">
        <i data-lucide="award"></i>
        <span>${item.badge}</span>
      </div>
    `;
  }

  let includedListHTML = '';
  if (includedItems.length > 0) {
    includedListHTML = `
      <h4 class="modal-section-title">${item.duration ? dict.included : dict.features}</h4>
      <ul class="modal-included-list">
        ${includedItems.map(inc => `<li><i data-lucide="check-circle2"></i> ${inc}</li>`).join('')}
      </ul>
    `;
  }

  content.innerHTML = `
    <div class="modal-img-wrapper">
      <img src="${item.image}" alt="${titleText}" />
    </div>
    <div class="modal-inner">
      <div class="modal-header-info">
        <h2 class="modal-title">${titleText}</h2>
        <span class="modal-price-tag">${priceFormatted}</span>
      </div>
      
      <div class="modal-meta-list">
        ${metaHTML}
      </div>

      <p class="modal-desc-full">${longDescText}</p>

      ${includedListHTML}

      <div class="modal-action-bar">
        <a href="${waUrl}" target="_blank" class="btn-modal-reserve">
          <i data-lucide="message-circle"></i>
          <span>${dict.reserve_now}</span>
        </a>
      </div>
    </div>
  `;

  backdrop.classList.add('active');
  document.body.style.overflow = 'hidden';

  if (window.lucide) {
    window.lucide.createIcons();
  }
}

function closeModal() {
  const backdrop = document.getElementById('modalBackdrop');
  backdrop.classList.remove('active');
  document.body.style.overflow = '';
}
