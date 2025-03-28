// src/components/Sidebar.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  // Define sidebar links in an array for better scalability
  const sidebarLinks = [
    { path: '/', label: 'Dashboard', iconPath: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0l-2-2m2 2V4a1 1 0 011-1h3m-6 9l2-2 2 2M7 16l-2 2 2 2"
      />
    ) },
    { path: '/study', label: 'Study Tracker', iconPath: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253"
      />
    ) },
    { path: '/fitness', label: 'Fitness Tracker', iconPath: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M9 17l6-6m0 0l-6-6m6 6H5a2 2 0 00-2 2v6a2 2 0 002 2h14a2 2 0 002-2v-6a2 2 0 00-2-2h-4z"
      />
    ) },
    { path: '/leaderboard', label: 'Leaderboard', iconPath: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
      />
    ) },
    { path: '/settings', label: 'Settings', iconPath: (
      <>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
        />
      </>
    ) },
  ];

  return (
    <aside className="w-64 bg-gradient-to-b from-blue-800 to-purple-800 text-white min-h-screen p-4 shadow-lg">
      {/* Sidebar Header */}
      <div className="flex items-center space-x-2 mb-6">
        <img
          src="/assets/logo.png"
          alt="LevelUp Logo"
          className="w-10 h-10 rounded-full"
        />
        <h2 className="text-lg font-bold">LevelUp</h2>
      </div>

      {/* Navigation Links */}
      <nav>
        <ul className="space-y-2">
          {sidebarLinks.map(({ path, label, iconPath }) => (
            <li key={path}>
              <Link
                to={path}
                className="flex items-center space-x-2 p-2 rounded-md hover:bg-purple-600 transition duration-300"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {iconPath}
                </svg>
                <span>{label}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;