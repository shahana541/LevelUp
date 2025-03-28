// src/components/Footer.jsx
import React from 'react';

const Footer = () => {
  // Social media links array for better scalability
  const socialLinks = [
    { name: "Twitter", url: "https://twitter.com" },
    { name: "Instagram", url: "https://instagram.com" },
    { name: "Facebook", url: "https://facebook.com" },
  ];

  return (
    <footer className="bg-gradient-to-r from-blue-800 to-purple-800 text-white py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Left Section */}
        <div>
          <p className="text-sm">&copy; 2023 LevelUp. All rights reserved.</p>
        </div>

        {/* Right Section */}
        <div className="flex space-x-4">
          {socialLinks.map(({ name, url }, index) => (
            <a
              key={index}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cyan-300 transition duration-300"
            >
              {name}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;