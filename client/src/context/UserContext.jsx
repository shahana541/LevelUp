// src/context/UserContext.jsx
import create from "zustand";

/**
 * Zustand store for managing user-related data.
 */
const useUserStore = create((set) => ({
  // Initial state
  user: null, // { id, name, email, avatar }
  isAuthenticated: false,

  // Actions
  /**
   * Logs in the user by setting their data and marking them as authenticated.
   * @param {Object} userData - User data to be stored (e.g., { id, name, email, avatar }).
   */
  login: (userData) =>
    set({
      user: userData,
      isAuthenticated: true,
    }),

  /**
   * Logs out the user by resetting the state to default values.
   */
  logout: () =>
    set({
      user: null,
      isAuthenticated: false,
    }),

  /**
   * Updates specific fields of the user's data.
   * @param {Object} updatedData - Partial user data to update (e.g., { name, avatar }).
   */
  updateUser: (updatedData) =>
    set((state) => ({
      user: state.user ? { ...state.user, ...updatedData } : null,
    })),

  /**
   * Resets the entire store to its initial state.
   */
  reset: () =>
    set({
      user: null,
      isAuthenticated: false,
    }),
}));

export default useUserStore;