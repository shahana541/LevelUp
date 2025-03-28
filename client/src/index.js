// src/index.js
import React from "react";
import ReactDOM from "react-dom/client";
import "./styles.css"; // Import global styles
import App from "./App";
import { loadThemePreference } from "./utils/theme";

/**
 * Initialize the application.
 */
const initializeApp = () => {
  // Load the user's saved theme preference
  loadThemePreference();

  // Render the app into the DOM
  const rootElement = document.getElementById("root");
  if (!rootElement) {
    console.error("Root element not found. Ensure there is a <div id='root'></div> in your HTML.");
    return;
  }

  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
};

// Start the application
initializeApp();