// src/utils/theme.js

/**
 * Theme definitions.
 */
const themes = {
    light: {
      background: "#ffffff",
      text: "#000000",
      primary: "#0074D9",
      secondary: "#FF4136",
    },
    dark: {
      background: "#121212",
      text: "#ffffff",
      primary: "#BB86FC",
      secondary: "#03DAC6",
    },
    gradient: {
      background: "linear-gradient(135deg, #6a11cb, #2575fc)",
      text: "#ffffff",
      primary: "#FFC107",
      secondary: "#FF5722",
    },
  };
  
  /**
   * Apply a theme globally by updating the document's root class.
   * @param {string} themeName - The name of the theme ('light', 'dark', or 'gradient').
   */
  export const applyTheme = (themeName) => {
    const theme = themes[themeName];
    if (!theme) {
      console.warn(`Theme "${themeName}" not found. Falling back to default theme.`);
      return;
    }
  
    // Update CSS variables
    const root = document.documentElement;
    Object.entries(theme).forEach(([key, value]) => {
      root.style.setProperty(`--${key}`, value);
    });
  
    // Save the theme preference in localStorage
    localStorage.setItem("theme", themeName);
  };
  
  /**
   * Load the user's saved theme preference from localStorage.
   */
  export const loadThemePreference = () => {
    const savedTheme = localStorage.getItem("theme") || "gradient"; // Default to 'gradient'
    applyTheme(savedTheme);
  };