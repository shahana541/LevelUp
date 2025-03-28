// src/components/NotificationPanel.jsx
import React, { useState } from "react";

const NotificationPanel = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Sample notifications (can be replaced with dynamic data)
  const notifications = [
    { id: 1, message: "Your Math Assignment is due today!" },
    { id: 2, message: "You earned 50 XP for completing a workout!" },
    { id: 3, message: "New leaderboard rankings are available." },
  ];

  return (
    <div className="relative">
      {/* Notification Icon */}
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="relative p-2 bg-purple-500 text-white rounded-full hover:bg-purple-600 transition duration-300"
        aria-label={isOpen ? "Close Notifications" : "Open Notifications"}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
          />
        </svg>
        <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
          {notifications.length}
        </span>
      </button>

      {/* Notification Panel */}
      {isOpen && (
        <div className="fixed top-0 right-0 w-96 h-screen bg-white shadow-lg p-4 overflow-y-auto z-50">
          <header className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold text-gray-800">Notifications</h3>
            <button
              onClick={() => setIsOpen(false)}
              className="text-gray-600 hover:text-gray-800"
              aria-label="Close Notifications"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </header>
          <ul className="space-y-2">
            {notifications.length > 0 ? (
              notifications.map((notification) => (
                <li key={notification.id} className="p-2 bg-gray-100 rounded-md">
                  <p className="text-sm text-gray-800">{notification.message}</p>
                </li>
              ))
            ) : (
              <p className="text-sm text-gray-600">No new notifications.</p>
            )}
          </ul>
        </div>
      )}
    </div>
  );
};

export default NotificationPanel;