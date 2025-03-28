// src/context/XPContext.jsx
import create from "zustand";
import { calculateLevel, calculateProgressToNextLevel, addXP } from "../features/gamification/XPSystem";
import { updateStreak as streakUpdater } from "../features/gamification/StreakSystem";

/**
 * Zustand store for managing XP-related data.
 */
const useXPStore = create((set) => ({
  // Initial state
  totalXP: 0, // Total XP earned by the user
  level: 1,   // Current level based on total XP
  progress: 0, // Progress percentage toward the next level
  streak: 0,  // Current streak count

  // Actions
  /**
   * Adds XP to the user's total and updates their level and progress.
   * @param {number} xpToAdd - The amount of XP to add.
   */
  addXP: (xpToAdd) =>
    set((state) => {
      const { totalXP, level, progress } = addXP(state.totalXP, xpToAdd);
      return {
        totalXP,
        level,
        progress,
      };
    }),

  /**
   * Updates the user's streak based on their activity.
   * @param {boolean} completedToday - Whether the user completed a task/workout today.
   * @param {Date} lastActivityDate - The date of the user's last activity.
   */
  updateStreak: (completedToday, lastActivityDate) =>
    set((state) => {
      const { streak } = streakUpdater(state.streak, completedToday, lastActivityDate);
      return { streak };
    }),

  /**
   * Resets the user's streak to zero.
   */
  resetStreak: () =>
    set(() => ({
      streak: 0,
    })),

  /**
   * Resets the entire store to its initial state.
   */
  reset: () =>
    set({
      totalXP: 0,
      level: 1,
      progress: 0,
      streak: 0,
    }),
}));

export default useXPStore;