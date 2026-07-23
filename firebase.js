import { initializeApp } from "https://www.gstatic.com/firebasejs/12.6.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.6.0/firebase-firestore.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/12.6.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyCI6by4lRLmyEeH4oeP8sU_lYqETJHC10A",
  authDomain: "darul-quraan-system.firebaseapp.com",
  projectId: "darul-quraan-system",
  storageBucket: "darul-quraan-system.firebasestorage.app",
  messagingSenderId: "310086462709",
  appId: "1:310086462709:web:6370d18062365a01c929bc"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const auth = getAuth(app);

export { app, db, auth };
