// src/pages/Chatbot.jsx
import React, { useState } from 'react';

const Chatbot = () => {
  // State for chat messages
  const [messages, setMessages] = useState([
    { id: 1, sender: "ai", text: "Hello! How can I assist you today?" },
  ]);

  // State for user input
  const [input, setInput] = useState("");

  // Handle sending a message
  const handleSendMessage = () => {
    if (input.trim() === "") return;

    // Add user message
    const userMessage = { id: messages.length + 1, sender: "user", text: input };
    setMessages((prev) => [...prev, userMessage]);

    // Simulate AI response
    setTimeout(() => {
      const aiResponse = {
        id: messages.length + 2,
        sender: "ai",
        text: "I'm here to help! Let me process that...",
      };
      setMessages((prev) => [...prev, aiResponse]);
    }, 1000);

    // Clear input field
    setInput("");
  };

  return (
    <div className="relative h-screen flex justify-center items-center bg-gradient-to-br from-blue-900 to-purple-900">
      {/* Floating Chatbot Button */}
      <FloatingChatButton />

      {/* Chat Window */}
      <ChatWindow
        messages={messages}
        input={input}
        setInput={setInput}
        handleSendMessage={handleSendMessage}
      />
    </div>
  );
};

// Floating Chatbot Button Component
const FloatingChatButton = () => (
  <button className="fixed bottom-4 right-4 p-3 bg-blue-500 text-white rounded-full shadow-lg hover:bg-blue-600 transition duration-300">
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
        d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-3.582 8-8 8s-8-3.582-8-8 3.582-8 8-8 8 3.582 8 8z"
      />
    </svg>
  </button>
);

// Chat Window Component
const ChatWindow = ({ messages, input, setInput, handleSendMessage }) => (
  <div className="w-96 bg-white rounded-lg shadow-lg p-4">
    <h3 className="text-lg font-semibold text-gray-800 mb-4">AI Chatbot</h3>

    {/* Message History */}
    <MessageHistory messages={messages} />

    {/* Message Input */}
    <MessageInput
      input={input}
      setInput={setInput}
      handleSendMessage={handleSendMessage}
    />
  </div>
);

// Message History Component
const MessageHistory = ({ messages }) => (
  <div
    className="flex-1 overflow-y-auto space-y-2 mb-4"
    style={{ height: "300px" }}
  >
    {messages.map((message) => (
      <div
        key={message.id}
        className={`p-2 rounded-lg max-w-xs ${
          message.sender === "user"
            ? "ml-auto bg-blue-500 text-white"
            : "mr-auto bg-gray-100 text-gray-800"
        }`}
      >
        {message.text}
      </div>
    ))}
  </div>
);

// Message Input Component
const MessageInput = ({ input, setInput, handleSendMessage }) => (
  <div className="flex space-x-2">
    <input
      type="text"
      value={input}
      onChange={(e) => setInput(e.target.value)}
      placeholder="Type your message..."
      className="flex-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
    />
    <button
      onClick={handleSendMessage}
      className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-300"
    >
      Send
    </button>
  </div>
);

export default Chatbot;