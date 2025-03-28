// src/utils/helpers.js

/**
 * Format a date into a user-friendly string (e.g., "Oct 20, 2023").
 * @param {Date|string} date - The date to format.
 * @returns {string} - Formatted date string or an empty string if invalid.
 */
export const formatDate = (date) => {
    if (!date) return "";
    try {
      const options = { year: "numeric", month: "short", day: "numeric" };
      return new Date(date).toLocaleDateString(undefined, options);
    } catch (error) {
      console.error("Invalid date provided:", date);
      return "";
    }
  };
  
  /**
   * Calculate a percentage value.
   * @param {number} part - The part of the total.
   * @param {number} total - The total value.
   * @returns {number} - The percentage (0-100), clamped between 0 and 100.
   */
  export const calculatePercentage = (part, total) => {
    if (total <= 0 || isNaN(part) || isNaN(total)) return 0;
    return Math.min(Math.max(Math.round((part / total) * 100), 0), 100);
  };
  
  /**
   * Generate a random alphanumeric ID.
   * @param {number} length - The length of the ID (default: 8).
   * @returns {string} - A random ID.
   */
  export const generateRandomID = (length = 8) => {
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    return Array.from({ length }, () =>
      characters.charAt(Math.floor(Math.random() * characters.length))
    ).join("");
  };
  
  /**
   * Check if a string is a valid URL.
   * @param {string} urlString - The string to validate.
   * @returns {boolean} - Whether the string is a valid URL.
   */
  export const isValidURL = (urlString) => {
    try {
      return Boolean(new URL(urlString));
    } catch {
      return false;
    }
  };
  
  /**
   * Debounce a function to limit its execution rate.
   * @param {Function} func - The function to debounce.
   * @param {number} delay - The delay in milliseconds.
   * @returns {Function} - The debounced function.
   */
  export const debounce = (func, delay) => {
    let timer;
    return (...args) => {
      clearTimeout(timer);
      timer = setTimeout(() => func.apply(this, args), delay);
    };
  };