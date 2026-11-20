import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyDVvdEH0w6JKR28Ks796fE2OqldTPJ21J8",
  authDomain: "sinfonia4-717f0.firebaseapp.com",
  projectId: "sinfonia4-717f0",
  storageBucket: "sinfonia4-717f0.firebasestorage.app",
  messagingSenderId: "59690927988",
  appId: "1:59690927988:web:104a01d48fcf0f41908e21"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);