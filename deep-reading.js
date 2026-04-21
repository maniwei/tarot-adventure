/* ==================== Deep Reading Logic ==================== */

// State
let question = '';
let spread = 'three';
let drawnCards = [];
let interpretation = '';
let isLoading = false;
let tipAmount = 5;
let readingId = ''; // Unique ID for each reading

// Deep reading storage
const DEEP_READINGS_KEY = 'tarot_deep_readings';
const DEEP_READING_COST = 2; // 2 crystals for full reading

// Spread Configurations
const SPREAD_CONFIG = {
    single: {
        name: 'Single Card',
        name_zu: 'Ikhadi Elilodwa',
        cardCount: 1,
        positions: [
            { name: 'The Answer', name_zu: 'Impendulo', meaning: 'The essence of your situation' }
        ]
    },
    three: {
        name: 'Three Card Spread',
        name_zu: 'Izinhlamvu Ezintathu',
        cardCount: 3,
        positions: [
            { name: 'Past', name_zu: 'Isidlule', meaning: 'What has influenced your situation' },
            { name: 'Present', name_zu: 'Samanje', meaning: 'Your current state' },
            { name: 'Future', name_zu: 'Esizayo', meaning: 'Where this is heading' }
        ]
    },
    celtic: {
        name: 'Celtic Cross',
        name_zu: 'Celtic Cross',
        cardCount: 10,
        positions: [
            { name: 'Present', name_zu: 'Samanje', meaning: 'Your current situation' },
            { name: 'Challenge', name_zu: 'Ingxenye', meaning: 'The obstacle you face' },
            { name: 'Foundation', name_zu: 'Isisekelo', meaning: 'The root of the matter' },
            { name: 'Past', name_zu: 'Isidlule', meaning: 'Recent events that influence you' },
            { name: 'Crown', name_zu: 'UMqondisi', meaning: 'Your goals and aspirations' },
            { name: 'Future', name_zu: 'Esizayo', meaning: 'What is coming soon' },
            { name: 'Self', name_zu: 'Wena', meaning: 'How you see yourself' },
            { name: 'Environment', name_zu: 'Imvelo', meaning: 'External influences' },
            { name: 'Hopes/Fears', name_zu: 'Ithemba/Lokwesaba', meaning: 'Your inner hopes and fears' },
            { name: 'Outcome', name_zu: 'Imiphumela', meaning: 'The likely resolution' }
        ]
    },
    relationship: {
        name: 'Relationship Spread',
        name_zu: 'Ukusabalala Kwobudlelwano',
        cardCount: 2,
        positions: [
            { name: 'You', name_zu: 'Wena', meaning: 'Your perspective and feelings' },
            { name: 'Partner', name_zu: 'Uzakwenu', meaning: 'Their perspective and feelings' }
        ]
    }
};

// DOM Elements
const questionInput = document.getElementById('questionInput');
const spreadSelect = document.getElementById('spreadSelect');
const drawCardsBtn = document.getElementById('drawCardsBtn');
const cardsSection = document.getElementById('cardsSection');
const cardsDisplay = document.getElementById('cardsDisplay');
const getReadingBtn = document.getElementById('getReadingBtn');
const interpretationSection = document.getElementById('interpretationSection');
const interpretationContent = document.getElementById('interpretationContent');
const tipButtonContainer = document.getElementById('tipButtonContainer');
const tipBtn = document.getElementById('tipBtn');
const tipModal = document.getElementById('tipModal');
const tipModalClose = document.getElementById('tipModalClose');
const tipForm = document.getElementById('tipForm');
const tipSuccess = document.getElementById('tipSuccess');
const customAmount = document.getElementById('customAmount');
const paypalBtn = document.getElementById('paypalBtn');
const paypalBtnText = document.getElementById('paypalBtnText');
const crystalBtn = document.getElementById('crystalBtn');
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const mobileMenu = document.getElementById('mobileMenu');

// Crystal Shop Modal Elements
const crystalShopModal = document.getElementById('crystalShopModal');
const modalClose = document.getElementById('modalClose');
const modalBuyBtn = document.getElementById('modalBuyBtn');

// Initialize
function initDeepReading() {
    updateCrystalDisplay();
    loadLanguage();

    // Event Listeners
    if (questionInput) {
        questionInput.addEventListener('input', (e) => {
            question = e.target.value;
        });
    }

    if (spreadSelect) {
        spreadSelect.addEventListener('change', (e) => {
            spread = e.target.value;
        });
    }

    if (drawCardsBtn) drawCardsBtn.addEventListener('click', handleDrawCards);
    if (getReadingBtn) getReadingBtn.addEventListener('click', handleInterpret);
    if (tipBtn) tipBtn.addEventListener('click', openTipModal);
    if (tipModalClose) tipModalClose.addEventListener('click', closeTipModal);
    if (customAmount) {
        customAmount.addEventListener('input', (e) => {
            const value = parseInt(e.target.value);
            if (value > 0) {
                tipAmount = value;
                document.querySelectorAll('.tip-amount-btn').forEach(btn => {
                    btn.classList.remove('selected');
                });
            }
        });
    }
    if (paypalBtn) paypalBtn.addEventListener('click', handlePayPalPayment);
    if (crystalBtn) crystalBtn.addEventListener('click', openCrystalShop);
    if (mobileMenuBtn) mobileMenuBtn.addEventListener('click', toggleMobileMenu);

    // Tip amount buttons
    document.querySelectorAll('.tip-amount-btn').forEach(btn => {
        btn.addEventListener('click', () => selectTipAmount(btn));
    });

    // Crystal shop
    if (modalClose) modalClose.addEventListener('click', closeCrystalShop);
    if (modalBuyBtn) modalBuyBtn.addEventListener('click', handleCrystalPurchase);

    // Package selection
    document.querySelectorAll('.package').forEach(pkg => {
        pkg.addEventListener('click', () => selectPackage(pkg));
    });

    // Language switchers
    document.querySelectorAll('.lang-btn, .mobile-lang-btn').forEach(btn => {
        btn.addEventListener('click', () => setLanguage(btn.dataset.lang));
    });

    // Close modals on overlay click
    document.querySelectorAll('.modal-overlay').forEach(overlay => {
        overlay.addEventListener('click', () => {
            closeTipModal();
            closeCrystalShop();
        });
    });
}

// Load saved language
function loadLanguage() {
    const savedLang = localStorage.getItem('tarot-lang') || 'en';
    setLanguage(savedLang);
}

// Set language
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

    // Update placeholder attributes
    document.querySelectorAll('[data-i18n-attr="placeholder"]').forEach(el => {
        const key = `data-placeholder-${lang}`;
        if (el.dataset[key]) {
            el.placeholder = el.dataset[key];
        }
    });
}

// Get translation helper
function getTranslation(lang, key) {
    if (translations[lang] && translations[lang][key]) {
        return translations[lang][key];
    }
    if (translations.en[key]) {
        return translations.en[key];
    }
    return key;
}

// Handle Draw Cards
function handleDrawCards() {
    const lang = localStorage.getItem('tarot-lang') || 'en';

    if (!question.trim()) {
        alert(getTranslation(lang, 'enterQuestion'));
        return;
    }

    if (isLoading) return;

    isLoading = true;

    // Generate unique reading ID for this draw
    readingId = `reading_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;

    // Update button state
    if (drawCardsBtn) {
        drawCardsBtn.disabled = true;
        drawCardsBtn.innerHTML = `<span class="loading-spinner"></span> ${getTranslation(lang, 'drawing')}`;
    }

    // Clear previous
    drawnCards = [];
    interpretation = '';

    if (interpretationSection) interpretationSection.style.display = 'none';
    if (tipButtonContainer) tipButtonContainer.style.display = 'none';

    // Get spread configuration
    const spreadConfig = SPREAD_CONFIG[spread] || SPREAD_CONFIG.three;
    const cardCount = spreadConfig.cardCount;

    // Show loading in cards section
    if (cardsSection) {
        cardsSection.style.display = 'block';
        cardsDisplay.innerHTML = Array(cardCount).fill(0).map(() => `
            <div class="card-item">
                <div class="card-image-wrapper card-shimmer"></div>
            </div>
        `).join('');
    }

    // Simulate draw delay
    setTimeout(() => {
        const cards = getRandomCards(cardCount);
        drawnCards = cards;
        displayCards(cards);

        isLoading = false;
        if (drawCardsBtn) {
            drawCardsBtn.disabled = false;
            drawCardsBtn.textContent = getTranslation(lang, 'drawCards');
        }
    }, 1500);
}

// Display Cards
function displayCards(cards) {
    const lang = localStorage.getItem('tarot-lang') || 'en';
    const spreadConfig = SPREAD_CONFIG[spread] || SPREAD_CONFIG.three;
    const positions = spreadConfig.positions;

    if (!cardsDisplay) return;

    // Update cards title to show spread name
    const cardsTitle = document.querySelector('.cards-title');
    if (cardsTitle) {
        cardsTitle.textContent = lang === 'zu' ? 
            `I-${spreadConfig.name_zu} Yakho` : 
            `Your ${spreadConfig.name}`;
    }

    // Set data-spread attribute for styling
    cardsDisplay.setAttribute('data-spread', spread);

    cardsDisplay.innerHTML = cards.map((card, index) => {
        const position = positions[index] || { name: `Card ${index + 1}`, name_zu: `Ikhadi ${index + 1}` };
        const positionName = lang === 'zu' ? position.name_zu : position.name;
        return `
        <div class="card-item">
            <div class="card-image-wrapper">
                <img src="${card.imageUrl}" alt="${card.name}">
            </div>
            <p class="card-position">${positionName}</p>
            <p class="card-name">${card.name}</p>
        </div>
    `}).join('');
}

// Handle Interpret
function handleInterpret() {
    if (drawnCards.length === 0) return;

    const lang = localStorage.getItem('tarot-lang') || 'en';

    if (isLoading) return;

    isLoading = true;

    // Update button
    if (getReadingBtn) {
        getReadingBtn.disabled = true;
        getReadingBtn.innerHTML = `<span class="loading-spinner"></span> ${getTranslation(lang, 'reading')}`;
    }

    // Get spread configuration
    const spreadConfig = SPREAD_CONFIG[spread] || SPREAD_CONFIG.three;
    const positions = spreadConfig.positions;

    // Simulate interpretation delay
    setTimeout(() => {
        // Generate readings for each position
        const readings = drawnCards.map((card, index) => {
            const position = positions[index] || { name: `Card ${index + 1}`, name_zu: `Ikhadi ${index + 1}` };
            const positionName = lang === 'zu' ? position.name_zu : position.name;
            return `**${positionName}: ${card.name}**\n${card.upright}\n\n*${getTranslation(lang, 'spiritualWisdom')}:* ${card.eastern}`;
        });

        // Generate spread-specific overall guidance
        let overallGuidance = '';
        if (spread === 'single') {
            overallGuidance = lang === 'zu' ? 
                'Leli khadi elilodwa likhuluma ngokuqonda. Liqinisekisa lokho okuyiqiniso okwamanje futhi likunika isiqondiso esidingekayo.' : 
                'This single card speaks directly to your query. It confirms what you already know to be true and provides the guidance you need right now.';
        } else if (spread === 'three') {
            overallGuidance = lang === 'zu' ? 
                'Amakhadi athathu akhombisa uhambo lokuguqulwa. Thembeka kulolu hlelo futhi uhlale uvulekile kubuhlakani obuvelayo.' : 
                'The three cards suggest a journey of transformation. Trust in the process and remain open to the wisdom that unfolds.';
        } else if (spread === 'celtic') {
            overallGuidance = lang === 'zu' ? 
                'I-Celtic Cross yethula umbono ophelele wesimo sakho. Amakhadi ayakhuluma indlela edidiyelwe yokuxhumana phakathi kwakho, imvelo yakho, kanye nesikhathi esizayo.' : 
                'The Celtic Cross reveals a comprehensive view of your situation. The cards speak of the intricate dance between you, your environment, and the future that awaits.';
        } else if (spread === 'relationship') {
            overallGuidance = lang === 'zu' ? 
                'Le mibono emibili ihlinzeka ngezindlela ezimbini zokubona ubudlelwano. Ukuqonda imizwa yomunye nomunye kungasiza ekuxhumaneni okujulile.' : 
                'These two perspectives offer a dual vision of your relationship. Understanding each other\'s feelings can lead to deeper connection.';
        }

        interpretation = `${getReadingForLang(lang, 'question')} "${question}"\n\n` +
            readings.join('\n\n') +
            `\n\n**${getTranslation(lang, 'overallGuidance') || 'Overall Guidance'}:**\n${overallGuidance}`;

        displayInterpretation(interpretation);

        isLoading = false;
        if (getReadingBtn) {
            getReadingBtn.style.display = 'none';
        }
        if (tipButtonContainer) {
            tipButtonContainer.style.display = 'block';
        }
    }, 2000);
}

// Helper for question text
function getReadingForLang(lang, key) {
    const texts = {
        en: { question: 'Your Reading for:' },
        zu: { question: 'Ukufunda Kwakho:' }
    };
    return texts[lang]?.[key] || texts.en[key];
}

// Display Interpretation
function displayInterpretation(text) {
    if (!interpretationSection || !interpretationContent) return;

    // Convert markdown-style formatting to HTML
    const formattedText = text
        .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
        .replace(/\*(.+?)\*:/g, '<em>$1:</em>');

    interpretationContent.innerHTML = formattedText;
    interpretationSection.style.display = 'block';

    // Scroll to interpretation
    interpretationSection.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

// Tip Modal Functions
function openTipModal() {
    if (tipModal) {
        tipModal.classList.add('active');
        // Reset state
        tipForm.style.display = 'block';
        tipSuccess.style.display = 'none';
        tipAmount = 5;
        document.querySelectorAll('.tip-amount-btn').forEach(btn => {
            btn.classList.toggle('selected', btn.dataset.amount === '5');
        });
        if (customAmount) customAmount.value = '';
    }
}

function closeTipModal() {
    if (tipModal) {
        tipModal.classList.remove('active');
    }
}

function selectTipAmount(btn) {
    document.querySelectorAll('.tip-amount-btn').forEach(b => b.classList.remove('selected'));
    btn.classList.add('selected');
    tipAmount = parseInt(btn.dataset.amount);
    if (customAmount) customAmount.value = '';
}

// PayPal Payment
function handlePayPalPayment() {
    const lang = localStorage.getItem('tarot-lang') || 'en';

    // Update button to processing state
    if (paypalBtn) {
        paypalBtn.disabled = true;
        paypalBtn.innerHTML = `
            <span class="loading-spinner"></span>
            ${getTranslation(lang, 'processing')}
        `;
    }

    // Get final amount
    const finalAmount = parseInt(customAmount?.value) || tipAmount;
    if (finalAmount < 1) {
        alert('Please enter a valid amount');
        paypalBtn.disabled = false;
        paypalBtn.innerHTML = `
            <svg class="paypal-icon" viewBox="0 0 24 24">
                <path d="M7.076 21.337H2.47a.641.641 0 0 1-.633-.74L4.944.901C5.026.382 5.474 0 5.998 0h7.46c2.57 0 4.578.543 5.69 1.81 1.01 1.15 1.304 2.42 1.012 4.287-.023.143-.047.288-.077.437-.983 5.05-4.349 6.797-8.647 6.797h-2.19c-.524 0-.968.382-1.05.9l-1.12 7.106zm14.146-14.42a3.35 3.35 0 0 0-.607-.541c-.013.076-.026.175-.041.254-.93 4.778-4.005 7.201-9.138 7.201h-2.19a.563.563 0 0 0-.556.479l-1.187 7.527h3.574c.458 0 .847-.334.918-.788l.038-.194.73-4.627.047-.253a.929.929 0 0 1 .918-.788h.578c3.74 0 6.662-1.518 7.518-5.907.357-1.832.173-3.362-.602-4.363z"/>
            </svg>
            <span>${getTranslation(lang, 'payWithPaypal')}</span>
        `;
        return;
    }

    // PayPal URL - User should replace with their actual PayPal link
    // Format 1: PayPal.Me link (simpler)
    // const paypalUrl = `https://www.paypal.com/paypalme/YOUR_USERNAME/${finalAmount}`;

    // Format 2: PayPal Donate link (more professional)
    const paypalUrl = `https://www.paypal.com/cgi-bin/webscr?cmd=_donations&business=YOUR_PAYPAL_EMAIL&amount=${finalAmount}&currency_code=USD&item_name=Tarot%20Reading%20Support`;

    // Open PayPal in new window
    const paypalWindow = window.open(paypalUrl, '_blank', 'width=600,height=700,scrollbars=yes');

    // Simulate payment processing
    setTimeout(() => {
        // Show success state
        if (tipForm) tipForm.style.display = 'none';
        if (tipSuccess) tipSuccess.style.display = 'block';

        // Reset PayPal button
        paypalBtn.disabled = false;
        paypalBtn.innerHTML = `
            <svg class="paypal-icon" viewBox="0 0 24 24">
                <path d="M7.076 21.337H2.47a.641.641 0 0 1-.633-.74L4.944.901C5.026.382 5.474 0 5.998 0h7.46c2.57 0 4.578.543 5.69 1.81 1.01 1.15 1.304 2.42 1.012 4.287-.023.143-.047.288-.077.437-.983 5.05-4.349 6.797-8.647 6.797h-2.19c-.524 0-.968.382-1.05.9l-1.12 7.106zm14.146-14.42a3.35 3.35 0 0 0-.607-.541c-.013.076-.026.175-.041.254-.93 4.778-4.005 7.201-9.138 7.201h-2.19a.563.563 0 0 0-.556.479l-1.187 7.527h3.574c.458 0 .847-.334.918-.788l.038-.194.73-4.627.047-.253a.929.929 0 0 1 .918-.788h.578c3.74 0 6.662-1.518 7.518-5.907.357-1.832.173-3.362-.602-4.363z"/>
            </svg>
            <span>${getTranslation(lang, 'payWithPaypal')}</span>
        `;

        // Close modal after delay
        setTimeout(() => {
            closeTipModal();
        }, 3000);
    }, 2000);
}

// Mobile Menu
function toggleMobileMenu() {
    mobileMenu?.classList.toggle('active');
}

// Crystal Shop Functions
let selectedPackage = null;

function openCrystalShop() {
    if (crystalShopModal) {
        crystalShopModal.classList.add('active');
        updateCrystalDisplay();
    }
}

function closeCrystalShop() {
    if (crystalShopModal) {
        crystalShopModal.classList.remove('active');
        selectedPackage = null;
        document.querySelectorAll('.package').forEach(p => p.classList.remove('selected'));
    }
}

function selectPackage(pkg) {
    document.querySelectorAll('.package').forEach(p => p.classList.remove('selected'));
    pkg.classList.add('selected');
    selectedPackage = pkg.dataset.package;
}

function handleCrystalPurchase() {
    const lang = localStorage.getItem('tarot-lang') || 'en';

    if (!selectedPackage) {
        alert(getTranslation(lang, 'selectPackage') || 'Please select a package');
        return;
    }

    // Simulate purchase
    addCrystals(parseInt(selectedPackage));

    alert((lang === 'zu' ? 'Kungeziwe amakristali angama-' : 'Added ') + selectedPackage + ' crystals!');

    closeCrystalShop();
}

// Get stored deep readings
function getStoredReadings() {
    const data = localStorage.getItem(DEEP_READINGS_KEY);
    return data ? JSON.parse(data) : {};
}

// Save deep reading to localStorage
function saveDeepReading(rId, interpretation, cards, positions) {
    const readings = getStoredReadings();
    readings[rId] = {
        interpretation,
        cards: cards.map(c => ({ id: c.id, name: c.name, keywords: c.keywords })),
        positions: positions.map(p => p.name),
        spread,
        question,
        date: new Date().toISOString()
    };
    localStorage.setItem(DEEP_READINGS_KEY, JSON.stringify(readings));
}

// Generate comprehensive deep reading (500-800 characters)
function generateComprehensiveReading(cards, positions, lang) {
    const spreadConfig = SPREAD_CONFIG[spread] || SPREAD_CONFIG.three;
    
    // Build card interpretations
    const cardParts = cards.map((card, index) => {
        const position = positions[index];
        const posName = lang === 'zu' ? position.name_zu : position.name;
        const meaning = position.meaning || '';
        return `【${posName}】\n${card.name}\n${meaning}\n解读：${card.upright}\n灵性智慧：${card.eastern}`;
    }).join('\n\n');

    // Contextual guidance based on spread
    let contextualGuidance = '';
    if (spread === 'single') {
        contextualGuidance = lang === 'zu' ? 
            '这张单一的牌直接回答了你的问题。它既确认了你已知的真理，也为你分身的困惑提供了启蒙。仔细思考这个象征，让它的智慧在你的意识中回响。' :
            'This single card directly answers your question. It confirms the truths you already know while illuminating the confusion you carry. Contemplate this symbol carefully and let its wisdom resonate in your consciousness.';
    } else if (spread === 'three') {
        contextualGuidance = lang === 'zu' ?
            '这三张牌展现了你生命旅程的连贯性。过去的经历已为现在奠定基础，而当下的决定将塑造你的未来。这个阅读邀请你看到生命的完整图景，并在每一步上采取有意识的行动。你的力量不仅在于理解过去，更在于创造你想要的未来。' :
            'These three cards reveal the continuity of your life\'s journey. Past experiences have laid the groundwork for the present, while your current decisions shape your future. This reading invites you to see the complete picture and act consciously at every step. Your power lies not just in understanding the past, but in creating the future you desire.';
    } else if (spread === 'celtic') {
        contextualGuidance = lang === 'zu' ?
            '凯尔特十字牌阵提供了对你情况的全面洞察。它展示了你与环境、内心与外在、意识与无意识之间的复杂舞蹈。这个阅读要求你同时考虑多个维度，看到表面之下的深层动力。最终的解决方案就在这个完整的理解中等待你。' :
            'The Celtic Cross provides a comprehensive insight into your situation. It reveals the intricate dance between you and your environment, between inner and outer, conscious and unconscious. This reading asks you to consider multiple dimensions simultaneously and see the deeper dynamics beneath the surface. The ultimate resolution awaits you in this complete understanding.';
    } else if (spread === 'relationship') {
        contextualGuidance = lang === 'zu' ?
            '这两张牌呈现了关系中双方的视角。理解彼此的感受和看法是通往更深层连接的桥梁。这个阅读邀请你超越表面的冲突，看到对方的真实需求。当你理解了给方的内在世界，真正的和谐才可能因运而生。' :
            'These two cards present the perspectives of both sides in the relationship. Understanding each other\'s feelings and viewpoints is the bridge to deeper connection. This reading invites you to look beyond surface conflicts and see your partner\'s true needs. When you understand their inner world, real harmony can flourish.';
    }

    const finalReading = `✨ 你的问题：${question}\n\n───────────────\n\n${cardParts}\n\n───────────────\n\n💫 ${contextualGuidance}\n\n───────────────\n\n🌙 最终建议：\n信任这个时刻。阅读不是命运的宣判，而是邀请你与自己更深层的智慧对话。让这些象征指引你走向更高的自我意识和真实的生活方式。`;

    return finalReading;
}

// Handle unlock full reading (costs crystals)
function handleUnlockFullReading() {
    if (drawnCards.length === 0) return;

    const lang = localStorage.getItem('tarot-lang') || 'en';
    const crystals = getCrystals ? getCrystals() : 0;

    // Check if already unlocked this reading
    if (readingId && localStorage.getItem(`reading_unlocked_${readingId}`) === 'true') {
        // Show the full reading directly
        const readings = getStoredReadings();
        if (readings[readingId]) {
            displayInterpretation(readings[readingId].interpretation);
        }
        return;
    }

    // Check crystal balance for first-time unlock
    if (crystals < DEEP_READING_COST) {
        const msg = lang === 'zu' ? 
            `❌ 需要 ${DEEP_READING_COST} 个水晶才能解锁完整解读。您现在有 ${crystals} 个。` :
            `❌ You need ${DEEP_READING_COST} crystals to unlock the full reading. You have ${crystals}.`;
        alert(msg);
        openCrystalShop();
        return;
    }

    // Consume crystals
    if (spendCrystals) {
        const result = spendCrystals(DEEP_READING_COST);
        if (!result || !result.success) {
            alert(lang === 'zu' ? '水晶不足！' : 'Not enough crystals!');
            return;
        }
    }

    // Generate and save comprehensive reading
    const spreadConfig = SPREAD_CONFIG[spread] || SPREAD_CONFIG.three;
    const positions = spreadConfig.positions;
    const fullReading = generateComprehensiveReading(drawnCards, positions, lang);

    // Generate unique ID and save
    readingId = `reading_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    saveDeepReading(readingId, fullReading, drawnCards, positions);
    localStorage.setItem(`reading_unlocked_${readingId}`, 'true');

    // Display the full reading
    displayInterpretation(fullReading);

    // Hide the unlock button
    const unlockBtn = document.getElementById('getReadingBtn');
    if (unlockBtn) {
        unlockBtn.style.display = 'none';
    }

    // Show success message
    const successMsg = lang === 'zu' ? 
        `✨ 完整解读已解锁！消耗了 ${DEEP_READING_COST} 个水晶。` :
        `✨ Full reading unlocked! Consumed ${DEEP_READING_COST} crystals.`;
    console.log(successMsg);
}

// Get random cards
function getRandomCards(count) {
    const shuffled = [...tarotCards].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, count);
}

// Initialize on load
document.addEventListener('DOMContentLoaded', initDeepReading);
