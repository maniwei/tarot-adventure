/* ==================== Card Library Logic ==================== */

// State
let currentFilter = 'all';
let searchQuery = '';
let selectedCard = null;

// Category Labels
const categoryLabels = {
    en: {
        major: 'Major Arcana',
        wands: 'Wands',
        cups: 'Cups',
        swords: 'Swords',
        pentacles: 'Pentacles'
    },
    zu: {
        major: 'I-Arcana Enkulu',
        wands: 'Izinduku',
        cups: 'Izinkomishi',
        swords: 'Izinkemba',
        pentacles: 'Ama-Pentacle'
    }
};

// DOM Elements
const searchInput = document.getElementById('searchInput');
const cardsGrid = document.getElementById('cardsGrid');
const noResults = document.getElementById('noResults');
const cardModal = document.getElementById('cardModal');
const cardModalBody = document.getElementById('cardModalBody');
const modalClose = document.getElementById('modalClose');
const crystalBtn = document.getElementById('crystalBtn');
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const mobileMenu = document.getElementById('mobileMenu');

// Crystal Shop Modal Elements
const crystalShopModal = document.getElementById('crystalShopModal');
const shopModalClose = document.getElementById('shopModalClose');
// const modalBuyBtn = document.getElementById('modalBuyBtn');

// Initialize
function initCardLibrary() {
    updateCrystalDisplay();
    loadLanguage();
    renderCards();

    // Event Listeners
    if (searchInput) {
        searchInput.addEventListener('input', handleSearch);
    }

    if (modalClose) {
        modalClose.addEventListener('click', closeCardModal);
    }

    // if (crystalBtn) {
    //     crystalBtn.addEventListener('click', openCrystalShop);
    // }

    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', toggleMobileMenu);
    }

    // Filter buttons
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', () => selectFilter(btn));
    });

    // Crystal shop
    if (shopModalClose) {
        shopModalClose.addEventListener('click', closeCrystalShop);
    }

    // if (modalBuyBtn) {
    //     modalBuyBtn.addEventListener('click', handleCrystalPurchase);
    // }

    // Package selection
    // document.querySelectorAll('.package').forEach(pkg => {
    //     pkg.addEventListener('click', () => selectPackage(pkg));
    // });

    // Language switchers
    document.querySelectorAll('.lang-btn, .mobile-lang-btn').forEach(btn => {
        btn.addEventListener('click', () => setLanguage(btn.dataset.lang));
    });

    // Close modals on overlay click
    // document.querySelectorAll('.modal-overlay').forEach(overlay => {
    //     overlay.addEventListener('click', () => {
    //         closeCardModal();
    //         closeCrystalShop();
    //     });
    // });
}

// Get filtered cards
function getFilteredCards() {
    let cards = tarotCards;

    // Apply category filter
    if (currentFilter !== 'all') {
        if (currentFilter === 'minor') {
            cards = cards.filter(card => card.category !== 'major');
        } else {
            cards = cards.filter(card => card.category === currentFilter);
        }
    }

    // Apply search filter
    if (searchQuery) {
        const query = searchQuery.toLowerCase();
        cards = cards.filter(card =>
            card.name.toLowerCase().includes(query) ||
            card.keywords.toLowerCase().includes(query)
        );
    }

    return cards;
}

// Render cards grid
function renderCards() {
    if (!cardsGrid) return;

    const cards = getFilteredCards();
    const lang = localStorage.getItem('tarot-lang') || 'en';

    if (cards.length === 0) {
        cardsGrid.style.display = 'none';
        if (noResults) noResults.style.display = 'block';
        return;
    }

    cardsGrid.style.display = 'grid';
    if (noResults) noResults.style.display = 'none';

    cardsGrid.innerHTML = cards.map(card => {
        const categoryLabel = categoryLabels[lang][card.category] || categoryLabels.en[card.category];
        return `
            <div class="card-item" data-card-id="${card.id}">
                <div class="card-image">
                    <img src="${card.imageUrl}" alt="${card.name}" loading="lazy">
                </div>
                <div class="card-info">
                    <h3 class="card-name">${card.name}</h3>
                    <span class="card-category">${categoryLabel}</span>
                </div>
            </div>
        `;
    }).join('');

    // Add click handlers
    document.querySelectorAll('.card-item').forEach(item => {
        item.addEventListener('click', () => {
            const cardId = parseInt(item.dataset.cardId);
            const card = tarotCards.find(c => c.id === cardId);
            if (card) openCardModal(card);
        });
    });
}

// Handle search
function handleSearch(e) {
    searchQuery = e.target.value.trim();
    renderCards();
}

// Select filter
function selectFilter(btn) {
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    currentFilter = btn.dataset.filter;
    renderCards();
}

// Open card modal
function openCardModal(card) {
    selectedCard = card;
    const lang = localStorage.getItem('tarot-lang') || 'en';
    const categoryLabel = categoryLabels[lang][card.category] || categoryLabels.en[card.category];

    if (cardModalBody) {
        cardModalBody.innerHTML = `
            <div class="card-modal-image">
                <img src="${card.imageUrl}" alt="${card.name}">
            </div>
            <div class="card-modal-info">
                <div class="card-modal-header">
                    <h2 class="card-modal-title">${card.name}</h2>
                    <span class="card-modal-category">${categoryLabel}</span>
                </div>
                <p class="card-modal-keywords">${card.keywords}</p>
                
                <div class="card-meaning-section">
                    <h3 class="card-meaning-title" data-i18n="uprightMeaning">${getTranslation(lang, 'uprightMeaning')}</h3>
                    <p class="card-meaning-text">${card.upright}</p>
                </div>
                
                <div class="card-meaning-section">
                    <h3 class="card-meaning-title" data-i18n="reversedMeaning">${getTranslation(lang, 'reversedMeaning')}</h3>
                    <p class="card-meaning-text">${card.reversed}</p>
                </div>
                
                <div class="card-meaning-section">
                    <h3 class="card-meaning-title" data-i18n="spiritualWisdom">${getTranslation(lang, 'spiritualWisdom')}</h3>
                    <p class="card-meaning-text eastern">${card.eastern}</p>
                </div>
            </div>
        `;
    }

    if (cardModal) {
        cardModal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
}

// Close card modal
function closeCardModal() {
    if (cardModal) {
        cardModal.classList.remove('active');
        document.body.style.overflow = '';
    }
    selectedCard = null;
}

// Language Functions
function loadLanguage() {
    const savedLang = localStorage.getItem('tarot-lang') || 'en';
    setLanguage(savedLang);
}

function setLanguage(lang) {
    localStorage.setItem('tarot-lang', lang);

    // Update buttons
    document.querySelectorAll('.lang-btn, .mobile-lang-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.lang === lang);
    });

    // Update all elements with data-i18n
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.dataset.i18n;
        const translation = getTranslation(lang, key);
        if (translation) {
            if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
                el.placeholder = translation;
            } else {
                el.textContent = translation;
            }
        }
    });

    // Update placeholders
    document.querySelectorAll('[data-i18n-attr="placeholder"]').forEach(el => {
        const key = `data-placeholder-${lang}`;
        if (el.dataset[key]) {
            el.placeholder = el.dataset[key];
        }
    });

    // Re-render cards to update category labels
    renderCards();

    // Update modal if open
    if (selectedCard && cardModal?.classList.contains('active')) {
        openCardModal(selectedCard);
    }
}

function getTranslation(lang, key) {
    if (translations[lang] && translations[lang][key]) {
        return translations[lang][key];
    }
    if (translations.en[key]) {
        return translations.en[key];
    }
    return key;
}

// Mobile Menu
function toggleMobileMenu() {
    mobileMenu?.classList.toggle('active');
}

// Initialize on load
document.addEventListener('DOMContentLoaded', () => {
    initCardLibrary();
    // initCrystalShop() is now handled globally by crystal-store.js
});
