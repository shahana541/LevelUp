// src/components/LeaderboardTable.jsx
import React from 'react';

const LeaderboardTable = ({ users, currentUser }) => {
  return (
    <table className="w-full text-sm text-left text-gray-500">
      {/* Table Header */}
      <TableHeader />

      {/* Table Body */}
      <tbody>
        {users.map((user) => (
          <TableRow key={user.rank} user={user} currentUser={currentUser} />
        ))}
      </tbody>
    </table>
  );
};

// Table Header Component
const TableHeader = () => (
  <thead className="text-xs text-gray-700 uppercase bg-gray-50">
    <tr>
      <th scope="col" className="px-6 py-3">Rank</th>
      <th scope="col" className="px-6 py-3">Name</th>
      <th scope="col" className="px-6 py-3">XP</th>
    </tr>
  </thead>
);

// Table Row Component
const TableRow = ({ user, currentUser }) => (
  <tr
    className={`border-b ${
      user.name === currentUser ? "bg-blue-50 font-bold" : ""
    }`}
  >
    <td className="px-6 py-4">{user.rank}</td>
    <td className="px-6 py-4 font-medium text-gray-900">{user.name}</td>
    <td className="px-6 py-4">{user.xp}</td>
  </tr>
);

export default LeaderboardTable;