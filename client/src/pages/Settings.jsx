// src/pages/Settings.jsx
import React, { useState } from 'react';

const Settings = () => {
  // State for theme selection
  const [theme, setTheme] = useState("gradient");

  // State for notification preferences
  const [notifications, setNotifications] = useState({
    email: true,
    sms: false,
    inApp: true,
  });

  // Handle theme change
  const handleThemeChange = (selectedTheme) => {
    setTheme(selectedTheme);
    // Simulate applying the theme globally
    document.documentElement.className = selectedTheme;
  };

  // Handle notification toggle
  const handleNotificationToggle = (type) => {
    setNotifications((prev) => ({
      ...prev,
      [type]: !prev[type],
    }));
  };

  return (
    <div className="space-y-6">
      {/* Theme Customization */}
      <ThemeCustomization theme={theme} handleThemeChange={handleThemeChange} />

      {/* Privacy & Security */}
      <PrivacySecurity />

      {/* XP & Goal Tracking */}
      <XpGoalTracking />

      {/* Notification Preferences */}
      <NotificationPreferences
        notifications={notifications}
        handleNotificationToggle={handleNotificationToggle}
      />
    </div>
  );
};

// Theme Customization Component
const ThemeCustomization = ({ theme, handleThemeChange }) => (
  <div className="bg-white rounded-lg shadow-md p-4">
    <h3 className="text-lg font-semibold text-gray-800 mb-4">Theme Customization</h3>
    <div className="flex space-x-4">
      {["light", "dark", "gradient"].map((themeOption) => (
        <button
          key={themeOption}
          onClick={() => handleThemeChange(themeOption)}
          className={`px-4 py-2 rounded-md ${
            theme === themeOption
              ? "bg-blue-500 text-white"
              : "bg-gray-100 text-gray-800 hover:bg-gray-200"
          }`}
        >
          {themeOption.charAt(0).toUpperCase() + themeOption.slice(1)}
        </button>
      ))}
    </div>
  </div>
);

// Privacy & Security Component
const PrivacySecurity = () => (
  <div className="bg-white rounded-lg shadow-md p-4">
    <h3 className="text-lg font-semibold text-gray-800 mb-4">Privacy & Security</h3>
    <div className="space-y-2">
      <Checkbox label="Enable Two-Factor Authentication" />
      <Checkbox label="Allow API Access" />
      <button className="px-3 py-1 bg-red-500 text-white rounded-md hover:bg-red-600 transition duration-300">
        Delete Account
      </button>
    </div>
  </div>
);

// XP & Goal Tracking Component
const XpGoalTracking = () => (
  <div className="bg-white rounded-lg shadow-md p-4">
    <h3 className="text-lg font-semibold text-gray-800 mb-4">XP & Goal Tracking</h3>
    <div className="space-y-2">
      <NumberInput label="Daily Study XP Target" defaultValue="500" />
      <NumberInput label="Daily Fitness XP Target" defaultValue="300" />
    </div>
  </div>
);

// Notification Preferences Component
const NotificationPreferences = ({ notifications, handleNotificationToggle }) => (
  <div className="bg-white rounded-lg shadow-md p-4">
    <h3 className="text-lg font-semibold text-gray-800 mb-4">
      Notification Preferences
    </h3>
    <div className="space-y-2">
      {Object.keys(notifications).map((type) => (
        <Checkbox
          key={type}
          label={`${type.charAt(0).toUpperCase() + type.slice(1)} Notifications`}
          checked={notifications[type]}
          onChange={() => handleNotificationToggle(type)}
        />
      ))}
    </div>
  </div>
);

// Reusable Checkbox Component
const Checkbox = ({ label, checked = false, onChange }) => (
  <label className="flex items-center space-x-2">
    <input
      type="checkbox"
      checked={checked}
      onChange={onChange}
      className="form-checkbox h-5 w-5 text-blue-500"
    />
    <span className="text-sm text-gray-700">{label}</span>
  </label>
);

// Reusable Number Input Component
const NumberInput = ({ label, defaultValue }) => (
  <>
    <label className="block text-sm font-medium text-gray-700 mb-2">{label}</label>
    <input
      type="number"
      defaultValue={defaultValue}
      className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
    />
  </>
);

export default Settings;