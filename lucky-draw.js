/* ==================== Lucky Draw Logic with Daily Limit ==================== */

// Daily Draw Settings
const DAILY_FREE_DRAWS = 2;
const CRYSTAL_COST_PER_DRAW = 5;
const DRAW_KEY = 'tarot_lucky_draws';
const LAST_DRAW_DATE_KEY = 'tarot_last_draw_date';

// Fortune Data
const fortunes = [
    {
        title: { en: "Supreme Fortune", zu: "Inhlanhla Ephezulu" },
        poem: {
            en: "The clouds part to reveal the bright moon,\nAll obstacles fade like morning dew.\nSuccess awaits at every turn,\nYour heart's desires will soon bloom.",
            zu: "Amafhu avuleka ukubonisa inyanga ebengezelayo,\nZonke izithiyo ziyanyamalala njengamathe emadwaleni.\nImpumelelo ilindele ekujikeni kwawo wonke amacala,\nIzifiso zenyoyo yakho zizovuthisa maduze."
        },
        guidance: {
            en: {
                career: "Excellent prospects ahead",
                love: "Harmonious connections",
                health: "Vibrant energy",
                wealth: "Abundance flows"
            },
            zu: {
                career: "Ithemba elihle likhona phambili",
                love: "Ukuxhumana okuhambisanayo",
                health: "Amandla anempilo",
                wealth: "Ingxenye yeningi ivela"
            }
        }
    },
    {
        title: { en: "Great Blessing", zu: "Isibusiso Esikhulu" },
        poem: {
            en: "Like spring rain nourishing the earth,\nGood fortune follows your rebirth.\nPatience and wisdom guide your way,\nBright blessings come with each new day.",
            zu: "Njengemvula yasekwindla enondlayo umhlaba,\nInhlanhla enhle ikulandela ukuvuselelwa kwakho.\nUkubekezela nobuhlakani kuyakuhola indlela yakho,\nIzibusiso ezikhanyayo ziyeza ngosuku ngalunye."
        },
        guidance: {
            en: {
                career: "Steady progress",
                love: "Deep understanding",
                health: "Balance and vitality",
                wealth: "Steady growth"
            },
            zu: {
                career: "Inqubekela phambili eqhubekayo",
                love: "Ukuqonda okujulile",
                health: "Ukuhlunga nempilo",
                wealth: "Ukhula okuqhubekayo"
            }
        }
    },
    {
        title: { en: "Middle Fortune", zu: "Inhlanhla Yaphakathi" },
        poem: {
            en: "The path winds but leads to light,\nKeep faith through day and night.\nSmall steps forward bring great gain,\nSunshine follows after rain.",
            zu: "Umzila uyajika kodwa uyaya ekukhanyeni,\nGcina ukukholwa emini nasebusuku.\nIzinyathelo ezincane ezinye ziletha inzuzo enkulu,\nIlanga livela emva kwemvula."
        },
        guidance: {
            en: {
                career: "Patience needed",
                love: "Communication is key",
                health: "Rest and renewal",
                wealth: "Careful planning"
            },
            zu: {
                career: "Kudingeka ukuhlala uzinzile",
                love: "Ukuxhumana kuyinqondo",
                health: "Ukuphumula nokuvuselelwa",
                wealth: "Ukuhlela ngokucophelela"
            }
        }
    },
    {
        title: { en: "Rising Fortune", zu: "Inhlanhla Ekhulayo" },
        poem: {
            en: "The dawn breaks on the eastern hill,\nNew opportunities fulfill.\nWith courage face what lies ahead,\nYour destiny is yours to thread.",
            zu: "Ukuhlwa kuyaphula entabeni yasempumalanga,\nAmathuba amasha agcwaliseka.\nNgesibindi ubhekene nalokho okukhomba phambili,\nInhloso yakho iyeyakho ukuyiluka."
        },
        guidance: {
            en: {
                career: "New doors opening",
                love: "Fresh beginnings",
                health: "Building strength",
                wealth: "Smart investments"
            },
            zu: {
                career: "Amasango amasha avulekile",
                love: "Ukuqala okusha",
                health: "Ukwakha amandla",
                wealth: "Izibekelo ezihlakaniphile"
            }
        }
    },
    {
        title: { en: "Gentle Fortune", zu: "Inhlanhla Ethambile" },
        poem: {
            en: "Soft winds carry seeds of change,\nRearrange your life in range.\nGentle power flows within,\nHelping you to lose or win.",
            zu: "Umoya othambile uphetha imbewu yoshintsho,\nHlela kabusha impilo yakho ngaphakathi.\namandla athambile aya ngaphakathi,\nAkusiza ukulahla noma ukunqoba."
        },
        guidance: {
            en: {
                career: "Steady approach wins",
                love: "Gentle persuasion",
                health: "Mind-body harmony",
                wealth: "Conservative moves"
            },
            zu: {
                career: "Indlela eqhubekayo iyaphumelela",
                love: "Ukuyeka okuthambile",
                health: "Ukuhlanganiswa komzimba nengqondo",
                wealth: "Izinyathelo ezivikelwe"
            }
        }
    }
];

// State
let currentFortune = null;
let isDrawing = false;
let donationAmount = 5;

// DOM Elements
const limitBar = document.getElementById('limitBar');
const limitText = document.getElementById('limitText');
const dot1 = document.getElementById('dot1');
const dot2 = document.getElementById('dot2');
const deityContainer = document.getElementById('deityContainer');
const drawBtn = document.getElementById('drawBtn');
const resetBtn = document.getElementById('resetBtn');
const costIndicator = document.getElementById('costIndicator');
const fortuneResult = document.getElementById('fortuneResult');
const fortuneTitle = document.getElementById('fortuneTitle');
const fortunePoem = document.getElementById('fortunePoem');
const guidanceCareer = document.getElementById('guidanceCareer');
const guidanceLove = document.getElementById('guidanceLove');
const guidanceHealth = document.getElementById('guidanceHealth');
const guidanceWealth = document.getElementById('guidanceWealth');
const crystalBtn = document.getElementById('crystalBtn');
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const mobileMenu = document.getElementById('mobileMenu');

// Crystal Shop Modal Elements
const crystalShopModal = document.getElementById('crystalShopModal');
const modalClose = document.getElementById('modalClose');
const modalBuyBtn = document.getElementById('modalBuyBtn');

// Initialize
function initLuckyDraw() {
    updateCrystalDisplay();
    loadLanguage();
    updateDailyLimitDisplay();

    // Event Listeners
    if (drawBtn) drawBtn.addEventListener('click', handleDraw);
    if (resetBtn) resetBtn.addEventListener('click', handleReset);
    // if (crystalBtn) crystalBtn.addEventListener('click', openCrystalShop);
    if (mobileMenuBtn) mobileMenuBtn.addEventListener('click', toggleMobileMenu);

    // Donation buttons
    document.querySelectorAll('.donation-btn').forEach(btn => {
        btn.addEventListener('click', () => selectDonationAmount(btn));
    });

    const donateBtn = document.getElementById('donateBtn');
    if (donateBtn) donateBtn.addEventListener('click', handleDonation);

    // Crystal shop
    // if (modalClose) modalClose.addEventListener('click', closeCrystalShop);
    // if (modalBuyBtn) modalBuyBtn.addEventListener('click', handleCrystalPurchase);

    // Package selection
    document.querySelectorAll('.package').forEach(pkg => {
        pkg.addEventListener('click', () => selectPackage(pkg));
    });

    // Language switchers
    document.querySelectorAll('.lang-btn, .mobile-lang-btn').forEach(btn => {
        btn.addEventListener('click', () => setLanguage(btn.dataset.lang));
    });

    // Close modals on overlay click
    // document.querySelectorAll('.modal-overlay').forEach(overlay => {
    //     overlay.addEventListener('click', closeCrystalShop);
    // });
}

// Daily Limit Functions
function getToday() {
    return new Date().toISOString().split('T')[0];
}

function getDrawsToday() {
    const lastDate = localStorage.getItem(LAST_DRAW_DATE_KEY);
    const today = getToday();

    if (lastDate !== today) {
        // Reset for new day
        localStorage.setItem(LAST_DRAW_DATE_KEY, today);
        localStorage.setItem(DRAW_KEY, '0');
        return 0;
    }

    return parseInt(localStorage.getItem(DRAW_KEY) || '0');
}

function recordDraw() {
    const draws = getDrawsToday();
    localStorage.setItem(DRAW_KEY, (draws + 1).toString());
    localStorage.setItem(LAST_DRAW_DATE_KEY, getToday());
}

function getRemainingDraws() {
    return Math.max(0, DAILY_FREE_DRAWS - getDrawsToday());
}

function isFreeDrawAvailable() {
    return getRemainingDraws() > 0;
}

function updateDailyLimitDisplay() {
    const remaining = getRemainingDraws();
    const lang = localStorage.getItem('tarot-lang') || 'en';

    // Update dots
    if (dot1) {
        dot1.className = 'limit-dot ' + (remaining >= 1 ? 'active' : 'used');
    }
    if (dot2) {
        dot2.className = 'limit-dot ' + (remaining >= 2 ? 'active' : 'used');
    }

    // Update text
    if (limitText) {
        if (remaining > 0) {
            limitText.textContent = remaining === 1
                ? (lang === 'zu' ? '1 okusele namuhla' : '1 remaining today')
                : `${remaining} ${lang === 'zu' ? 'okusele namuhla' : 'remaining today'}`;
            limitText.style.color = '';
        } else {
            limitText.textContent = lang === 'zu' ? 'Amahhala aphelile - sebenzisa amakristali' : 'Free draws used - Use crystals';
            limitText.style.color = '#dc2626';
        }
    }

    // Update draw button
    if (drawBtn) {
        if (remaining === 0) {
            // Check if user has crystals
            const crystals = getCrystals();
            if (crystals >= CRYSTAL_COST_PER_DRAW) {
                drawBtn.innerHTML = `💎 ${lang === 'zu' ? 'Dweba ngama-' : 'Draw for '} ${CRYSTAL_COST_PER_DRAW}`;
                drawBtn.style.background = 'linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%)';
            } else {
                drawBtn.innerHTML = lang === 'zu' ? 'Thenga Amakristali' : 'Buy Crystals';
                drawBtn.style.background = 'linear-gradient(135deg, #e8ac3a 0%, #d4a76a 100%)';
            }
        } else {
            drawBtn.textContent = getTranslation(lang, 'drawFortune');
            drawBtn.style.background = '';
        }
    }

    // Show/hide cost indicator
    if (costIndicator) {
        costIndicator.style.display = remaining === 0 ? 'block' : 'none';
    }
}

// Handle Draw
function handleDraw() {
    if (isDrawing) return;

    const lang = localStorage.getItem('tarot-lang') || 'en';

    // Check if free draw or need to pay
    if (!isFreeDrawAvailable()) {
        const crystals = getCrystals();
        if (crystals < CRYSTAL_COST_PER_DRAW) {
            // Not enough crystals, open shop
            openCrystalShop();
            return;
        }

        // Spend crystals
        const result = spendCrystals(CRYSTAL_COST_PER_DRAW);
        if (!result.success) {
            openCrystalShop();
            return;
        }
    }

    isDrawing = true;

    // Record the draw
    recordDraw();

    // Animation
    if (deityContainer) {
        deityContainer.classList.add('shaking');
    }

    if (drawBtn) {
        drawBtn.disabled = true;
        drawBtn.classList.add('spinning');
    }

    // Draw after delay
    setTimeout(() => {
        // Stop animation
        if (deityContainer) {
            deityContainer.classList.remove('shaking');
        }

        // Get random fortune
        const fortune = fortunes[Math.floor(Math.random() * fortunes.length)];
        currentFortune = fortune;

        // Display result
        displayFortune(fortune);

        // Update UI
        isDrawing = false;
        if (drawBtn) {
            drawBtn.disabled = false;
            drawBtn.classList.remove('spinning');
        }

        // Hide draw section, show result
        document.getElementById('drawSection').style.display = 'none';
        if (fortuneResult) {
            fortuneResult.style.display = 'block';
        }
        if (resetBtn) {
            resetBtn.style.display = 'inline-flex';
        }

        // Update limit display
        updateDailyLimitDisplay();

        // Scroll to result
        if (fortuneResult) {
            fortuneResult.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }
    }, 1500);
}

// Display Fortune
function displayFortune(fortune) {
    const lang = localStorage.getItem('tarot-lang') || 'en';

    if (fortuneTitle) {
        fortuneTitle.textContent = fortune.title[lang] || fortune.title.en;
    }

    if (fortunePoem) {
        fortunePoem.textContent = fortune.poem[lang] || fortune.poem.en;
    }

    const guidance = fortune.guidance[lang] || fortune.guidance.en;

    if (guidanceCareer) guidanceCareer.textContent = guidance.career;
    if (guidanceLove) guidanceLove.textContent = guidance.love;
    if (guidanceHealth) guidanceHealth.textContent = guidance.health;
    if (guidanceWealth) guidanceWealth.textContent = guidance.wealth;
}

// Handle Reset
function handleReset() {
    currentFortune = null;

    // Hide result, show draw section
    if (fortuneResult) {
        fortuneResult.style.display = 'none';
    }
    document.getElementById('drawSection').style.display = 'block';
    if (resetBtn) {
        resetBtn.style.display = 'none';
    }

    // Update button state
    updateDailyLimitDisplay();

    // Scroll to draw section
    document.getElementById('drawSection').scrollIntoView({ behavior: 'smooth', block: 'center' });
}

// Donation Functions
function selectDonationAmount(btn) {
    document.querySelectorAll('.donation-btn').forEach(b => b.classList.remove('selected'));
    btn.classList.add('selected');
    donationAmount = parseInt(btn.dataset.amount);

    // Clear custom input
    const customInput = document.getElementById('donationCustom');
    if (customInput) customInput.value = '';
}

function handleDonation() {
    const lang = localStorage.getItem('tarot-lang') || 'en';

    // Get amount
    const customInput = document.getElementById('donationCustom');
    const finalAmount = parseInt(customInput?.value) || donationAmount;

    if (finalAmount < 1) {
        alert(lang === 'zu' ? 'Sicela ufake inani elivumelekile' : 'Please enter a valid amount');
        return;
    }

    // PayPal URL
    const paypalUrl = `https://www.paypal.com/cgi-bin/webscr?cmd=_donations&business=YOUR_PAYPAL_EMAIL&amount=${finalAmount}&currency_code=USD&item_name=Tarot%20Lucky%20Draw%20Donation`;

    // Open PayPal
    window.open(paypalUrl, '_blank', 'width=600,height=700,scrollbars=yes');
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

    // Update fortune display if showing
    if (currentFortune && fortuneResult?.style.display !== 'none') {
        displayFortune(currentFortune);
    }

    // Update limit display
    updateDailyLimitDisplay();
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

// Crystal Shop Functions
// let selectedPackage = null;

function openCrystalShop() {
    if (crystalShopModal) {
        crystalShopModal.classList.add('active');
        updateCrystalDisplay();
    }
}

// function closeCrystalShop() {
//     if (crystalShopModal) {
//         crystalShopModal.classList.remove('active');
//         selectedPackage = null;
//         document.querySelectorAll('.package').forEach(p => p.classList.remove('selected'));
//     }
// }

// function selectPackage(pkg) {
//     document.querySelectorAll('.package').forEach(p => p.classList.remove('selected'));
//     pkg.classList.add('selected');
//     selectedPackage = pkg.dataset.package;
// }

// function handleCrystalPurchase() {
//     const lang = localStorage.getItem('tarot-lang') || 'en';

//     if (!selectedPackage) {
//         alert(getTranslation(lang, 'selectPackage') || 'Please select a package');
//         return;
//     }

//     // Simulate purchase
//     addCrystals(parseInt(selectedPackage));

//     alert((lang === 'zu' ? 'Kungeziwe amakristali angama-' : 'Added ') + selectedPackage + ' crystals!');

//     closeCrystalShop();
//     updateDailyLimitDisplay();
// }

// Initialize on load
document.addEventListener('DOMContentLoaded', () => {
    initLuckyDraw();
    initCrystalShop();
});
