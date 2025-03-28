// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Home from './pages/Home';
import StudyTracker from './pages/StudyTracker';
import FitnessTracker from './pages/FitnessTracker';
import Leaderboard from './pages/Leaderboard';
import Chatbot from './pages/Chatbot';
import Settings from './pages/Settings';

function App() {
  return (
    <Router>
      <div className="flex flex-col h-screen font-sans">
        {/* Navbar Component */}
        <Navbar />

        {/* Main Content Area */}
        <div className="flex flex-1 overflow-hidden">
          {/* Sidebar Component */}
          <Sidebar />

          {/* Page Content Container */}
          <main className="flex-1 p-4 overflow-y-auto bg-gradient-to-br from-blue-900 to-purple-900 text-white">
            <Routes>
              {/* Define Routes */}
              <Route path="/" element={<Home />} />
              <Route path="/study" element={<StudyTracker />} />
              <Route path="/fitness" element={<FitnessTracker />} />
              <Route path="/leaderboard" element={<Leaderboard />} />
              <Route path="/chatbot" element={<Chatbot />} />
              <Route path="/settings" element={<Settings />} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
}

export default App;