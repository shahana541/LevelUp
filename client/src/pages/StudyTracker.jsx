// src/pages/StudyTracker.jsx
import React, { useState } from 'react';

const StudyTracker = () => {
  // State for tasks
  const [tasks, setTasks] = useState([
    { id: 1, title: "Math Assignment", completed: false, dueDate: "2023-10-20" },
    { id: 2, title: "Science Notes", completed: false, dueDate: "2023-10-21" },
    { id: 3, title: "History Essay", completed: false, dueDate: "2023-10-22" },
  ]);

  // State for selected task
  const [selectedTask, setSelectedTask] = useState(null);

  // Toggle task completion
  const toggleTaskCompletion = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <div className="flex space-x-6">
      {/* Task List */}
      <div className="w-1/3 bg-white rounded-lg shadow-md p-4">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Study Tasks</h3>
        <ul className="space-y-2">
          {tasks.map((task) => (
            <li
              key={task.id}
              className="flex items-center justify-between p-2 rounded-md cursor-pointer hover:bg-gray-100"
              onClick={() => setSelectedTask(task)}
            >
              <TaskItem
                task={task}
                toggleTaskCompletion={toggleTaskCompletion}
              />
            </li>
          ))}
        </ul>
      </div>

      {/* Task Details */}
      <div className="flex-1 bg-white rounded-lg shadow-md p-4">
        {selectedTask ? (
          <TaskDetails task={selectedTask} />
        ) : (
          <p className="text-gray-600">Select a task to view details.</p>
        )}
      </div>
    </div>
  );
};

// Task Item Component
const TaskItem = ({ task, toggleTaskCompletion }) => (
  <div className="flex items-center space-x-2">
    <input
      type="checkbox"
      checked={task.completed}
      onChange={() => toggleTaskCompletion(task.id)}
      className="form-checkbox h-5 w-5 text-blue-500"
    />
    <span
      className={`text-sm ${
        task.completed ? "line-through text-gray-500" : "text-gray-800"
      }`}
    >
      {task.title}
    </span>
    <span className="ml-auto text-xs text-gray-500">{task.dueDate}</span>
  </div>
);

// Task Details Component
const TaskDetails = ({ task }) => (
  <>
    <h3 className="text-lg font-semibold text-gray-800 mb-4">{task.title}</h3>
    <p className="text-sm text-gray-600 mb-2">Due Date: {task.dueDate}</p>
    <p className="text-sm text-gray-600 mb-4">
      Status: {task.completed ? "Completed" : "Pending"}
    </p>

    {/* Image Upload */}
    <div className="mb-4">
      <label className="block text-sm font-medium text-gray-700 mb-2">
        Upload Proof of Completion
      </label>
      <input
        type="file"
        accept="image/*"
        className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
      />
    </div>

    {/* AI Suggestions */}
    <div>
      <h4 className="text-md font-semibold text-gray-800 mb-2">AI Suggestions</h4>
      <ul className="list-disc list-inside text-gray-600 space-y-1">
        <li>Focus on Algebra for the next 1 hour.</li>
        <li>Review past papers for better exam preparation.</li>
      </ul>
    </div>
  </>
);

export default StudyTracker;