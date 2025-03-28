// src/features/gamification/XPSystem.js

// XP thresholds for each level (e.g., Level 1 requires 0 XP, Level 2 requires 100 XP, etc.)
const LEVEL_THRESHOLDS = [0, 100, 250, 500, 1000, 2000, 4000, 8000, 16000];

/**
 * Calculate the user's current level based on their total XP.
 * @param {number} totalXP - The user's total XP.
 * @returns {number} - The user's current level.
 */
export const calculateLevel = (totalXP) => {
  // Find the highest threshold that the user's XP meets or exceeds
  return LEVEL_THRESHOLDS.findIndex((threshold, index) => {
    const nextThreshold = LEVEL_THRESHOLDS[index + 1];
    return totalXP >= threshold && (nextThreshold === undefined || totalXP < nextThreshold);
  }) + 1;
};

/**
 * Calculate the progress percentage toward the next level.
 * @param {number} totalXP - The user's total XP.
 * @param {number} currentLevel - The user's current level.
 * @returns {number} - The progress percentage (0-100).
 */
export const calculateProgressToNextLevel = (totalXP, currentLevel) => {
  const currentThreshold = LEVEL_THRESHOLDS[currentLevel - 1];
  const nextThreshold = LEVEL_THRESHOLDS[currentLevel] || Infinity;

  // Prevent division by zero if nextThreshold equals currentThreshold
  if (nextThreshold === currentThreshold) return 100;

  const progress = ((totalXP - currentThreshold) / (nextThreshold - currentThreshold)) * 100;
  return Math.min(Math.max(progress, 0), 100); // Clamp between 0 and 100
};

/**
 * Add XP to the user's total and update their level and progress.
 * @param {number} totalXP - The user's current total XP.
 * @param {number} xpToAdd - The amount of XP to add.
 * @returns {{ totalXP: number, level: number, progress: number }} - Updated stats.
 */
export const addXP = (totalXP, xpToAdd) => {
  const newTotalXP = totalXP + xpToAdd;
  const newLevel = calculateLevel(newTotalXP);
  const newProgress = calculateProgressToNextLevel(newTotalXP, newLevel);

  return {
    totalXP: newTotalXP,
    level: newLevel,
    progress: newProgress,
  };
};