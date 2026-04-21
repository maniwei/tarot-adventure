/* ==================== Tarot Quest Logic ==================== */

// State
let drawnCards = [];
let isDrawing = false;
let reverseProb = 40;
let currentReadingId = "";

// DOM Elements - will be initialized in initQuest()
let drawBtn, shuffleBtn, openMapBtn, reverseSlider, reverseValue;
let cardDisplay, hintsContent, unlockStoryBtn, deepStoryContent;
let buyCrystalsBtn, crystalBtn, shareBtn, mobileMenuBtn, mobileMenu;
let modal, modalClose, modalBuyBtn;

// Update crystal display
function updateCrystalDisplay() {
  const crystalCount = getCrystals ? getCrystals() : 0;
  const countElements = document.querySelectorAll('#crystalCount, #crystalCountDisplay, #modalCrystalCount');
  countElements.forEach(el => {
    if (el) el.textContent = crystalCount;
  });
}

// Initialize
function initQuest() {
  // Query DOM elements NOW, after DOM is loaded
  drawBtn = document.getElementById('drawCardsBtn');
  shuffleBtn = document.getElementById('shuffleBtn');
  openMapBtn = document.getElementById('openMapBtn');
  reverseSlider = document.getElementById('reverseSlider');
  reverseValue = document.getElementById('reverseValue');
  cardDisplay = document.getElementById('cardDisplay');
  hintsContent = document.getElementById('hintsContent');
  unlockStoryBtn = document.getElementById('unlockStoryBtn');
  deepStoryContent = document.getElementById('deepStoryContent');
  buyCrystalsBtn = document.getElementById('buyCrystalsBtn');
  crystalBtn = document.getElementById('crystalBtn');
  shareBtn = document.getElementById('shareBtn');
  mobileMenuBtn = document.getElementById('mobileMenuBtn');
  mobileMenu = document.getElementById('mobileMenu');
  
  // Modal Elements
  modal = document.getElementById('crystalShopModal');
  modalClose = document.getElementById('modalClose');
  modalBuyBtn = document.getElementById('modalBuyBtn');
  
  updateCrystalDisplay();
  loadLanguage();
  updateMapButtons();
  loadJournal();

  // Event Listeners
  if (drawBtn) drawBtn.addEventListener('click', handleDraw);
  if (shuffleBtn) shuffleBtn.addEventListener('click', handleShuffle);
  if (openMapBtn) openMapBtn.addEventListener('click', () => {
    document.querySelector('.glass-panel').scrollIntoView({ behavior: 'smooth' });
  });
  if (reverseSlider) {
    reverseSlider.addEventListener('input', (e) => {
      reverseProb = parseInt(e.target.value);
      if (reverseValue) reverseValue.textContent = reverseProb;
    });
  }
  // unlockStoryBtn is now handled per-card via card-unlock-btn
  if (buyCrystalsBtn) buyCrystalsBtn.addEventListener('click', openCrystalShop);
  if (crystalBtn) crystalBtn.addEventListener('click', openCrystalShop);
  if (shareBtn) shareBtn.addEventListener('click', handleShare);
  if (mobileMenuBtn) mobileMenuBtn.addEventListener('click', toggleMobileMenu);
  if (modalClose) modalClose.addEventListener('click', closeCrystalShop);
  if (modalBuyBtn) modalBuyBtn.addEventListener('click', handlePurchase);

  // Map unlock buttons
  document.querySelectorAll('.btn-map-unlock').forEach(btn => {
    btn.addEventListener('click', () => handleUnlockMap(btn));
  });

  // Package selection
  document.querySelectorAll('.package').forEach(pkg => {
    pkg.addEventListener('click', () => selectPackage(pkg));
  });

  // Language switchers
  document.querySelectorAll('.lang-btn, .mobile-lang-btn').forEach(btn => {
    btn.addEventListener('click', () => setLanguage(btn.dataset.lang));
  });

  // Close modal on overlay click
  document.querySelector('.modal-overlay')?.addEventListener('click', closeCrystalShop);
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

  // Update position labels
  document.querySelectorAll('.card-slot').forEach((slot, index) => {
    const positions = lang === 'zu' ? ['Isidlule', 'Samanje', 'Esizayo'] : ['Past', 'Present', 'Future'];
    const overlay = slot.querySelector('.card-info-overlay .card-position');
    if (overlay) overlay.textContent = positions[index];
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
function handleDraw() {
  if (isDrawing) return;

  isDrawing = true;
  currentReadingId = Date.now().toString();

  // Clear previous
  setTimeout(() => {
    const cards = getRandomCards(3);

    // Apply reverse probability
    const processedCards = cards.map(card => ({
      ...card,
      isReversed: Math.random() * 100 < reverseProb
    }));

    drawnCards = processedCards;
    displayCards(processedCards);
    displayHints(processedCards);
    isDrawing = false;

    // Cards now have individual unlock buttons
  }, 1000);
}

// Display Cards
function displayCards(cards) {
  const slots = cardDisplay?.querySelectorAll('.card-slot');
  if (!slots) return;

  const lang = localStorage.getItem('tarot-lang') || 'en';
  const positions = lang === 'zu' ? ['Isidlule', 'Samanje', 'Esizayo'] : ['Past', 'Present', 'Future'];

  slots.forEach((slot, index) => {
    const card = cards[index];
    if (card) {
      slot.classList.remove('empty', 'drawing');
      if (card.isReversed) {
        slot.classList.add('reversed');
      } else {
        slot.classList.remove('reversed');
      }

      const isUnlocked = isContentUnlocked('cardStory', card.id);
      const unlockText = lang === 'zu' ? 'Vula Isikhulu' : 'Unlock Story';
      const unlockedText = lang === 'zu' ? 'Uvuliwe' : 'Unlocked';
      
      // Determine button label with cost info
      let buttonLabel = unlockText;
      let buttonClass = 'card-unlock-btn';
      
      if (!isUnlocked) {
        // Show cost (3 crystals per card)
        if (lang === 'zu') {
          buttonLabel = `Vula (3 💎)`;
        } else {
          buttonLabel = `Unlock (3 💎)`;
        }
        buttonClass += ' card-paid-unlock';
      } else {
        buttonClass += ' unlocked';
      }
      
      slot.innerHTML = `
        <div class="card-content">
          <img src="${card.imageUrl}" alt="${card.name}">
          ${card.isReversed ? '<span class="reversed-badge">Reversed</span>' : ''}
          <div class="card-info-overlay">
            <p class="card-position">${positions[index]}</p>
            <p class="card-name">${card.name}</p>
          </div>
        </div>
        <button class="${buttonClass}" 
                data-card-id="${card.id}" 
                data-card-index="${index}"
                ${isUnlocked ? 'disabled' : ''}>
          ${isUnlocked ? unlockedText : buttonLabel}
        </button>
      `;

      // Add click handler to unlock button
      const unlockBtn = slot.querySelector('.card-unlock-btn');
      if (unlockBtn && !isUnlocked) {
        unlockBtn.addEventListener('click', () => {
          unlockCardStory(index, card);
        });
      }
    }
  });
}

// Unlock individual card story
function unlockCardStory(index, card) {
  const crystals = getCrystals ? getCrystals() : 0;
  const lang = localStorage.getItem('tarot-lang') || 'en';
  const cost = 3;

  if (crystals < cost) {
    const msg = lang === 'zu' 
      ? `❌ Udinga ${cost} amakristali. Unayo ${crystals}.\n💡 Thenga amakristali ukuze uvule leli khadi.`
      : `❌ You need ${cost} crystals. You have ${crystals}.\n💡 Buy crystals to unlock this card's story.`;
    alert(msg);
    openCrystalShop();
    return;
  }

  // Spend crystals
  if (spendCrystals) {
    const result = spendCrystals(cost);
    if (!result || !result.success) {
      const msg = lang === 'zu' 
        ? `❌ Imali ayienele!`
        : `❌ Insufficient crystals!`;
      alert(msg);
      return;
    }
  }
  
  // Unlock content
  if (unlockContent) unlockContent('cardStory', card.id);
  
  // Generate and display story
  const story = generateCardStory(card, index);
  displayCardStory(card, story, index);
  
  // Update button
  const slots = cardDisplay?.querySelectorAll('.card-slot');
  if (slots && slots[index]) {
    const btn = slots[index].querySelector('.card-unlock-btn');
    if (btn) {
      const unlockedText = lang === 'zu' ? 'Uvuliwe ✓' : 'Unlocked ✓';
      btn.textContent = unlockedText;
      btn.disabled = true;
      btn.classList.remove('card-paid-unlock');
      btn.classList.add('unlocked');
    }
  }

  updateCrystalDisplay();
  
  // Show success message
  const successMsg = lang === 'zu' 
    ? `✅ Isikhulu sivuliwe! Amakristali ashiyiwe: ${getCrystals()}`
    : `✅ Card story unlocked! Crystals remaining: ${getCrystals()}`;
  console.log(successMsg);
  addToJournal();
}

// Generate story for a specific card
function generateCardStory(card, position) {
  const lang = localStorage.getItem('tarot-lang') || 'en';
  const positions = lang === 'zu' ? ['Isidlule (Past)', 'Samanje (Present)', 'Esizayo (Future)'] : ['Past', 'Present', 'Future'];
  const positionName = positions[position];
  
  // Basic template for story generation
  const meanings = {
    upright: card.meaning || `${card.name} in its upright position brings messages of clarity and guidance.`,
    reversed: card.reversal || `${card.name} reversed suggests introspection and hidden layers.`
  };

  const meaning = card.isReversed ? meanings.reversed : meanings.upright;
  const keywords = card.keywords || 'wisdom, growth, change';
  
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

  return story.trim();
}

// Display story for a card
function displayCardStory(card, story, index) {
  if (!deepStoryContent) return;
  
  const lang = localStorage.getItem('tarot-lang') || 'en';
  const positions = lang === 'zu' ? ['Isidlule (Past)', 'Samanje (Present)', 'Esizayo (Future)'] : ['Past', 'Present', 'Future'];
  
  deepStoryContent.innerHTML = `
    <div class="card-story-display">
      <div class="story-header">
        <img src="${card.imageUrl}" alt="${card.name}" class="story-card-thumb">
        <div class="story-header-info">
          <h3>${card.name}</h3>
          <p class="story-position">${positions[index]}</p>
          <p class="story-keywords">🔮 ${card.keywords}</p>
        </div>
      </div>
      <div class="story-content">
        ${story.split('\n').map(line => line.trim() ? `<p>${line}</p>` : '').join('')}
      </div>
    </div>
  `;
}

// Display Hints
function displayHints(cards) {
  if (!hintsContent) return;

  const lang = localStorage.getItem('tarot-lang') || 'en';

  if (cards.length === 0) {
    hintsContent.innerHTML = `<p data-i18n="drawHint">${getTranslation(lang, 'drawHint')}</p>`;
    return;
  }

  const html = `
    <ul class="hints-list">
      ${cards.map(card => `
        <li>
          <span class="hint-card-name">${card.name}${card.isReversed ? ' (R)' : ''}:</span>
          <span>${card.keywords}</span>
        </li>
      `).join('')}
    </ul>
  `;

  hintsContent.innerHTML = html;

  // Update unlock story button based on free deep story status
  updateUnlockStoryButton();
}

// Update the unlock story button text and appearance
function updateUnlockStoryButton() {
  if (!unlockStoryBtn) return;

  const lang = localStorage.getItem('tarot-lang') || 'en';
  const hasUsedFree = hasUsedFreeDeepStory();

  if (hasUsedFree) {
    // Already used free, show cost
    const cost = FEATURE_COSTS.deepStory;
    const text = lang === 'zu'
      ? `Vula Indaba Ejulile (${cost} 💎)`
      : `Unlock Deep Story (${cost} 💎)`;
    unlockStoryBtn.textContent = text;
    unlockStoryBtn.classList.remove('free-unlock');
    unlockStoryBtn.classList.add('paid-unlock');
  } else {
    // First time, offer free
    const text = lang === 'zu'
      ? 'Vula i-Deep Story - KUMAHHALA! 🎁'
      : 'Unlock Deep Story - FREE! 🎁';
    unlockStoryBtn.textContent = text;
    unlockStoryBtn.classList.add('free-unlock');
    unlockStoryBtn.classList.remove('paid-unlock');
  }

  // Show the button
  unlockStoryBtn.style.display = 'block';
  unlockStoryBtn.addEventListener('click', unlockDeepStory);
}

// Handle Shuffle
function handleShuffle() {
  drawnCards = [];
  currentReadingId = "";

  // Reset card slots
  const slots = cardDisplay?.querySelectorAll('.card-slot');
  slots?.forEach(slot => {
    slot.classList.add('empty');
    slot.classList.remove('reversed');
    slot.innerHTML = '';
  });

  // Reset hints
  const lang = localStorage.getItem('tarot-lang') || 'en';
  if (hintsContent) {
    hintsContent.innerHTML = `<p data-i18n="drawHint">${getTranslation(lang, 'drawHint')}</p>`;
  }

  // Hide unlock story button
  if (unlockStoryBtn) {
    unlockStoryBtn.style.display = 'none';
  }

  // Reset deep story
  if (deepStoryContent) {
    deepStoryContent.textContent = getTranslation(lang, 'storyHint');
  }
}

function formatDate(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');  // 补零
  const day = String(date.getDate()).padStart(2, '0');          // 补零
  const hours = String(date.getHours()).padStart(2, '0');       // 补零
  const minutes = String(date.getMinutes()).padStart(2, '0');   // 补零

  return `${year}-${month}-${day} ${hours}:${minutes}`;
}

// Unlock Deep Story - First time free, then costs crystals
function unlockDeepStory() {
  if (drawnCards.length === 0) return;

  // Check if already unlocked for this reading
  if (isContentUnlocked('deepStories', currentReadingId)) {
    generateDeepStory();
    return;
  }

  // Check if this is the first free deep story view
  const isFirstFree = !hasUsedFreeDeepStory();
  
  if (isFirstFree) {
    // First time - completely free!
    const story = generateDeepStory();
    unlockContent('deepStories', currentReadingId, JSON.stringify({time: formatDate(new Date()), drawnCards, story}));
    markFreeDeepStoryUsed();
    const lang = localStorage.getItem('tarot-lang') || 'en';
    const msg = lang === 'zu' 
      ? '🎁 Sikhulekela! Lokhu kuwu-free! Ekuseni okulandelayo kuzodinga amakristali.'
      : '🎁 First time free! Future deep stories will cost crystals.';
    console.log(msg);
    addToJournal();
  } else {
    // Subsequent times - costs crystals
    const currentCrystals = getCrystals();
    const cost = FEATURE_COSTS.deepStory;
    
    if (currentCrystals < cost) {
      const lang = localStorage.getItem('tarot-lang') || 'en';
      const msg = lang === 'zu'
        ? `Udinga ${cost} amakristali. Unayo ${currentCrystals}.`
        : `You need ${cost} crystals. You have ${currentCrystals}.`;
      console.log('❌ ' + msg);
      openCrystalShop();
      return;
    }

    // Spend crystals
    const result = spendCrystals(cost);
    if (result.success) {
      const story = generateDeepStory();
      unlockContent('deepStories', currentReadingId, JSON.stringify({time: formatDate(new Date()), drawnCards, story}));
      addToJournal();
      const lang = localStorage.getItem('tarot-lang') || 'en';
      const msg = lang === 'zu'
        ? `✅ Amakristali angama-${cost} asebenzisiwe! Amakristali ashiyiwe: ${getCrystals()}`
        : `✅ Used ${cost} crystals! Remaining: ${getCrystals()}`;
      console.log(msg);
    }
  }
}

// Generate Deep Story
function generateDeepStory() {
  const lang = localStorage.getItem('tarot-lang') || 'en';
  const positions = lang === 'zu' ? ['Isidlule', 'Samanje', 'Esizayo'] : ['Past', 'Present', 'Future'];

  const story = drawnCards.map((card, index) => {
    const meaning = card.isReversed ? card.reversed : card.upright;
    return `**${positions[index]}: ${card.name}**${card.isReversed ? ' (Reversed)' : ''}\n${meaning}\n\n*${getTranslation(lang, 'spiritualWisdom')}:* ${card.eastern}`;
  }).join('\n\n');

  if (deepStoryContent) {
    deepStoryContent.textContent = story;
  }
  return story;
}

// Handle Unlock Map
function handleUnlockMap(btn) {
  const mapId = btn.dataset.map;
  const cost = parseInt(btn.dataset.cost);

  // Check if already unlocked
  if (isContentUnlocked('adventureMaps', mapId)) {
    const lang = localStorage.getItem('tarot-lang') || 'en';
    alert(lang === 'zu' ? 'Imephu isivuliwe!' : 'Map already unlocked!');
    return;
  }

  // Check crystals
  const currentCrystals = getCrystals();
  if (currentCrystals < cost) {
    openCrystalShop();
    return;
  }

  // Spend crystals and unlock
  const result = spendCrystals(cost);
  if (result.success) {
    unlockContent('adventureMaps', mapId);
    updateMapButtons();
    const lang = localStorage.getItem('tarot-lang') || 'en';
    alert(lang === 'zu' ? 'Imephu ivuliwe! Hlola uhambo lwakho olusha.' : 'Map unlocked! Explore your new adventure.');
  }
}

// Update Map Buttons
function updateMapButtons() {
  document.querySelectorAll('.btn-map-unlock').forEach(btn => {
    const mapId = btn.dataset.map;
    if (isContentUnlocked('adventureMaps', mapId)) {
      btn.classList.remove('available');
      btn.classList.add('unlocked');
      btn.textContent = getTranslation(localStorage.getItem('tarot-lang') || 'en', 'unlocked') || 'Unlocked';
      btn.disabled = true;
    }
  });
}

// Handle Share
function handleShare() {
  if (drawnCards.length === 0) {
    const lang = localStorage.getItem('tarot-lang') || 'en';
    alert(lang === 'zu' ? 'Sicela udwebe amakhadi kuqala' : 'Please draw cards first');
    return;
  }

  const lang = localStorage.getItem('tarot-lang') || 'en';
  const cardNames = drawnCards.map(c => c.name).join(', ');
  const shareText = lang === 'zu'
    ? `Bheka ukudweba kwami kwe-tarot: ${cardNames}. Vakashela ukuze uthole ukudweba kwakho!`
    : `Check out my tarot draw: ${cardNames}. Visit to get your own reading!`;

  if (navigator.share) {
    navigator.share({
      title: 'Tarot Healing',
      text: shareText,
      url: window.location.origin
    });
  } else {
    navigator.clipboard.writeText(shareText + ' ' + window.location.origin);
    alert(lang === 'zu' ? 'Kukopishelwe ku-clipboard!' : 'Copied to clipboard!');
  }
}

// Journal
function addToJournal() {
  const entries = JSON.parse(localStorage.getItem('tarot_journal') || '[]');
  const lang = localStorage.getItem('tarot-lang') || 'en';
  const positions = lang === 'zu' ? ['Isidlule', 'Samanje', 'Esizayo'] : ['Past', 'Present', 'Future'];

  const entry = {
    id: currentReadingId,
    date: new Date().toLocaleDateString(),
    cards: drawnCards.map((c, i) => `${positions[i]}: ${c.name}${c.isReversed ? ' (R)' : ''}`)
  };

  entries.unshift(entry);
  if (entries.length > 10) entries.pop(); // Keep last 10

  localStorage.setItem('tarot_journal', JSON.stringify(entries));
  loadJournal();
}

function loadJournal() {
  const container = document.getElementById('journalEntries');
  if (!container) return;

  const entries = JSON.parse(localStorage.getItem('tarot_journal') || '[]');
  const lang = localStorage.getItem('tarot-lang') || 'en';

  if (entries.length === 0) {
    container.textContent = getTranslation(lang, 'noEntries') || 'No entries yet';
    return;
  }

  container.innerHTML = entries.map(e => `
    <div style="padding: 12px; background: rgba(255,255,255,0.05); border-radius: 8px; margin-bottom: 8px;">
      <div style="font-size: 0.8rem; color: rgba(255,255,255,0.5); margin-bottom: 4px;">${e.date}</div>
      <div style="font-size: 0.9rem;">${e.cards.join(', ')}</div>
    </div>
  `).join('');
}

// Mobile Menu
function toggleMobileMenu() {
  mobileMenu?.classList.toggle('active');
}

// Crystal Shop
let selectedPackage = null;

function openCrystalShop() {
  if (modal) {
    modal.classList.add('active');
    updateCrystalDisplay();
  }
}

function closeCrystalShop() {
  if (modal) {
    modal.classList.remove('active');
    selectedPackage = null;
    document.querySelectorAll('.package').forEach(p => p.classList.remove('selected'));
  }
}

function selectPackage(pkg) {
  document.querySelectorAll('.package').forEach(p => p.classList.remove('selected'));
  pkg.classList.add('selected');
  selectedPackage = pkg.dataset.package;
}

function handlePurchase() {
  if (!selectedPackage) {
    const lang = localStorage.getItem('tarot-lang') || 'en';
    alert(lang === 'zu' ? 'Sicela ukhethe iphakheji' : 'Please select a package');
    return;
  }

  // Simulate purchase
  addCrystals(parseInt(selectedPackage));

  const lang = localStorage.getItem('tarot-lang') || 'en';
  alert((lang === 'zu' ? 'Kungeziwe amakristali angama-' : 'Added ') + selectedPackage + ' crystals!');

  closeCrystalShop();
}

// Get random cards
function getRandomCards(count) {
  const shuffled = [...tarotCards].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count);
}

// Initialize on load
document.addEventListener('DOMContentLoaded', initQuest);
