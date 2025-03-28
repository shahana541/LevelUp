// src/components/ChatbotButton.jsx
import React, { useState } from "react";

const ChatbotButton = ({ onClick }) => {
  const [isOpen, setIsOpen] = useState(false);

  // Toggle chatbot window visibility
  const toggleChatbot = () => setIsOpen((prev) => !prev);

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {/* Floating Button */}
      <button
        onClick={toggleChatbot}
        className="p-3 bg-blue-500 text-white rounded-full shadow-lg hover:bg-blue-600 transition duration-300"
        aria-label={isOpen ? "Close Chatbot" : "Open Chatbot"}
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
            d={isOpen ? "M6 18L18 6M6 6l12 12" : "M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-3.582 8-8 8s-8-3.582-8-8 3.582-8 8-8 8 3.582 8 8z"}
          />
        </svg>
      </button>

      {/* Chatbot Window */}
      {isOpen && (
        <div className="fixed bottom-20 right-4 w-96 bg-white rounded-lg shadow-lg p-4 z-50">
          <header className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold text-gray-800">AI Chatbot</h3>
            <button
              onClick={toggleChatbot}
              className="text-gray-600 hover:text-gray-800"
              aria-label="Close Chatbot"
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
          <div className="h-64 overflow-y-auto border-b border-gray-200 mb-4">
            <p className="text-sm text-gray-600">Chat history goes here...</p>
          </div>
          <input
            type="text"
            placeholder="Type your message..."
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
            onKeyDown={(e) => e.key === "Enter" && onClick?.(e.target.value)}
          />
        </div>
      )}
    </div>
  );
};

export default ChatbotButton;