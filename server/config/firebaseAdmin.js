import admin from "firebase-admin";
import fs from "fs";

// Read Firebase service account key from file
const serviceAccountPath = "./config/firebaseAdmin.json"; // Adjust if needed

if (!fs.existsSync(serviceAccountPath)) {
  console.error("❌ Firebase Admin SDK JSON file is missing!");
  process.exit(1);
}

// Read and parse JSON file
const serviceAccount = JSON.parse(fs.readFileSync(serviceAccountPath, "utf8"));

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

export default admin;
