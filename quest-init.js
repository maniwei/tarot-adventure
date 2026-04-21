/**
 * Quest Page Initialization - Ensures all event listeners are set up after DOM loads
 * Works with both tarot-quest.html and tarot-quest-complete.html
 */

// Ensure initialization happens after DOM is fully loaded
document.addEventListener('DOMContentLoaded', function() {
    console.log('🎴 Quest page initializing...');
    
    // Initialize quest page if function exists
    if (typeof initQuest === 'function') {
        try {
            initQuest();
            console.log('✅ Quest page initialized successfully!');
        } catch (e) {
            console.error('❌ Error initializing quest page:', e);
        }
    }
    
    // For tarot-quest-complete.html - setup all buttons
    const drawBtn = document.getElementById('drawBtn');
    const shuffleBtn = document.getElementById('shuffleBtn');
    const unlockStoryBtn = document.getElementById('unlockStoryBtn');
    const buyCrystalBtn = document.getElementById('buyCrystalBtn');
    const shareButtons = document.querySelectorAll('.share-btn');
    const adventureUnlockButtons = document.querySelectorAll('.btn-unlock-small');
    
    // Setup draw button
    if (drawBtn && drawBtn.listeners === undefined) {
        console.log('Setting up draw button...');
        drawBtn.listeners = true; // Mark as setup
        drawBtn.addEventListener('click', function() {
            console.log('Draw button clicked');
        });
    }
    
    // Setup shuffle button
    if (shuffleBtn && shuffleBtn.listeners === undefined) {
        console.log('Setting up shuffle button...');
        shuffleBtn.listeners = true;
        shuffleBtn.addEventListener('click', function() {
            console.log('Shuffle button clicked');
        });
   }
    
    // Setup unlock story button
    if (unlockStoryBtn && unlockStoryBtn.listeners === undefined) {
        console.log('Setting up unlock story button...');
        unlockStoryBtn.listeners = true;
        unlockStoryBtn.addEventListener('click', function() {
            console.log('Unlock story button clicked');
        });
    }
    
    // Setup buy crystals button
    if (buyCrystalBtn && buyCrystalBtn.listeners === undefined) {
        console.log('Setting up buy crystals button...');
        buyCrystalBtn.listeners = true;
        buyCrystalBtn.addEventListener('click', function() {
            console.log('Buy crystals button clicked');
            window.location.href = 'crystal-shop.html';
        });
    }
    
    // Setup share buttons
    shareButtons.forEach((btn, index) => {
        if (!btn.listeners) {
            console.log(`Setting up share button ${index}...`);
            btn.listeners = true;
            btn.addEventListener('click', function() {
                console.log('Share button clicked');
            });
        }
    });
    
    // Setup adventure unlock buttons
    adventureUnlockButtons.forEach((btn, index) => {
        if (!btn.listeners) {
            console.log(`Setting up adventure button ${index}...`);
            btn.listeners = true;
            btn.addEventListener('click', function() {
                console.log('Adventure unlock button clicked');
            });
        }
    });
    
    // Setup language buttons
    const langButtons = document.querySelectorAll('.lang-btn, .mobile-lang-btn');
    langButtons.forEach(btn => {
        if (!btn.listeners) {
            btn.listeners = true;
            btn.addEventListener('click', function() {
                const lang = this.dataset.lang;
                console.log('Language changed to:', lang);
                if (typeof setLanguage === 'function') {
                    setLanguage(lang);
                }
            });
        }
    });
    
    // Setup reverse probability slider if it exists
    const reverseSlider = document.getElementById('reverseProb');
    if (reverseSlider && !reverseSlider.listeners) {
        console.log('Setting up reverse probability slider...');
        reverseSlider.listeners = true;
        reverseSlider.addEventListener('input', function() {
            const value = this.value;
            console.log('Reverse probability changed to:', value + '%');
            // Update display
            const display = document.getElementById('reverseValue');
            if (display) display.textContent = value + '%';
            if (typeof SettingsManager !== 'undefined') {
                SettingsManager.setReverseProb(value);
            }
        });
    }
    
    console.log('🎉 Quest page setup complete!');
});

// Also ensure initialization if page already loaded
if (document.readyState === 'complete' || document.readyState === 'interactive') {
    console.log('Page already loaded, triggering init...');
    const event = new Event('DOMContentLoaded');
    document.dispatchEvent(event);
}
