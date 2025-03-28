// src/features/verification/ImageVerification.js

/**
 * Validate an uploaded image file.
 * @param {File} file - The uploaded file.
 * @param {Object} options - Validation options (maxSize, minWidth, minHeight).
 * @returns {Promise<boolean>} - Whether the file passes validation.
 */
export const validateImage = async (file, options = {}) => {
    const { maxSize = 5 * 1024 * 1024, minWidth = 100, minHeight = 100 } = options;
  
    // Check if the file is an image
    if (!file.type.startsWith("image/")) {
      console.error("Invalid file type. Only images are allowed.");
      return false;
    }
  
    // Check file size
    if (file.size > maxSize) {
      console.error(`File size exceeds the maximum limit of ${maxSize / (1024 * 1024)}MB.`);
      return false;
    }
  
    // Check image dimensions
    try {
      const isValidDimensions = await checkImageDimensions(file, minWidth, minHeight);
      if (!isValidDimensions) {
        console.error(`Image dimensions must be at least ${minWidth}x${minHeight}px.`);
        return false;
      }
    } catch (error) {
      console.error("Failed to validate image dimensions:", error.message);
      return false;
    }
  
    return true;
  };
  
  /**
   * Check the dimensions of an image file.
   * @param {File} file - The uploaded file.
   * @param {number} minWidth - Minimum width required.
   * @param {number} minHeight - Minimum height required.
   * @returns {Promise<boolean>} - Whether the image meets the dimension requirements.
   */
  const checkImageDimensions = (file, minWidth, minHeight) => {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.src = URL.createObjectURL(file);
  
      img.onload = () => {
        resolve(img.width >= minWidth && img.height >= minHeight);
      };
  
      img.onerror = (error) => {
        reject(new Error("Failed to load the image."));
      };
    });
  };
  
  /**
   * Generate a preview URL for an uploaded image.
   * @param {File} file - The uploaded file.
   * @returns {string} - A preview URL for the image.
   */
  export const generateImagePreview = (file) => {
    if (!file || !file.type.startsWith("image/")) {
      console.error("Invalid file. Only images are allowed for preview generation.");
      return "";
    }
    return URL.createObjectURL(file);
  };
  
  /**
   * Simulate sending an image to the backend for verification.
   * @param {File} file - The uploaded file.
   * @returns {Promise<string>} - A simulated response from the backend.
   */
  export const verifyImageWithBackend = async (file) => {
    // Simulate backend verification (e.g., AI-based checks)
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (file.type.startsWith("image/")) {
          resolve("Image verified successfully!");
        } else {
          reject(new Error("Invalid file type. Backend only accepts images."));
        }
      }, 2000); // Simulate a 2-second delay
    });
  };