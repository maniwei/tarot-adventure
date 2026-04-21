// ==================== Tarot Healing - Core Script ====================
// Optimized tarot logic with proper card drawing, reversals, and spreads

// ==================== Constants ====================
const TAROT_IMAGES_BASE = 'https://cdn.jsdelivr.net/gh/mixvlad/TarotCards@main/tarot/rider-waite/720px/';

// Card position meanings for different spreads
const SPREAD_POSITIONS = {
    single: [
        { name: 'The Card', meaning: 'The essence of your situation' }
    ],
    three: [
        { name: 'Past', meaning: 'What has influenced your situation' },
        { name: 'Present', meaning: 'Your current state' },
        { name: 'Future', meaning: 'Where this is heading' }
    ],
    celtic: [
        { name: 'Present', meaning: 'Your current situation' },
        { name: 'Challenge', meaning: 'The obstacle you face' },
        { name: 'Foundation', meaning: 'The root of the matter' },
        { name: 'Past', meaning: 'Recent events that influence you' },
        { name: 'Crown', meaning: 'Your goals and aspirations' },
        { name: 'Future', meaning: 'What is coming soon' },
        { name: 'Self', meaning: 'How you see yourself' },
        { name: 'Environment', meaning: 'External influences' },
        { name: 'Hopes/Fears', meaning: 'Your inner hopes and fears' },
        { name: 'Outcome', meaning: 'The likely resolution' }
    ],
    relationship: [
        { name: 'You', meaning: 'Your perspective and feelings' },
        { name: 'Partner', meaning: 'Their perspective and feelings' }
    ]
};

// ==================== Card Helper Functions ====================
function getSuitColor(suit) {
    const colors = {
        major: '#b8860b',    // Gold for Major Arcana
        wands: '#c2410c',    // Red-orange for Wands/Fire
        cups: '#0891b2',     // Blue for Cups/Water
        swords: '#475569',   // Gray for Swords/Air
        pentacles: '#15803d' // Green for Pentacles/Earth
    };
    return colors[suit] || '#8b7355';
}

function getSuitIcon(suit) {
    const icons = {
        major: '✦',
        wands: '🔥',
        cups: '💧',
        swords: '⚔️',
        pentacles: '💰'
    };
    return icons[suit] || '●';
}

function getSuitElement(suit) {
    const elements = {
        major: 'Spirit',
        wands: 'Fire',
        cups: 'Water',
        swords: 'Air',
        pentacles: 'Earth'
    };
    return elements[suit] || 'Unknown';
}

function getCardStyle(card, suit) {
    const color = getSuitColor(suit);
    return `background: linear-gradient(135deg, #1a1a2e 0%, #2d2d4a 100%); border: 3px solid ${color};`;
}

// ==================== Image Handling ====================
function getCardImageUrl(card) {
    // Priority 1: Use imageUrl from card data (external CDN)
    if (card.imageUrl) {
        return card.imageUrl;
    }
    
    // Priority 2: Use id_en for local image
    if (card.id_en) {
        return `images/tarot/${card.id_en}.jpg`;
    }
    
    // Priority 3: Use card name
    return `images/tarot/${card.name.replace(/ /g, '_')}.jpg`;
}

function handleImageError(img) {
    const fallback = document.createElement('div');
    fallback.className = 'card-image-fallback';
    
    const cardName = img.alt || 'Tarot Card';
    const suit = img.dataset.suit || 'major';
    
    fallback.innerHTML = `
        <div class="placeholder-symbol">${getSuitIcon(suit)}</div>
        <div class="placeholder-text">${cardName}</div>
    `;
    
    img.parentNode.replaceChild(fallback, img);
}

// ==================== Card Data Management ====================
let allCards = [];

function initializeAllCards() {
    if (typeof getLocalizedAllCards === 'function') {
        const lang = localStorage.getItem('tarot-lang') || 'en';
        allCards = getLocalizedAllCards(lang);
    } else if (typeof tarotCards !== 'undefined') {
        // Fallback to tarotCards data structure
        allCards = [
            ...(tarotCards.majorArcana || []).map(c => ({ ...c, suit: 'major', imageUrl: getCardImageUrl(c) })),
            ...(tarotCards.wands || []).map(c => ({ ...c, suit: 'wands', imageUrl: getCardImageUrl(c) })),
            ...(tarotCards.cups || []).map(c => ({ ...c, suit: 'cups', imageUrl: getCardImageUrl(c) })),
            ...(tarotCards.swords || []).map(c => ({ ...c, suit: 'swords', imageUrl: getCardImageUrl(c) })),
            ...(tarotCards.pentacles || []).map(c => ({ ...c, suit: 'pentacles', imageUrl: getCardImageUrl(c) }))
        ];
    }
}

// Initialize on load
initializeAllCards();

// Listen for language changes
window.addEventListener('languageChanged', function(e) {
    if (typeof getLocalizedAllCards === 'function') {
        const newCards = getLocalizedAllCards(e.detail.language);
        allCards.length = 0;
        allCards.push(...newCards);
    }
});

// ==================== Shuffle Algorithm (Fisher-Yates) ====================
function shuffleDeck(cards = allCards) {
    const deck = [...cards];
    for (let i = deck.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [deck[i], deck[j]] = [deck[j], deck[i]];
    }
    return deck;
}

// ==================== Card Drawing with Position ====================
function drawCards(count, spread = 'single', options = {}) {
    const reverseProb = options.reverseProb !== undefined ? options.reverseProb : 40;
    const deck = shuffleDeck();
    const selected = deck.slice(0, count);
    const positions = SPREAD_POSITIONS[spread] || SPREAD_POSITIONS.single;
    
    return selected.map((card, index) => {
        const isReversed = Math.random() * 100 < reverseProb;
        const position = positions[index % positions.length];
        
        return {
            ...card,
            isReversed,
            position: position.name,
            positionMeaning: position.meaning,
            displayMeaning: isReversed 
                ? (card.reversed || card.reversed_en || 'Reversed meaning')
                : (card.upright || card.upright_en || card.description || 'Upright meaning')
        };
    });
}

// ==================== Daily Inspirations ====================
const dailyInspirations = [
    { quote: "The universe speaks to us in whispers. Be still and listen.", author: "Zen Proverb" },
    { quote: "Every ending is a new beginning in disguise.", author: "Unknown" },
    { quote: "Trust the timing of your life.", author: "Unknown" },
    { quote: "Your intuition knows the way. Trust it.", author: "Unknown" },
    { quote: "The cards reveal what we need to see, not what we want to see.", author: "Tarot Wisdom" },
    { quote: "Peace comes from within. Do not seek it without.", author: "Buddha" },
    { quote: "In the middle of difficulty lies opportunity.", author: "Albert Einstein" },
    { quote: "The present moment is the only moment available to us.", author: "Thich Nhat Hanh" },
    { quote: "Let go of what you cannot control.", author: "Unknown" },
    { quote: "Your shadow is just as important as your light.", author: "Carl Jung" },
    { quote: "The journey of a thousand miles begins with a single step.", author: "Lao Tzu" },
    { quote: "When you realize nothing is lacking, the whole world belongs to you.", author: "Lao Tzu" }
];

function getDailyInspiration() {
    const dayOfYear = Math.floor((new Date() - new Date(new Date().getFullYear(), 0, 0)) / 86400000);
    return dailyInspirations[dayOfYear % dailyInspirations.length];
}

// ==================== Card Rendering ====================
function renderCardGrid(cards, containerId = 'cardGrid') {
    const container = document.getElementById(containerId);
    if (!container) return;
    
    container.innerHTML = '';
    cards.forEach(card => {
        const cardEl = document.createElement('div');
        cardEl.className = 'card-item';
        cardEl.dataset.suit = card.suit;
        
        const color = getSuitColor(card.suit);
        const imgUrl = card.imageUrl;
        
        cardEl.innerHTML = `
            <div class="card-image">
                <img src="${imgUrl}" alt="${card.name}" data-suit="${card.suit || 'major'}"
                     style="width:100%;height:100%;object-fit:cover;border-radius:8px;" 
                     onerror="handleImageError(this)">
            </div>
            <h3>${card.name}</h3>
            <p>${card.keywords || card.upright || ''}</p>
        `;
        
        cardEl.style.cursor = 'pointer';
        cardEl.addEventListener('click', () => showCardModal(card));
        container.appendChild(cardEl);
    });
}

// ==================== Drawn Card Rendering ====================
function renderDrawnCard(cardData, index = 0) {
    const color = getSuitColor(cardData.suit);
    const imgUrl = cardData.imageUrl;
    const positionText = cardData.isReversed ? 'Reversed' : 'Upright';
    const rotationStyle = cardData.isReversed ? 'transform: rotate(180deg);' : '';
    
    return `
        <div class="drawn-card" style="animation: flipIn 0.6s ease ${index * 0.15}s both;">
            <div class="drawn-card-position" style="color:${color};font-size:0.75rem;text-transform:uppercase;letter-spacing:1px;margin-bottom:4px;">
                ${cardData.position || 'Card'}
            </div>
            <div class="drawn-card-image" style="position:relative;">
                <img src="${imgUrl}" alt="${cardData.name}" 
                     style="width:100%;height:100%;object-fit:cover;border-radius:8px;${rotationStyle}" 
                     onerror="handleImageError(this)">
            </div>
            <div class="drawn-card-name" style="margin-top:8px;font-weight:600;color:var(--text-dark);font-size:0.95rem;">
                ${cardData.name}
            </div>
            <div class="drawn-card-position-text" style="color:${color};font-size:0.8rem;margin-top:2px;">
                ${positionText}
            </div>
            <div class="drawn-card-meaning" style="color:var(--text-muted);font-size:0.8rem;margin-top:4px;line-height:1.4;">
                ${cardData.displayMeaning.substring(0, 80)}${cardData.displayMeaning.length > 80 ? '...' : ''}
            </div>
        </div>
    `;
}

// ==================== Card Modal ====================
function showCardModal(card) {
    const modal = document.getElementById('cardModal');
    if (!modal) {
        console.error('Modal element not found');
        return;
    }
    
    const suitNames = {
        major: 'Major Arcana',
        wands: 'Wands (Fire)',
        cups: 'Cups (Water)',
        swords: 'Swords (Air)',
        pentacles: 'Pentacles (Earth)'
    };
    
    const description = card.description || card.meaning || '';
    const upright = card.upright_en || card.upright || card.description || '';
    const reversed = card.reversed_en || card.reversed || '';
    const eastern = card.eastern || card.easternWisdom || '';
    const keywords = Array.isArray(card.keywords) ? card.keywords.join(', ') : (card.keywords || '');
    
    modal.innerHTML = `
        <div style="background:#fff;border-radius:24px;padding:2rem;max-width:480px;width:90%;position:relative;max-height:90vh;overflow-y:auto;box-shadow:0 20px 60px rgba(47,79,79,0.3);">
            <button onclick="closeCardModal()" style="position:absolute;top:16px;right:16px;font-size:24px;color:#6c8c8c;background:#f2f6f5;border:none;cursor:pointer;width:40px;height:40px;line-height:1;border-radius:50%;transition:all 0.2s;z-index:10;">×</button>
            
            <div style="text-align:center;margin-bottom:24px;">
                <img src="${card.imageUrl || 'images/tarot/back.svg'}" alt="${card.name}" 
                     style="max-width:220px;border-radius:16px;box-shadow:0 8px 30px rgba(0,0,0,0.15);" 
                     onerror="this.onerror=null; this.src='images/tarot/back.svg';">
            </div>
            
            <div style="text-align:center;">
                <h2 style="font-size:26px;margin-bottom:4px;color:#2F4F4F;font-family:Georgia,serif;">${card.name}</h2>
                <p style="color:#4a9a8a;margin-bottom:16px;font-weight:500;font-size:0.95rem;">${suitNames[card.suit] || card.suit}</p>
                
                ${keywords ? `
                <div style="margin-bottom:20px;">
                    <span style="display:inline-block;background:#e8f5f1;color:#4a9a8a;padding:6px 14px;border-radius:20px;font-size:0.85rem;font-weight:500;">${keywords}</span>
                </div>` : ''}
                
                ${description ? `<p style="color:#4a6a6a;margin-bottom:20px;line-height:1.7;font-size:15px;">${description}</p>` : ''}
                
                ${upright ? `
                <div style="background:#e8f5f1;border-radius:12px;padding:16px;margin-bottom:12px;text-align:left;">
                    <h4 style="color:#4a9a8a;font-size:12px;margin-bottom:8px;text-transform:uppercase;letter-spacing:1px;">✦ Upright Meaning</h4>
                    <p style="color:#2F4F4F;font-size:14px;line-height:1.6;">${upright}</p>
                </div>` : ''}
                
                ${reversed ? `
                <div style="background:#fff5f0;border-radius:12px;padding:16px;margin-bottom:12px;text-align:left;">
                    <h4 style="color:#e88c6a;font-size:12px;margin-bottom:8px;text-transform:uppercase;letter-spacing:1px;">↻ Reversed Meaning</h4>
                    <p style="color:#2F4F4F;font-size:14px;line-height:1.6;">${reversed}</p>
                </div>` : ''}
                
                ${eastern ? `
                <div style="background:#f8f5f0;border-radius:12px;padding:16px;margin-bottom:12px;text-align:left;">
                    <h4 style="color:#d4a76a;font-size:12px;margin-bottom:8px;text-transform:uppercase;letter-spacing:1px;">☯ Eastern Wisdom</h4>
                    <p style="color:#2F4F4F;font-size:14px;line-height:1.6;">${eastern}</p>
                </div>` : ''}
            </div>
        </div>
    `;
    
    modal.style.cssText = 'display:flex !important; position:fixed !important; top:0 !important; left:0 !important; width:100vw !important; height:100vh !important; background:rgba(47,79,79,0.85) !important; backdrop-filter:blur(8px) !important; z-index:999999 !important; align-items:center !important; justify-content:center !important;';
    
    // Close on background click
    modal.onclick = (e) => {
        if (e.target === modal) closeCardModal();
    };
    
    // Close on ESC
    document.addEventListener('keydown', handleModalKey);
}

function closeCardModal() {
    const modal = document.getElementById('cardModal');
    if (modal) {
        modal.style.display = 'none';
    }
    document.removeEventListener('keydown', handleModalKey);
}

function handleModalKey(e) {
    if (e.key === 'Escape') closeCardModal();
}

// ==================== DOM Elements ====================
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const navMenu = document.querySelector('.nav-menu');
const cardGrid = document.getElementById('cardGrid');
const spreadBtns = document.querySelectorAll('.spread-btn');
const filterBtns = document.querySelectorAll('.filter-btn');

// ==================== Mobile Menu ====================
if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', () => {
        navMenu?.classList.toggle('active');
        mobileMenuBtn.classList.toggle('active');
    });
}

// ==================== Initialize Card Grid ====================
if (cardGrid && allCards.length > 0) {
    renderCardGrid(allCards.slice(0, 8));
}

// ==================== Card Filter ====================
if (filterBtns.length > 0) {
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            const filter = btn.dataset.filter;
            let filteredCards;
            
            switch(filter) {
                case 'all':
                    filteredCards = allCards;
                    break;
                case 'major':
                    filteredCards = allCards.filter(c => c.suit === 'major');
                    break;
                case 'minor':
                    filteredCards = allCards.filter(c => c.suit !== 'major');
                    break;
                case 'wands':
                case 'cups':
                case 'swords':
                case 'pentacles':
                    filteredCards = allCards.filter(c => c.suit === filter);
                    break;
                default:
                    filteredCards = allCards;
            }
            
            renderCardGrid(filteredCards);
        });
    });
}

// ==================== Spread Selection ====================
let currentSpread = 'single';

if (spreadBtns.length > 0) {
    spreadBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            spreadBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentSpread = btn.dataset.spread;
        });
    });
}

// ==================== Navigation Active State ====================
function updateActiveNav() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.nav-link').forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentPage) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}

updateActiveNav();

// ==================== Navbar Scroll Effect ====================
const navbar = document.querySelector('.navbar');
if (navbar) {
    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        if (currentScroll > 50) {
            navbar.style.background = 'rgba(255, 255, 255, 0.98)';
            navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
        } else {
            navbar.style.background = 'rgba(255, 255, 255, 0.95)';
            navbar.style.boxShadow = 'none';
        }
    });
}

// ==================== Daily Inspiration Update ====================
function updateDailyInspiration() {
    const quoteEl = document.querySelector('.inspiration-quote');
    const authorEl = document.querySelector('.inspiration-author');
    
    if (quoteEl) {
        const inspiration = getDailyInspiration();
        quoteEl.textContent = `"${inspiration.quote}"`;
        if (authorEl) authorEl.textContent = `— ${inspiration.author}`;
    }
}

updateDailyInspiration();

// ==================== Smooth Scroll ====================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href !== '#') {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        }
    });
});

// ==================== Console Welcome ====================
console.log(`
🌟 Welcome to Tarot Healing! 🌟
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
✨ Your spiritual journey begins here.

Total Cards: ${allCards.length}
- Major Arcana: ${(allCards.filter(c => c.suit === 'major')).length}
- Wands: ${(allCards.filter(c => c.suit === 'wands')).length}
- Cups: ${(allCards.filter(c => c.suit === 'cups')).length}
- Swords: ${(allCards.filter(c => c.suit === 'swords')).length}
- Pentacles: ${(allCards.filter(c => c.suit === 'pentacles')).length}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Made with ☯️ and ✨
`);

// ==================== Exports for Module Usage ====================
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        allCards,
        drawCards,
        shuffleDeck,
        getCardImageUrl,
        getSuitColor,
        getSuitIcon,
        showCardModal,
        closeCardModal,
        SPREAD_POSITIONS
    };
}
