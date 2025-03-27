import express from "express";
import admin from "../config/firebaseAdmin.js";

const router = express.Router();

// Verify Firebase Token Middleware
const verifyToken = async (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1]; // Extract Bearer Token
  if (!token) return res.status(401).json({ error: "Unauthorized" });

  try {
    const decodedToken = await admin.auth().verifyIdToken(token);
    req.user = decodedToken;
    next();
  } catch (error) {
    return res.status(403).json({ error: "Invalid Token" });
  }
};

// 🔹 Route: User Login (Verifies Firebase Token)
router.post("/login", verifyToken, (req, res) => {
  res.json({ message: "User authenticated", user: req.user });
});

// 🔹 Route: Get User Info (Protected)
router.get("/profile", verifyToken, (req, res) => {
  res.json({ user: req.user });
});

export default router;
