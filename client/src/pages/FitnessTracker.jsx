// src/pages/FitnessTracker.jsx
import React, { useState } from 'react';
import { Line } from 'react-chartjs-2';

const FitnessTracker = () => {
  // State for workouts
  const [workouts, setWorkouts] = useState([
    { id: 1, title: "Cardio Session", completed: false, date: "2023-10-20" },
    { id: 2, title: "Strength Training", completed: false, date: "2023-10-21" },
    { id: 3, title: "Yoga", completed: false, date: "2023-10-22" },
  ]);

  // State for selected workout
  const [selectedWorkout, setSelectedWorkout] = useState(null);

  // Toggle workout completion
  const toggleWorkoutCompletion = (id) => {
    setWorkouts(
      workouts.map((workout) =>
        workout.id === id ? { ...workout, completed: !workout.completed } : workout
      )
    );
  };

  // Chart data for progress visualization
  const chartData = {
    labels: ["Week 1", "Week 2", "Week 3", "Week 4"],
    datasets: [
      {
        label: "Workouts Completed",
        data: [3, 5, 7, 6],
        borderColor: "rgba(255, 99, 132, 1)",
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        fill: true,
      },
    ],
  };

  return (
    <div className="flex space-x-6">
      {/* Workout Suggestions */}
      <div className="w-1/3 bg-white rounded-lg shadow-md p-4">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Workout Suggestions</h3>
        <ul className="space-y-2">
          {workouts.map((workout) => (
            <WorkoutItem
              key={workout.id}
              workout={workout}
              toggleWorkoutCompletion={toggleWorkoutCompletion}
              setSelectedWorkout={setSelectedWorkout}
            />
          ))}
        </ul>
      </div>

      {/* Workout Details */}
      <div className="flex-1 bg-white rounded-lg shadow-md p-4">
        {selectedWorkout ? (
          <WorkoutDetails workout={selectedWorkout} chartData={chartData} />
        ) : (
          <p className="text-gray-600">Select a workout to view details.</p>
        )}
      </div>
    </div>
  );
};

// Workout Item Component
const WorkoutItem = ({ workout, toggleWorkoutCompletion, setSelectedWorkout }) => (
  <li
    className="flex items-center justify-between p-2 rounded-md cursor-pointer hover:bg-gray-100"
    onClick={() => setSelectedWorkout(workout)}
  >
    <div className="flex items-center space-x-2">
      <input
        type="checkbox"
        checked={workout.completed}
        onChange={() => toggleWorkoutCompletion(workout.id)}
        className="form-checkbox h-5 w-5 text-red-500"
      />
      <span
        className={`text-sm ${
          workout.completed ? "line-through text-gray-500" : "text-gray-800"
        }`}
      >
        {workout.title}
      </span>
    </div>
    <span className="text-xs text-gray-500">{workout.date}</span>
  </li>
);

// Workout Details Component
const WorkoutDetails = ({ workout, chartData }) => (
  <>
    <h3 className="text-lg font-semibold text-gray-800 mb-4">{workout.title}</h3>
    <p className="text-sm text-gray-600 mb-2">Scheduled Date: {workout.date}</p>
    <p className="text-sm text-gray-600 mb-4">
      Status: {workout.completed ? "Completed" : "Pending"}
    </p>

    {/* Image Upload */}
    <div className="mb-4">
      <label className="block text-sm font-medium text-gray-700 mb-2">
        Upload Proof of Completion
      </label>
      <input
        type="file"
        accept="image/*"
        className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-red-50 file:text-red-700 hover:file:bg-red-100"
      />
    </div>

    {/* Progress Chart */}
    <div>
      <h4 className="text-md font-semibold text-gray-800 mb-2">Fitness Progress</h4>
      <div className="h-48">
        <Line data={chartData} options={{ maintainAspectRatio: false }} />
      </div>
    </div>
  </>
);

export default FitnessTracker;