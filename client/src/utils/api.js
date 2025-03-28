// src/utils/api.js
import axios from "axios";

// Base URL for the backend API
const BASE_URL = process.env.REACT_APP_API_BASE_URL || "http://localhost:5000/api";

/**
 * Axios instance with default headers and interceptors.
 */
const apiClient = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Add a request interceptor for adding authentication tokens (if needed)
apiClient.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("authToken"); // Example: Retrieve token from localStorage
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    console.error("Request interceptor error:", error);
    return Promise.reject(error);
  }
);

// Add a response interceptor for handling errors globally
apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response) {
      console.error(`API Error: ${error.response.status} - ${error.response.statusText}`);
    } else if (error.request) {
      console.error("No response received from the server.");
    } else {
      console.error("Error setting up the request:", error.message);
    }
    return Promise.reject(error);
  }
);

/**
 * API Utility Functions
 */

// Fetch user data
export const fetchUserData = async () => handleApiCall(apiClient.get("/user"));

// Fetch tasks
export const fetchTasks = async () => handleApiCall(apiClient.get("/tasks"));

// Add a new task
export const addTask = async (taskData) => handleApiCall(apiClient.post("/tasks", taskData));

// Update a task
export const updateTask = async (taskId, updatedData) =>
  handleApiCall(apiClient.put(`/tasks/${taskId}`, updatedData));

// Delete a task
export const deleteTask = async (taskId) => handleApiCall(apiClient.delete(`/tasks/${taskId}`));

// Fetch leaderboard data
export const fetchLeaderboard = async () => handleApiCall(apiClient.get("/leaderboard"));

// Add XP
export const addXPToUser = async (xpData) => handleApiCall(apiClient.post("/xp", xpData));

/**
 * Helper function to handle API calls and errors consistently.
 * @param {Promise} apiCall - The API call to execute.
 * @returns {Promise<any>} - The resolved data from the API call.
 */
const handleApiCall = async (apiCall) => {
  try {
    const response = await apiCall;
    return response.data;
  } catch (error) {
    throw error; // Re-throw the error for global error handling or UI-specific handling
  }
};