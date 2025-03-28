// src/features/notifications/NotificationService.js

/**
 * Schedule a reminder for a task or workout.
 * @param {string} type - The type of reminder ('task' or 'workout').
 * @param {Date} dueDate - The due date for the task or workout.
 * @param {Function} callback - The function to execute when the reminder triggers.
 */
export const scheduleReminder = (type, dueDate, callback) => {
    const now = new Date();
    const timeUntilDue = dueDate - now;
  
    if (timeUntilDue > 0) {
      console.log(`Scheduling reminder for ${type} at ${new Date(dueDate).toLocaleString()}`);
      setTimeout(() => {
        callback(`Reminder: Your ${type} is due soon!`);
      }, timeUntilDue);
    } else {
      console.warn(`The ${type} is already overdue.`);
    }
  };
  
  /**
   * Display a notification to the user.
   * @param {string} message - The notification message.
   * @param {string} type - The notification type ('info', 'warning', 'error').
   * @returns {Object} - Notification object containing details.
   */
  export const displayNotification = (message, type = "info") => {
    const notification = {
      message,
      type,
      timestamp: new Date(),
    };
  
    // Simulate adding the notification to a global state or UI
    console.log(`[${type.toUpperCase()}] ${message}`);
    return notification;
  };
  
  /**
   * Toggle notification preferences.
   * @param {Object} preferences - Current notification preferences.
   * @param {string} type - The notification type to toggle ('email', 'sms', 'inApp').
   * @returns {Object} - Updated notification preferences.
   */
  export const toggleNotificationPreference = (preferences, type) => {
    if (!preferences.hasOwnProperty(type)) {
      console.error(`Invalid notification type: ${type}`);
      return preferences;
    }
  
    const updatedPreferences = { ...preferences };
    updatedPreferences[type] = !updatedPreferences[type];
    console.log(`Updated notification preference: ${type} -> ${updatedPreferences[type]}`);
    return updatedPreferences;
  };