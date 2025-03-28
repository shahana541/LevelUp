// src/context/TaskContext.jsx
import create from "zustand";

/**
 * Zustand store for managing task-related data.
 */
const useTaskStore = create((set) => ({
  // Initial state
  tasks: [], // Array of tasks: { id, title, type ('study' or 'fitness'), dueDate, completed, xpReward }

  // Actions
  /**
   * Adds a new task to the list.
   * @param {Object} newTask - The task object to add (e.g., { title, type, dueDate, xpReward }).
   */
  addTask: (newTask) =>
    set((state) => ({
      tasks: [
        ...state.tasks,
        {
          ...newTask,
          id: Date.now(), // Generate a unique ID using timestamp
          completed: false, // Default to incomplete
        },
      ],
    })),

  /**
   * Marks a task as completed by its ID.
   * @param {number} taskId - The ID of the task to mark as completed.
   */
  completeTask: (taskId) =>
    set((state) => ({
      tasks: state.tasks.map((task) =>
        task.id === taskId ? { ...task, completed: true } : task
      ),
    })),

  /**
   * Deletes a task by its ID.
   * @param {number} taskId - The ID of the task to delete.
   */
  deleteTask: (taskId) =>
    set((state) => ({
      tasks: state.tasks.filter((task) => task.id !== taskId),
    })),

  /**
   * Resets the entire store to its initial state.
   */
  reset: () =>
    set({
      tasks: [],
    }),

  /**
   * Updates specific fields of a task by its ID.
   * @param {number} taskId - The ID of the task to update.
   * @param {Object} updatedFields - Partial task data to update (e.g., { title, dueDate }).
   */
  updateTask: (taskId, updatedFields) =>
    set((state) => ({
      tasks: state.tasks.map((task) =>
        task.id === taskId ? { ...task, ...updatedFields } : task
      ),
    })),
}));

export default useTaskStore;