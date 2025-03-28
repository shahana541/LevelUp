// src/components/TaskCard.jsx
import React from 'react';

const TaskCard = ({ task, onCompleteToggle, onImageUpload }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 space-y-2">
      {/* Task Title */}
      <h4 className="text-lg font-semibold text-gray-800">{task.title}</h4>

      {/* Due Date */}
      <DueDate dueDate={task.dueDate} />

      {/* Completion Status */}
      <CompletionStatus
        completed={task.completed}
        onToggle={() => onCompleteToggle(task.id)}
      />

      {/* Image Upload (only shown if task is not completed) */}
      {!task.completed && (
        <ImageUpload onImageUpload={(file) => onImageUpload(task.id, file)} />
      )}
    </div>
  );
};

// Due Date Component
const DueDate = ({ dueDate }) => (
  <p className="text-sm text-gray-600">Due: {dueDate}</p>
);

// Completion Status Component
const CompletionStatus = ({ completed, onToggle }) => (
  <div className="flex items-center space-x-2">
    <input
      type="checkbox"
      checked={completed}
      onChange={onToggle}
      className="form-checkbox h-5 w-5 text-blue-500"
    />
    <span className="text-sm text-gray-700">
      {completed ? "Completed" : "Mark as Completed"}
    </span>
  </div>
);

// Image Upload Component
const ImageUpload = ({ onImageUpload }) => (
  <div>
    <label className="block text-sm font-medium text-gray-700 mb-2">
      Upload Proof of Completion
    </label>
    <input
      type="file"
      accept="image/*"
      onChange={(e) => onImageUpload(e.target.files[0])}
      className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
    />
  </div>
);

export default TaskCard;