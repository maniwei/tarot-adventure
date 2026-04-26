/* ==================== Main JavaScript - Tarot Healing ==================== */

// ==================== Global Utilities ====================
// Update crystal display across all pages
function updateCrystalDisplay() {
  const crystalCount = getCrystals ? getCrystals() : 0;
  const countElements = document.querySelectorAll('#crystalCount, #crystalCountDisplay, #modalCrystalCount');
  countElements.forEach(el => {
    if (el) el.textContent = crystalCount;
  });
}

// ==================== Mobile Menu ====================
function initMobileMenu() {
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const mobileMenu = document.getElementById('mobileMenu');

  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('active');
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
      if (!mobileMenu.contains(e.target) && !mobileMenuBtn.contains(e.target)) {
        mobileMenu.classList.remove('active');
      }
    });
  }
}

// ==================== Language Switcher ====================
function initLanguageSwitcher() {
  const langBtns = document.querySelectorAll('.lang-btn, .mobile-lang-btn');
  const savedLang = localStorage.getItem('tarot-lang') || 'en';

  // Set initial state
  setLanguage(savedLang);

  langBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const lang = btn.dataset.lang;
      setLanguage(lang);
    });
  });
}

function setLanguage(lang) {
  // Update buttons
  document.querySelectorAll('.lang-btn, .mobile-lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });

  // Save preference
  localStorage.setItem('tarot-lang', lang);

  // Update all elements with data-i18n
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (translations[lang] && translations[lang][key]) {
      if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
        el.placeholder = translations[lang][key];
      } else {
        el.textContent = translations[lang][key];
      }
    }
  });
}

// Crystal shop functionality is now handled globally in crystal-store.js

// ==================== Card Library Preview ====================
function initCardLibrary() {
  const cardGrid = document.getElementById('cardGrid');
  const filterBtns = document.querySelectorAll('.filter-btn');

  if (!cardGrid || !tarotCards) return;

  // Get random cards for preview
  const previewCards = getRandomCards(4);
  renderCards(previewCards);

  // Filter buttons
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.dataset.filter;
      let filteredCards = [];

      if (filter === 'all') {
        filteredCards = getRandomCards(4);
      } else if (filter === 'major') {
        const majorCards = tarotCards.filter(c => c.category === 'major');
        filteredCards = shuffleArray(majorCards).slice(0, 4);
      } else if (filter === 'minor') {
        const minorCards = tarotCards.filter(c => c.category !== 'major');
        filteredCards = shuffleArray(minorCards).slice(0, 4);
      } else {
        filteredCards = tarotCards.filter(c => c.category === filter).slice(0, 4);
      }

      renderCards(filteredCards);
    });
  });
}

function renderCards(cards) {
  const cardGrid = document.getElementById('cardGrid');
  if (!cardGrid) return;

  cardGrid.innerHTML = cards.map(card => `
    <div class="tarot-card" data-id="${card.id}">
      <div class="card-image">
        <img src="${card.imageUrl}" alt="${card.name}" loading="lazy">
      </div>
      <div class="card-info">
        <span class="card-category">${card.category}</span>
        <h3>${card.name}</h3>
        <p class="card-keywords">${card.keywords}</p>
      </div>
    </div>
  `).join('');
}

// ==================== Deep Reading Section ====================
function initDeepReading() {
  const spreadBtns = document.querySelectorAll('.spread-btn');
  const drawBtn = document.getElementById('drawCardsBtn');
  const drawArea = document.getElementById('drawArea');

  let selectedSpread = 'single';

  if (spreadBtns) {
    spreadBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        spreadBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        selectedSpread = btn.dataset.spread;
      });
    });
  }

  if (drawBtn) {
    drawBtn.addEventListener('click', () => {
      const count = getSpreadCount(selectedSpread);
      const cards = getRandomCards(count);
      renderDrawnCards(cards, selectedSpread);
    });
  }
}

function getSpreadCount(spread) {
  switch (spread) {
    case 'single': return 1;
    case 'three': return 3;
    case 'celtic': return 10;
    case 'relationship': return 7;
    default: return 1;
  }
}

function renderDrawnCards(cards, spread) {
  const drawArea = document.getElementById('drawArea');
  if (!drawArea) return;

  drawArea.innerHTML = `
    <div class="drawn-cards">
      ${cards.map((card, index) => `
        <div class="drawn-card" style="animation-delay: ${index * 0.1}s">
          <img src="${card.imageUrl}" alt="${card.name}">
          <p>${card.name}</p>
        </div>
      `).join('')}
    </div>
  `;
}

// ==================== Utility Functions ====================
function shuffleArray(array) {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
}

function getRandomCards(count) {
  return shuffleArray(tarotCards).slice(0, count);
}

// ==================== Initialize ====================
document.addEventListener('DOMContentLoaded', () => {
  initMobileMenu();
  initLanguageSwitcher();
  initCardLibrary();
  initDeepReading();
});
