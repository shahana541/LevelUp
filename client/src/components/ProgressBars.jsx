// src/components/ProgressBars.jsx
import React from 'react';

const ProgressBars = ({ label, value, max = 100 }) => {
  // Clamp the value to ensure it stays within the valid range [0, max]
  const clampedValue = Math.max(0, Math.min(value, max));
  const percentage = ((clampedValue / max) * 100).toFixed(0);

  return (
    <div className="space-y-2">
      {/* Label */}
      <Label text={label} />

      {/* Progress Bar */}
      <ProgressBar percentage={percentage} />

      {/* Percentage Text */}
      <PercentageText percentage={percentage} />
    </div>
  );
};

// Label Component
const Label = ({ text }) => (
  <h4 className="text-sm font-medium text-gray-800">{text}</h4>
);

// Progress Bar Component
const ProgressBar = ({ percentage }) => (
  <div className="relative h-4 bg-gray-200 rounded-full overflow-hidden">
    <div
      className="h-full bg-gradient-to-r from-blue-500 to-purple-500"
      style={{ width: `${percentage}%` }}
    ></div>
  </div>
);

// Percentage Text Component
const PercentageText = ({ percentage }) => (
  <p className="text-xs text-gray-600">{`${percentage}% completed`}</p>
);

export default ProgressBars;