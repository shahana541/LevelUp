// src/pages/Leaderboard.jsx
import React from 'react';

const Leaderboard = () => {
  // Sample data for the leaderboard
  const globalLeaderboard = [
    { rank: 1, name: "Alice", xp: 5000 },
    { rank: 2, name: "Bob", xp: 4500 },
    { rank: 3, name: "Charlie", xp: 4000 },
    { rank: 12, name: "You", xp: 1250 }, // Current user
  ];

  const friendsLeaderboard = [
    { rank: 1, name: "Alice", xp: 5000 },
    { rank: 2, name: "Charlie", xp: 4000 },
    { rank: 3, name: "You", xp: 1250 }, // Current user
  ];

  // Sample data for achievements
  const achievements = [
    { image: "/assets/badge1.png", title: "Level 10" },
    { image: "/assets/badge2.png", title: "5 Workouts" },
    { image: "/assets/badge3.png", title: "Study Streak" },
  ];

  return (
    <div className="space-y-6">
      {/* Global Leaderboard */}
      <LeaderboardTable
        title="Global Leaderboard"
        data={globalLeaderboard}
      />

      {/* Friends Leaderboard */}
      <LeaderboardTable
        title="Friends Leaderboard"
        data={friendsLeaderboard}
      />

      {/* Achievements */}
      <AchievementsSection achievements={achievements} />
    </div>
  );
};

// Leaderboard Table Component
const LeaderboardTable = ({ title, data }) => (
  <div className="bg-white rounded-lg shadow-md p-4">
    <h3 className="text-lg font-semibold text-gray-800 mb-4">{title}</h3>
    <table className="w-full text-sm text-left text-gray-500">
      <thead className="text-xs text-gray-700 uppercase bg-gray-50">
        <tr>
          <th scope="col" className="px-6 py-3">Rank</th>
          <th scope="col" className="px-6 py-3">Name</th>
          <th scope="col" className="px-6 py-3">XP</th>
        </tr>
      </thead>
      <tbody>
        {data.map((user) => (
          <tr
            key={user.rank}
            className={`border-b ${user.name === "You" ? "bg-blue-50" : ""}`}
          >
            <td className="px-6 py-4">{user.rank}</td>
            <td className="px-6 py-4 font-medium text-gray-900">{user.name}</td>
            <td className="px-6 py-4">{user.xp}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

// Achievements Section Component
const AchievementsSection = ({ achievements }) => (
  <div className="bg-white rounded-lg shadow-md p-4">
    <h3 className="text-lg font-semibold text-gray-800 mb-4">Achievements</h3>
    <div className="flex space-x-4">
      {achievements.map((achievement, index) => (
        <div key={index} className="flex flex-col items-center">
          <img
            src={achievement.image}
            alt={achievement.title}
            className="w-12 h-12 rounded-full"
          />
          <span className="text-xs text-gray-600 mt-1">{achievement.title}</span>
        </div>
      ))}
    </div>
  </div>
);

export default Leaderboard;