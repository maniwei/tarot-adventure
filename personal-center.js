let currentFilter = 'all';
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
let cardStoryList = [];
const lang = localStorage.getItem('tarot-lang') || 'en';

const unlockCrads = document.getElementById('unlockCrads');
const noCardResults = document.getElementById('noCardResults');
const storyCardList = document.getElementById('storyCardList');
const unlockStorys = document.getElementById('unlockStorys');
const unlockMaps = document.getElementById('unlockMaps');
const cardModal = document.getElementById('cardModal');
const cardModalBody = document.getElementById('cardModalBody');
const modalClose = document.getElementById('modalClose');
function initPersonalCenter () {
    renderCards();
    renderStorys();
    renderMaps();
    setupFoldAnimation();
    setupCheckDetailButtons();
}

// Setup fold icon animation
function setupFoldAnimation() {
    // Use event delegation to handle clicks on fold icons
    const storyList = document.getElementById('unlockStorys');
    
    if (storyList) {
        storyList.addEventListener('click', function(e) {
            togglePanel(e);
        });
    }
}

function togglePanel (e) {
    const foldIcon = e.target.closest('.fold-icon');
            
    if (foldIcon) {
        // Get the parent story item
        const storyItem = foldIcon.closest('.unlcok-story-item');
        
        if (storyItem) {
            // Find the story content within this story item
            const storyContent = storyItem.querySelector('.story-item-content');
            
            if (storyContent) {
                // Toggle rotation class on fold icon
                foldIcon.classList.toggle('rotated');
                
                // Toggle collapsed class on story content
                storyContent.classList.toggle('collapsed');
            }
        }
    }
}

// Get filtered cards
function getFilteredCards() {
    let cards = tarotCards;

    const cardStoryIdList = getUnlockedContent('cardStory');
    cards = cards.filter(card => cardStoryIdList.includes(card.id));

    return cards;
}
// Render cards grid
function renderCards() {
    if (!unlockCrads) return;

    const cards = getFilteredCards();

    if (cards.length === 0) {
        unlockCrads.style.display = 'none';
        if (noCardResults) noCardResults.style.display = 'block';
        return;
    }

    unlockCrads.style.display = 'grid';
    if (noCardResults) noCardResults.style.display = 'none';

    unlockCrads.innerHTML = cards.map(card => {
        const categoryLabel = categoryLabels[lang][card.category] || categoryLabels.en[card.category];
        return `
            <div class="unlock-card-item" data-card-id="${card.id}">
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
    document.querySelectorAll('.unlock-card-item').forEach(item => {
        item.addEventListener('click', () => {
            const cardId = parseInt(item.dataset.cardId);
            const card = tarotCards.find(c => c.id === cardId);
            if (card) openCardModal(card);
        });
    });
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
    // selectedCard = null;
}
function renderStorys () {
    if (!unlockStorys) return;
    
    const cardStoryIdList = getUnlockedContent('deepStories');
    const positions = lang === 'zu' ? ['Isidlule', 'Samanje', 'Esizayo'] : ['Past', 'Present', 'Future'];
    
    if (cardStoryIdList.length === 0) {
        // Show message when no stories are unlocked
        unlockStorys.innerHTML = `
            <div class="no-stories-message">
                <div class="no-stories-icon">📖</div>
                <p>${lang === 'zu' ? 'Awukawuvuli ndaba. Hamba ku-Deep Reading ukuze uvule izindaba!' : 'No stories unlocked yet. Visit Tarot Quest to unlock stories!'}</p>
            </div>
        `;
        return;
    }
    
    unlockStorys.innerHTML = cardStoryIdList.map(id => {
        const storyKey = `${UNLOCK_KEY_PREFIX}deepStories_${id}`;
        const storyData = JSON.parse(localStorage.getItem(storyKey) || '{}');
        storyData && cardStoryList.push(storyData);
        if(!storyData || !storyData.time) return ;
        return `
            <div class="unlcok-story-item" data-id="${id}">
                <h4>
                    <div>
                        <span>${storyData.time}</span>
                        <button class="view-deep-btn">View Deep Story</button>
                    </div>
                    
                    <span class="fold-icon">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                            <polyline points="9 18 15 12 9 6"></polyline>
                        </svg>
                    </span>
                </h4>
                <div class="story-item-content collapsed">
                    <div class="story-item-desc" >
                        ${storyData.story ? storyData.story.replace(/\n/g, '<br>') : ''}
                    </div>
                    <ul class="unloack-story-cards">
                        ${storyData.drawnCards && storyData.drawnCards.length > 0 ? storyData.drawnCards.map((card, cardIdx) => {
                            return `
                        <li class="card-slot empty ${card.isReversed ? 'reversed' : ''}" data-position="${positions[cardIdx]}" data-i18n-attr="data-position" data-position-en="${positions[cardIdx]}" data-position-zu="${positions[cardIdx]}">
                            <div class="card-content">
                                <img src="${card.imageUrl}" alt="${card.name}">
                                ${card.isReversed ? '<span class="reversed-badge">Reversed</span>' : ''}
                                <div class="card-info-overlay">
                                    <p class="card-position">${positions[cardIdx]}</p>
                                    <p class="card-name">${card.name}</p>
                                </div>
                            </div>
                            <button class="check-detail-btn" 
                                    data-card-id="${card.id}" 
                                    data-card-index="${cardIdx}"
                                    data-story-id="${id}">
                                Check
                            </button>
                        </li>
                            `;
                        }).join('') : ''}
                    </ul>
                </div>
            </div>
        `
    }).join('');
    
}

// Render unlocked adventure maps
function renderMaps() {
    if (!unlockMaps) return;
    
    // Get unlocked maps from localStorage
    const unlockedMaps = getUnlockedContent('adventureMaps');
    
    // Define all available maps
    const allMaps = [
        {
            id: 'lovers',
            icon: '🌹',
            name: lang === 'zu' ? 'Ingadi Yabathandi' : "Lovers' Garden",
            desc: lang === 'zu' 
                ? 'Imibono enengqondo ngezothando kanye nobudlelwano — izithombe zothando, ukuqondisa ngokuhlobana.'
                : 'Emotion & relationships themed readings — romantic imagery, relational guidance.',
            cost: 3
        },
        {
            id: 'wealth',
            icon: '🏢',
            name: lang === 'zu' ? 'Iqhwa Lempahla' : 'Tower of Wealth',
            desc: lang === 'zu'
                ? 'Izihloko zomsebenzi nemali — izinyathelo zenzo eziphathelene nengqondo yentuthuko.'
                : 'Career & money themes — practical action steps and prosperity mindset.',
            cost: 3
        },
        {
            id: 'soul',
            icon: '🌲',
            name: lang === 'zu' ? 'Ihlathi Lomphefumulo' : 'Soul Forest',
            desc: lang === 'zu'
                ? 'Uhambo lokukhula nokuphulukiswa kwangaphakathi — indaba ezicabangelayo nezivuselelayo.'
                : 'Inner growth & healing journeys — reflective and restorative narratives.',
            cost: 3
        }
    ];
    
    // Filter to only show unlocked maps
    const unlockedMapData = allMaps.filter(map => unlockedMaps.includes(map.id));
    
    if (unlockedMapData.length === 0) {
        // Show message when no maps are unlocked
        unlockMaps.innerHTML = `
            <div class="no-maps-message">
                <div class="no-maps-icon">🗺️</div>
                <p>${lang === 'zu' ? 'Awukawuvuli mephu ye-adventure. Hamba ku-Tarot Quest ukuze uvule!' : 'No adventure maps unlocked yet. Visit Tarot Quest to unlock maps!'}</p>
            </div>
        `;
        return;
    }
    
    // Render unlocked maps
    unlockMaps.innerHTML = unlockedMapData.map(map => {
        return `
            <div class="map-item" data-map-id="${map.id}">
                <div class="map-header">
                    <span class="map-name">${map.icon} ${map.name}</span>
                    <span class="map-status unlocked">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                            <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                        ${lang === 'zu' ? 'Kuvuliwe' : 'Unlocked'}
                    </span>
                </div>
                <p class="map-desc">${map.desc}</p>
            </div>
        `;
    }).join('');
}

// Setup check detail button click event
function setupCheckDetailButtons() {
    document.querySelectorAll('.check-detail-btn').forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.stopPropagation(); // Prevent triggering parent element clicks

            const cardId = parseInt(this.dataset.cardId);
            const cardIndex = parseInt(this.dataset.cardIndex);
            
            // Find the card from tarotCards array
            const card = tarotCards.find(c => c.id === cardId);
            
            if (card) {
                // Get additional context from parent elements
                const storyItem = this.closest('.unlcok-story-item');
                const storyId = storyItem ? storyItem.dataset.id : null;
                const cardSlot = this.closest('.card-slot');
                const position = cardSlot ? cardSlot.dataset.position : '';
                
                // Get position name based on language
                const positions = lang === 'zu' ? ['Isidlule', 'Samanje', 'Esizayo'] : ['Past', 'Present', 'Future'];
                const positionName = positions[cardIndex] || position;
                
                // Basic template for story generation
                const meanings = {
                    upright: card.meaning || `${card.name} in its upright position brings messages of clarity and guidance.`,
                    reversed: card.reversal || `${card.name} reversed suggests introspection and hidden layers.`
                };

                const meaning = card.isReversed ? meanings.reversed : meanings.upright;
                const keywords = card.keywords || 'wisdom, growth, change';

                // Generate story content
                const story = `
🔮 **${card.name}** — Position: ${positionName}
${card.isReversed ? '(Reversed)' : '(Upright)'}

${meaning}

**Keywords:** ${keywords}

In the context of your spiritual journey, this card speaks to the deeper currents at play. ${meaning} Whether you're facing decisions, seeking clarity, or navigating transformation, this card invites you to reflect on the themes of ${keywords.split(',')[0]}.

The wisdom here is not about predicting the future, but about recognizing patterns within yourself. What resonates with you about this card's message? How might these themes of ${keywords} manifest in your current situation?

Remember, every card is a mirror reflecting both your inner world and the circumstances around you. Trust your intuition, and let this reading be a compass for your next steps.

May you find the clarity and peace you seek.
                `;
                
                // Find the story-item-desc element within the same story item
                const storyDescElement = storyItem ? storyItem.querySelector('.story-item-desc') : null;
                
                if (storyDescElement) {
                    // Render the story content, converting newlines to <br> tags
                    storyDescElement.innerHTML = story.trim().replace(/\n/g, '<br>');
                } else {
                    console.warn('Story description element not found');
                }
            } else {
                console.warn('Card not found with id:', cardId);
            }
        });
    });
}

// Initialize on load
document.addEventListener('DOMContentLoaded', initPersonalCenter);