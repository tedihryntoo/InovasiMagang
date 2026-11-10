import { initializeApp } from
"https://www.gstatic.com/firebasejs/11.10.0/firebase-app.js";

import { getAuth } from
"https://www.gstatic.com/firebasejs/11.10.0/firebase-auth.js";

import { getDatabase } from
"https://www.gstatic.com/firebasejs/11.10.0/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyDkSpL7l9-Bk8wDUqoLdatbarLoL65EhWc",
  authDomain: "inovasimagang-b676e.firebaseapp.com",
  databaseURL: "https://inovasimagang-b676e-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "inovasimagang-b676e",
  storageBucket: "inovasimagang-b676e.firebasestorage.app",
  messagingSenderId: "1025194458530",
  appId: "1:1025194458530:web:e2e7fb24b5af9b26cdc6fb",
  measurementId: "G-MBT3LBP8VD"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getDatabase(app);