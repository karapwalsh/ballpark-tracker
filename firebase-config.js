// firebase-config.js
//
// PASTE YOUR FIREBASE CONFIG HERE. See README.md for step-by-step instructions
// on creating a free Firebase project. You'll copy this object from:
// Firebase Console → Project Settings → General → Your apps → SDK setup and configuration
//
// This file is safe to be public (these values are not secret) — your data is
// protected by the Firestore/Storage security rules, not by hiding this config.

export const firebaseConfig = {
  apiKey: "AIzaSyBR4DPUzqZ-taElypMlr48WqwcXjj50zL4",
  authDomain: "mlb-stadium-tracker.firebaseapp.com",
  projectId: "mlb-stadium-tracker",
  storageBucket: "mlb-stadium-tracker.firebasestorage.app",
  messagingSenderId: "451276451892",
  appId: "1:451276451892:web:eb34d34bbb9106736e5a61",
  measurementId: "G-3N3CSBPXY4",
};

// Set to true once you've pasted real values above — the app uses this to show
// a helpful setup message instead of crashing if you open it too early.
export const isConfigured = () =>
  !Object.values(firebaseConfig).some((v) => String(v).startsWith("PASTE_YOUR"));
