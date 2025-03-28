// src/pages/Home.jsx
import React from 'react';

// Reusable Progress Bar Component
const ProgressBar = ({ label, value, max }) => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <h3 className="text-lg font-semibold text-gray-800">{label}</h3>
      <div className="mt-2">
        <progress
          className="w-full h-4 bg-gray-200 rounded-full"
          value={value}
          max={max}
        ></progress>
        <p className="text-sm text-gray-600 mt-1">{Math.round((value / max) * 100)}% completed</p>
      </div>
    </div>
  );
};

// Reusable Insights or Task List Component
const ListSection = ({ title, items }) => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
      <ul className="list-disc list-inside text-gray-600 mt-2 space-y-1">
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

const Home = () => {
  // Data for dynamic rendering
  const progressData = [
    { label: 'Study Progress', value: 75, max: 100 },
    { label: 'Fitness Progress', value: 50, max: 100 },
  ];

  const insights = [
    'Focus on Math for the next 2 hours to improve weak areas.',
    'Schedule a 30-minute cardio session today for better endurance.',
    'Take a 10-minute break every hour to stay productive.',
  ];

  const tasks = [
    'Complete Math Assignment by 5 PM.',
    'Gym Session at 6 PM.',
    'Review Science Notes by 9 PM.',
  ];

  return (
    <div className="space-y-6">
      {/* Welcome Message */}
      <div className="p-4 bg-gradient-to-r from-blue-700 to-purple-700 rounded-lg text-white shadow-md">
        <h2 className="text-2xl font-bold">Welcome Back!</h2>
        <p className="text-sm">Here's your daily progress overview.</p>
      </div>

      {/* Progress Bars */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {progressData.map(({ label, value, max }, index) => (
          <ProgressBar key={index} label={label} value={value} max={max} />
        ))}
      </div>

      {/* AI Insights */}
      <ListSection title="AI-Powered Insights" items={insights} />

      {/* Task Summary */}
      <ListSection title="Upcoming Tasks" items={tasks} />

      {/* Leaderboard Snapshot */}
      <div className="p-4 bg-white rounded-lg shadow-md">
        <h3 className="text-lg font-semibold text-gray-800">Leaderboard Snapshot</h3>
        <div className="flex items-center justify-between mt-2">
          <div className="text-gray-600">
            <p className="text-sm">Your Rank: #12</p>
            <p className="text-sm">XP: 1250</p>
          </div>
          <button className="px-3 py-1 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-300">
            View Full Leaderboard
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;