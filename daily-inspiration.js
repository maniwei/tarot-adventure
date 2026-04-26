/* ==================== Daily Inspiration Logic ==================== */

// Tarot News Data
const tarotNews = [
    {
        id: 1,
        title: {
            en: "Understanding the Major Arcana: A Journey Through Life",
            zu: "Ukuqonda i-Arcana Enkulu: Uhambo Lempilo"
        },
        date: "April 8, 2026",
        excerpt: {
            en: "The Major Arcana represents the major life lessons and spiritual journey we all experience...",
            zu: "Amakhadi e-Arcana Enkulu amele izifundo ezinkulu zempilo nohambo lomoya esiwufanayo sonke..."
        },
        content: {
            en: `The Major Arcana cards are the foundation of any tarot deck, representing the major archetypes and life lessons we encounter on our spiritual journey. From The Fool's innocent beginning to The World's completion, each card tells a story of growth, challenge, and transformation.

The Fool begins the journey with unlimited potential and a sense of adventure. As we progress through the cards, we encounter The Magician's manifestation power, The High Priestess's intuition, The Empress's abundance, and The Emperor's structure. Each card builds upon the previous, creating a complete narrative of human experience.

Understanding these cards helps us recognize patterns in our own lives and provides guidance for navigating life's challenges with wisdom and grace.`,
            zu: `Amakhadi e-Arcana Enkulu ayisisekelo se-dekhi yonke ye-tarot, amele ama-archetype amakhulu nezifundo zempilo esibhekana nazo ohambweni lwethu lomoya. Kusukela ekuqaleni okungenacala kwe-Fool kuya kupheleni kwe-World, ikhadi ngalinye likhona indaba yokukhula, izinselelo, noshintsho.

I-Fool iqala uhambo ngamandla angenamkhawulo nokuzizwa kokuhlola. Njengoba siqhubeka ngamakhadi, sibhekana namandla okwenza okumeleke kwe-Magician, umuzwa womuntu wokuqala we-High Priestess, ukuvama kwe-Empress, nesakhiwo se-Emperor. Ikhadi ngalinye lakha phezulu kwelidlule, idala indaba ephelele yokuziphendulela komuntu.

Ukuqonda lamakhadi kusisiza ukubona amaphethini ebomini bethu futhi sinikeze isiqondiso sokubhekana nezinselelo zempilo ngobuhlakani nensika.`
        }
    },
    {
        id: 2,
        title: {
            en: "Moon Phases and Tarot: Enhancing Your Readings",
            zu: "Izigaba ZeNyanga Ne-Tarot: Ukuthuthukisa Ukufunda Kwakho"
        },
        date: "April 5, 2026",
        excerpt: {
            en: "Learn how to align your tarot practice with the lunar cycle for deeper insights...",
            zu: "Funda ukuthi ungahambisa kanjani umsebenzi wakho we-tarot nesiko lenyanga ukuze uthole ukuqonda okujulile..."
        },
        content: {
            en: `The moon has long been associated with intuition, emotions, and the subconscious mind. By aligning your tarot practice with the lunar phases, you can tap into different energies throughout the month.

During the New Moon, focus on cards that represent new beginnings and planting seeds for the future. The Waxing Moon is perfect for growth-oriented readings and taking action on your goals. The Full Moon brings clarity and illumination - ideal for gaining insight into complex situations. The Waning Moon supports release and letting go, helping you shed what no longer serves you.

Track your readings alongside the moon phases and notice how the energy shifts. You may find that certain cards appear more frequently during specific phases, offering deeper layers of meaning to your practice.`,
            zu: `Inyanga isesikhathi eside ihlotshaniswa nomuzwa, imizwa, nengqondo engaphansi kwesiqondiso. Ngokuhambisa umsebenzi wakho we-tarot nezigaba zenyanga, ungafinyelela emandleni ahlukene kunyaka wonke.

Ngesikhathi sokuqala kweNyanga, qaphela amakhadi amele ukuqala okusha nokutshala imbewu zesikhathi esizayo. Inyanga Ekhulayo ifanele ukufunda okumele ukukhula nokuthatha isinyathelo emgomeni wakho. Inyanga Egcegceleyo iletha ukucacisa nokukhanyisa - ifanele ukuthola ukuqonda ezimweni ezinzima. Inyanga Enciphekayo isekela ukukhululwa nokulahla, ikusiza ukulahla lokho okungasasebenzi.

Landela ukufunda kwakho kanye nezigaba zenyanga uze uqaphele ukuthi amandla ashintsha kanjani. Ungathola ukuthi amakhadi athile avele kaningi ngesikhathi esithile, anikeza iziqephu ezijulile zencazelo emsebenzini wakho.`
        }
    },
    {
        id: 3,
        title: {
            en: "Eastern Philosophy Meets Western Tarot",
            zu: "Ifilosofi Yasempumalanga Ihlangana Ne-Tarot Yasentshonalanga"
        },
        date: "April 1, 2026",
        excerpt: {
            en: "Exploring the connections between tarot symbolism and Eastern spiritual traditions...",
            zu: "Ukuhlola ukuxhumana phakathi kwezimpawu ze-tarot nezinkolelo zomoya zasempumalanga..."
        },
        content: {
            en: `While tarot originated in the West, many of its themes resonate deeply with Eastern philosophical traditions. The concept of karma in the Wheel of Fortune, the meditation practices reflected in The Hermit, and the balance of Temperance all find parallels in Buddhist, Taoist, and Hindu teachings.

The Fool's journey mirrors the spiritual seeker's path toward enlightenment. Each challenge faced, each lesson learned, brings us closer to understanding our true nature. The Hanged Man's surrender echoes Taoist wu wei - the art of effortless action through alignment with the natural flow.

By integrating these Eastern perspectives into your tarot readings, you can access a deeper well of wisdom that transcends cultural boundaries and speaks to universal human experiences.`,
            zu: `Nakuba i-tarot iqale kwesentshonalanga, iminingwane yayo eminingi ivakaliswa ngokujulile nezinkolelo zefilosofi zasempumalanga. Umqondo we-karma ku-Wheel of Fortune, imikhuba yokuzindla ebonakala ku-The Hermit, nobunengi be-Temperance bonke bafumana ukufana ezifundisweni zeBuddhist, Taoist, kanye neHindu.

Uhambo lwe-Fool lulingana nohambo lomfunzi womoya olubhekiswe ekukhanyiseni. Inselelo ngayinye ebibhekisiswa, isifundo ngasinye esifundiwe, siseduze nokuqonda imvelo yethu yangempela. Ukuzinikela kwe-Hanged Man kumemezela i-wu wei ye-Taoist - ukucoba kwesenzo ngekhandlela ngokuhambisana nomfula wemvelo.

Ngokuhlanganisa lemiqondo yasempumalanga ekufundeni kwakho kwe-tarot, ungafinyelela emthonjeni ojulile wobuhlakani odlula imingcele yamasiko futhi ukhuluma nokuziphendulela komuntu wonke.`
        }
    }
];

// State
let activeTab = 'inspiration';
let selectedArticle = null;

// DOM Elements
const currentDateEl = document.getElementById('currentDate');
const cardImg = document.getElementById('cardImg');
const dailyCardName = document.getElementById('dailyCardName');
const dailyCardKeywords = document.getElementById('dailyCardKeywords');
const refreshBtn = document.getElementById('refreshBtn');
const newsList = document.getElementById('newsList');
const articleDetail = document.getElementById('articleDetail');
const articleDate = document.getElementById('articleDate');
const articleTitle = document.getElementById('articleTitle');
const articleContent = document.getElementById('articleContent');
const backToNews = document.getElementById('backToNews');
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const mobileMenu = document.getElementById('mobileMenu');

// Initialize
function initDailyInspiration() {
    updateCrystalDisplay();
    loadLanguage();
    setCurrentDate();
    setDailyCard();
    renderNews();

    // Event Listeners
    if (refreshBtn) {
        refreshBtn.addEventListener('click', getNewInspiration);
    }

    if (backToNews) {
        backToNews.addEventListener('click', () => switchTab('news'));
    }

    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', toggleMobileMenu);
    }

    // Tab buttons
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const tab = btn.dataset.tab;
            if (tab === 'news' && selectedArticle) {
                switchTab('article');
            } else {
                switchTab(tab);
            }
        });
    });

    // Language switchers
    document.querySelectorAll('.lang-btn, .mobile-lang-btn').forEach(btn => {
        btn.addEventListener('click', () => setLanguage(btn.dataset.lang));
    });

    // Close modals on overlay click
    document.querySelectorAll('.modal-overlay').forEach(overlay => {
        overlay.addEventListener('click', closeCrystalShop);
    });
}

// Set current date
function setCurrentDate() {
    if (!currentDateEl) return;

    const today = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    currentDateEl.textContent = today.toLocaleDateString('en-US', options);
}

// Set daily card based on date
function setDailyCard() {
    const today = new Date();
    const dayOfYear = Math.floor((today - new Date(today.getFullYear(), 0, 0)) / 86400000);
    const cardIndex = dayOfYear % tarotCards.length;
    const card = tarotCards[cardIndex];

    displayCard(card);
}

// Display card
function displayCard(card) {
    if (cardImg) {
        cardImg.src = card.imageUrl;
        cardImg.alt = card.name;
    }
    if (dailyCardName) {
        dailyCardName.textContent = card.name;
    }
    if (dailyCardKeywords) {
        dailyCardKeywords.textContent = card.keywords;
    }
}

// Get new inspiration (random card)
function getNewInspiration() {
    if (refreshBtn) {
        refreshBtn.classList.add('spinning');
        refreshBtn.disabled = true;
    }

    setTimeout(() => {
        const randomCard = tarotCards[Math.floor(Math.random() * tarotCards.length)];
        displayCard(randomCard);

        if (refreshBtn) {
            refreshBtn.classList.remove('spinning');
            refreshBtn.disabled = false;
        }
    }, 800);
}

// Render news
function renderNews() {
    if (!newsList) return;

    const lang = localStorage.getItem('tarot-lang') || 'en';

    newsList.innerHTML = tarotNews.map(article => `
        <div class="news-item" data-article-id="${article.id}">
            <p class="news-date">${article.date}</p>
            <h3 class="news-title">${article.title[lang] || article.title.en}</h3>
            <p class="news-excerpt">${article.excerpt[lang] || article.excerpt.en}</p>
        </div>
    `).join('');

    // Add click handlers
    document.querySelectorAll('.news-item').forEach(item => {
        item.addEventListener('click', () => {
            const articleId = parseInt(item.dataset.articleId);
            const article = tarotNews.find(a => a.id === articleId);
            if (article) openArticle(article);
        });
    });
}

// Open article
function openArticle(article) {
    selectedArticle = article;
    const lang = localStorage.getItem('tarot-lang') || 'en';

    if (articleDate) {
        articleDate.textContent = article.date;
    }
    if (articleTitle) {
        articleTitle.textContent = article.title[lang] || article.title.en;
    }
    if (articleContent) {
        const content = article.content[lang] || article.content.en;
        articleContent.innerHTML = content.split('\n\n').map(p => `<p>${p}</p>`).join('');
    }

    switchTab('article');
}

// Switch tab
function switchTab(tab) {
    activeTab = tab;

    // Update tab buttons
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.tab === tab || (tab === 'article' && btn.dataset.tab === 'news'));
    });

    // Update tab content
    document.querySelectorAll('.tab-content').forEach(content => {
        content.classList.remove('active');
    });

    const activeContent = document.getElementById(tab + 'Tab');
    if (activeContent) {
        activeContent.classList.add('active');
    }
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

    // Re-render news to update titles
    renderNews();

    // Update article if open
    if (selectedArticle && activeTab === 'article') {
        openArticle(selectedArticle);
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
document.addEventListener('DOMContentLoaded', initDailyInspiration);
