// src/components/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  // Define navigation links in an array for better scalability
  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/study', label: 'Study Tracker' },
    { path: '/fitness', label: 'Fitness Tracker' },
    { path: '/leaderboard', label: 'Leaderboard' },
    { path: '/settings', label: 'Settings' },
  ];

  return (
    <nav className="flex items-center justify-between p-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-md">
      {/* Logo Section */}
      <div className="flex items-center space-x-2">
        <img
          src="/assets/logo.png"
          alt="LevelUp Logo"
          className="w-10 h-10 rounded-full"
        />
        <h1 className="text-xl font-bold">LevelUp</h1>
      </div>

      {/* Navigation Links Section */}
      <div className="hidden md:flex space-x-4">
        {navLinks.map(({ path, label }) => (
          <Link
            key={path}
            to={path}
            className="hover:text-cyan-300 transition duration-300"
          >
            {label}
          </Link>
        ))}
      </div>

      {/* Notification Section */}
      <div className="relative">
        <button className="p-2 rounded-full hover:bg-purple-500 transition duration-300">
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
        </button>
        {/* Notification Badge */}
        <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
          3
        </span>
      </div>
    </nav>
  );
};

export default Navbar;