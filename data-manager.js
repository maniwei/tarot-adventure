/**
 * Tarot Adventure - Unified Data Management Module
 * LocalStorage data management shared across all pages
 */

// ==================== Storage Keys ====================
const STORAGE_KEYS = {
    CRYSTALS: 'tarot_crystals',
    LANGUAGE: 'tarot_lang',
    UNLOCKED_MAPS: 'tarot_unlocked_maps',
    UNLOCKED_STORIES: 'tarot_unlocked_stories',
    LAST_DRAW_DATE: 'tarot_last_draw_date',
    TODAY_CARDS: 'tarot_today_cards',
    REVERSE_PROB: 'tarot_reverse_prob',
    USER_PROGRESS: 'tarot_user_progress'
};

// ==================== Crystal Management ====================
const CrystalManager = {
    get() {
        return parseInt(localStorage.getItem(STORAGE_KEYS.CRYSTALS)) || 0;
    },
    
    set(amount) {
        localStorage.setItem(STORAGE_KEYS.CRYSTALS, Math.max(0, amount));
        this.notifyUpdate();
    },
    
    add(amount) {
        const current = this.get();
        this.set(current + amount);
        return current + amount;
    },
    
    spend(amount) {
        const current = this.get();
        if (current >= amount) {
            this.set(current - amount);
            return true;
        }
        return false;
    },
    
    canSpend(amount) {
        return this.get() >= amount;
    },
    
    notifyUpdate() {
        // Trigger custom event to notify page to update display
        window.dispatchEvent(new CustomEvent('crystalsUpdated', {
            detail: { amount: this.get() }
        }));
    },
    
    // Update crystal display on page
    updateDisplay(elementId = 'crystalCount') {
        const elements = document.querySelectorAll(`[id="${elementId}"], .crystal-count, [data-crystal-display]`);
        elements.forEach(el => {
            el.textContent = this.get();
        });
    }
};

// ==================== Language Management ====================
const LanguageManager = {
    DEFAULT_LANG: 'en',
    
    get() {
        return localStorage.getItem(STORAGE_KEYS.LANGUAGE) || this.DEFAULT_LANG;
    },
    
    set(lang) {
        localStorage.setItem(STORAGE_KEYS.LANGUAGE, lang);
        this.notifyUpdate(lang);
    },
    
    notifyUpdate(lang) {
        window.dispatchEvent(new CustomEvent('languageChanged', {
            detail: { language: lang }
        }));
    },
    
    // Supported language list
    getSupportedLanguages() {
        return ['en', 'zu'];
    },
    
    isValid(lang) {
        return this.getSupportedLanguages().includes(lang);
    }
};

// ==================== Map Unlock Management ====================
const MapUnlockManager = {
    getUnlocked() {
        try {
            return JSON.parse(localStorage.getItem(STORAGE_KEYS.UNLOCKED_MAPS)) || [];
        } catch {
            return [];
        }
    },
    
    setUnlocked(maps) {
        localStorage.setItem(STORAGE_KEYS.UNLOCKED_MAPS, JSON.stringify(maps));
    },
    
    isUnlocked(mapId) {
        const unlocked = this.getUnlocked();
        return unlocked.includes(mapId);
    },
    
    unlock(mapId) {
        const unlocked = this.getUnlocked();
        if (!unlocked.includes(mapId)) {
            unlocked.push(mapId);
            this.setUnlocked(unlocked);
            return true;
        }
        return false;
    },
    
    lock(mapId) {
        const unlocked = this.getUnlocked();
        const index = unlocked.indexOf(mapId);
        if (index > -1) {
            unlocked.splice(index, 1);
            this.setUnlocked(unlocked);
            return true;
        }
        return false;
    },
    
    clear() {
        localStorage.removeItem(STORAGE_KEYS.UNLOCKED_MAPS);
    }
};

// ==================== Story Unlock Management ====================
const StoryUnlockManager = {
    getUnlocked() {
        try {
            return JSON.parse(localStorage.getItem(STORAGE_KEYS.UNLOCKED_STORIES)) || {};
        } catch {
            return {};
        }
    },
    
    setUnlocked(stories) {
        localStorage.setItem(STORAGE_KEYS.UNLOCKED_STORIES, JSON.stringify(stories));
    },
    
    isUnlocked(storyId) {
        const unlocked = this.getUnlocked();
        return unlocked[storyId] === true;
    },
    
    unlock(storyId) {
        const unlocked = this.getUnlocked();
        unlocked[storyId] = true;
        this.setUnlocked(unlocked);
    },
    
    getUnlockDate(storyId) {
        const unlocked = this.getUnlocked();
        return unlocked[`${storyId}_date`] || null;
    },
    
    clear() {
        localStorage.removeItem(STORAGE_KEYS.UNLOCKED_STORIES);
    }
};

// ==================== Daily Draw Limit Management ====================
// Supports different types: quest(Tarot Quest), lucky(Lucky Draw)
const DailyDrawManager = {
    getTodayDate() {
        return new Date().toISOString().split('T')[0];
    },
    
    // Get storage key for specified type
    _getDateKey(type) {
        return `tarot_${type}_draw_date`;
    },
    
    _getCardsKey(type) {
        return `tarot_${type}_today_cards`;
    },
    
    getLastDrawDate(type = 'quest') {
        return localStorage.getItem(this._getDateKey(type)) || '';
    },
    
    setLastDrawDate(date, type = 'quest') {
        localStorage.setItem(this._getDateKey(type), date);
    },
    
    getTodayCards(type = 'quest') {
        try {
            const data = localStorage.getItem(this._getCardsKey(type));
            if (!data) return [];
            const parsed = JSON.parse(data);
            // Check if expired
            if (parsed.date !== this.getTodayDate()) {
                return [];
            }
            return parsed.cards || [];
        } catch {
            return [];
        }
    },
    
    setTodayCards(cards, type = 'quest') {
        const data = {
            date: this.getTodayDate(),
            cards: cards,
            timestamp: Date.now()
        };
        localStorage.setItem(this._getCardsKey(type), JSON.stringify(data));
        this.setLastDrawDate(this.getTodayDate(), type);
    },
    
    hasDrawnToday(type = 'quest') {
        return this.getLastDrawDate(type) === this.getTodayDate();
    },
    
    canDrawToday(type = 'quest') {
        return !this.hasDrawnToday(type);
    },
    
    recordDraw(cards, type = 'quest') {
        this.setTodayCards(cards, type);
        this.setLastDrawDate(this.getTodayDate(), type);
    },
    
    getRemainingTime(type = 'quest') {
        const now = new Date();
        const tomorrow = new Date(now);
        tomorrow.setDate(tomorrow.getDate() + 1);
        tomorrow.setHours(0, 0, 0, 0);
        return tomorrow - now;
    },
    
    clear() {
        // Clear all draw types
        localStorage.removeItem(STORAGE_KEYS.LAST_DRAW_DATE);
        localStorage.removeItem(STORAGE_KEYS.TODAY_CARDS);
        localStorage.removeItem('tarot_quest_draw_date');
        localStorage.removeItem('tarot_quest_today_cards');
        localStorage.removeItem('tarot_lucky_draw_date');
        localStorage.removeItem('tarot_lucky_today_cards');
    }
};

// ==================== Reverse Probability Settings ====================
const SettingsManager = {
    getReverseProb() {
        return parseInt(localStorage.getItem(STORAGE_KEYS.REVERSE_PROB)) || 40;
    },
    
    setReverseProb(value) {
        localStorage.setItem(STORAGE_KEYS.REVERSE_PROB, Math.max(0, Math.min(100, value)));
    }
};

// ==================== User Progress Management ====================
const ProgressManager = {
    get() {
        try {
            return JSON.parse(localStorage.getItem(STORAGE_KEYS.USER_PROGRESS)) || {};
        } catch {
            return {};
        }
    },
    
    set(progress) {
        localStorage.setItem(STORAGE_KEYS.USER_PROGRESS, JSON.stringify(progress));
    },
    
    update(key, value) {
        const progress = this.get();
        progress[key] = value;
        this.set(progress);
    },
    
    getValue(key, defaultValue = null) {
        const progress = this.get();
        return progress[key] !== undefined ? progress[key] : defaultValue;
    }
};

// ==================== Data Migration (migrate from old keys to new keys) ====================
const DataMigration = {
    migrate() {
        // Migrate language settings
        const oldLang = localStorage.getItem('questLang');
        if (oldLang && !localStorage.getItem(STORAGE_KEYS.LANGUAGE)) {
            LanguageManager.set(oldLang);
        }
        
        // Migrate adventure unlock data
        const oldAdventures = localStorage.getItem('tarot_unlocked_adventures');
        if (oldAdventures && !localStorage.getItem(STORAGE_KEYS.UNLOCKED_MAPS)) {
            try {
                const parsed = JSON.parse(oldAdventures);
                const maps = Object.keys(parsed).filter(key => parsed[key]);
                MapUnlockManager.setUnlocked(maps);
            } catch {}
        }
        
        // Migrate story unlock data
        const oldStory = localStorage.getItem('tarot_story_unlocked');
        if (oldStory === 'true' && !localStorage.getItem(STORAGE_KEYS.UNLOCKED_STORIES)) {
            StoryUnlockManager.unlock('default');
        }
        
        // Migrate reverse probability
        const oldProb = localStorage.getItem('reverseProb');
        if (oldProb && !localStorage.getItem(STORAGE_KEYS.REVERSE_PROB)) {
            SettingsManager.setReverseProb(parseInt(oldProb));
        }
    }
};

// ==================== Exports ====================
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        STORAGE_KEYS,
        CrystalManager,
        LanguageManager,
        MapUnlockManager,
        StoryUnlockManager,
        DailyDrawManager,
        SettingsManager,
        ProgressManager,
        DataMigration
    };
}

// Auto-run data migration
DataMigration.migrate();
