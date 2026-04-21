/* ==================== Crystal Store System ==================== */

const CRYSTAL_KEY = 'tarot_healing_crystals';
const UNLOCK_KEY_PREFIX = 'tarot_unlocked_';
const FREE_DEEP_STORY_KEY = 'tarot_free_deep_story_used'; // 追踪是否使用过首次免费深度阅读

// Feature costs
const FEATURE_COSTS = {
  deepReading: 1,
  deepStory: 2,
  adventureMap: 3,
  dailyFreeDraws: 3
};

// Get current crystal count
function getCrystals() {
  const stored = localStorage.getItem(CRYSTAL_KEY);
  return stored ? parseInt(stored, 10) : 0;
}

// Add crystals
function addCrystals(amount) {
  const current = getCrystals();
  const newAmount = current + amount;
  localStorage.setItem(CRYSTAL_KEY, newAmount.toString());
  updateCrystalDisplay();
  return newAmount;
}

// Spend crystals
function spendCrystals(amount) {
  const current = getCrystals();
  if (current < amount) {
    return { success: false, message: 'Not enough crystals' };
  }
  localStorage.setItem(CRYSTAL_KEY, (current - amount).toString());
  updateCrystalDisplay();
  return { success: true };
}

// Update crystal display across all pages
function updateCrystalDisplay() {
  const count = getCrystals();

  // Update all crystal count elements
  const countElements = document.querySelectorAll('#crystalCount, #crystalCountDisplay, #modalCrystalCount');
  countElements.forEach(el => {
    if (el) el.textContent = count;
  });
}

// Unlock content (generic)
function unlockContent(contentType, contentId, contentValue) {
  const key = `${UNLOCK_KEY_PREFIX}${contentType}_${contentId}`;
  localStorage.setItem(key, contentValue || 'true');

  // Also store in a list for this content type
  const listKey = `${UNLOCK_KEY_PREFIX}${contentType}_list`;
  const list = JSON.parse(localStorage.getItem(listKey) || '[]');
  if (!list.includes(contentId)) {
    list.push(contentId);
    localStorage.setItem(listKey, JSON.stringify(list));
  }
}

// Check if content is unlocked
function isContentUnlocked(contentType, contentId) {
  const key = `${UNLOCK_KEY_PREFIX}${contentType}_${contentId}`;
  return localStorage.getItem(key) === 'true';
}

// Get all unlocked content of a type
function getUnlockedContent(contentType) {
  const listKey = `${UNLOCK_KEY_PREFIX}${contentType}_list`;
  return JSON.parse(localStorage.getItem(listKey) || '[]');
}

// Reset all crystals (for testing)
function resetCrystals() {
  localStorage.removeItem(CRYSTAL_KEY);
  updateCrystalDisplay();
}

// Reset all unlocks (for testing)
function resetUnlocks() {
  // Get all localStorage keys
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    if (key && key.startsWith(UNLOCK_KEY_PREFIX)) {
      localStorage.removeItem(key);
    }
  }
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
  updateCrystalDisplay();
});

// ==================== Free Deep Story Management ====================
// Check if user has used their free deep story
function hasUsedFreeDeepStory() {
  return localStorage.getItem(FREE_DEEP_STORY_KEY) === 'true';
}

// Mark free deep story as used
function markFreeDeepStoryUsed() {
  localStorage.setItem(FREE_DEEP_STORY_KEY, 'true');
  console.log('✅ Free deep story used! Future readings cost 2 crystals.');
}

// Reset free deep story (for testing/admin)
function resetFreeDeepStory() {
  localStorage.removeItem(FREE_DEEP_STORY_KEY);
  console.log('🔄 Free deep story has been reset.');
}

// Get remaining free deep story views
function getRemaineFreeDeepStoryViews() {
  return hasUsedFreeDeepStory() ? 0 : 1;
}

// Expose functions globally
window.getCrystals = getCrystals;
window.addCrystals = addCrystals;
window.spendCrystals = spendCrystals;
window.unlockContent = unlockContent;
window.isContentUnlocked = isContentUnlocked;
window.getUnlockedContent = getUnlockedContent;
window.updateCrystalDisplay = updateCrystalDisplay;
window.FEATURE_COSTS = FEATURE_COSTS;
window.hasUsedFreeDeepStory = hasUsedFreeDeepStory;
window.markFreeDeepStoryUsed = markFreeDeepStoryUsed;
window.resetFreeDeepStory = resetFreeDeepStory;
window.getRemaineFreeDeepStoryViews = getRemaineFreeDeepStoryViews;
