// src/features/gamification/StreakSystem.js

/**
 * Updates the user's streak based on their activity.
 * @param {number} currentStreak - The user's current streak.
 * @param {boolean} completedToday - Whether the user completed a task/workout today.
 * @param {Date} lastActivityDate - The date of the user's last activity.
 * @returns {{ streak: number, bonusXP: number }} - Updated streak and bonus XP.
 */
export const updateStreak = (currentStreak, completedToday, lastActivityDate) => {
    const today = new Date();
    const lastDate = new Date(lastActivityDate);
  
    // Helper function to check if two dates are consecutive
    const isConsecutiveDay = () => {
      const yesterday = new Date(today);
      yesterday.setDate(today.getDate() - 1);
      return lastDate.toDateString() === yesterday.toDateString();
    };
  
    // Helper function to check if the last activity was today
    const isSameDay = () => lastDate.toDateString() === today.toDateString();
  
    let streak = currentStreak;
    let bonusXP = 0;
  
    if (completedToday) {
      if (isSameDay()) {
        // If activity is already logged today, keep the streak unchanged
        streak = currentStreak;
      } else if (isConsecutiveDay()) {
        // Increment streak if activity is consecutive
        streak += 1;
      } else {
        // Reset streak if there's a gap
        streak = 1;
      }
  
      // Bonus XP for maintaining streaks
      if (streak >= 7 && streak % 7 === 0) {
        bonusXP = 50; // Award 50 XP for every 7-day milestone
      }
    } else {
      // Reset streak if no activity today
      streak = 0;
    }
  
    return { streak, bonusXP };
  };
  
  /**
   * Resets the streak if the user misses a day.
   * @param {Date} lastActivityDate - The date of the user's last activity.
   * @returns {boolean} - Whether the streak should be reset.
   */
  export const shouldResetStreak = (lastActivityDate) => {
    const today = new Date();
    const lastDate = new Date(lastActivityDate);
  
    // Check if the last activity was more than 1 day ago
    const yesterday = new Date(today);
    yesterday.setDate(today.getDate() - 1);
  
    return lastDate.toDateString() !== yesterday.toDateString();
  };