// src/features/auth/AuthContext.jsx
import create from "zustand";
import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth";

// Initialize Firebase
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

/**
 * Zustand store for managing authentication.
 */
const useAuthStore = create((set) => ({
  // Initial state
  user: null, // Currently authenticated user (null if not logged in)
  loading: true, // Loading state while checking authentication status

  // Actions
  /**
   * Logs in a user with email and password.
   * @param {string} email - The user's email.
   * @param {string} password - The user's password.
   * @returns {Promise<void>} - Resolves when login is successful.
   */
  login: async (email, password) => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      set({ user: userCredential.user });
    } catch (error) {
      console.error("Login failed:", error.message);
      throw error; // Re-throw the error for UI-specific handling
    }
  },

  /**
   * Logs out the currently authenticated user.
   */
  logout: async () => {
    try {
      await signOut(auth);
      set({ user: null });
    } catch (error) {
      console.error("Logout failed:", error.message);
      throw error;
    }
  },

  /**
   * Updates the user state based on Firebase authentication changes.
   */
  updateUserState: (user) => set({ user, loading: false }),

  /**
   * Resets the store to its initial state.
   */
  reset: () => set({ user: null, loading: true }),
}));

// Listen for authentication state changes
onAuthStateChanged(auth, (user) => {
  useAuthStore.getState().updateUserState(user);
});

export default useAuthStore;