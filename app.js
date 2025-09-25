import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/9.23.0/firebase-auth.js";
import {
  getFirestore,
  collection,
  addDoc,
} from "https://www.gstatic.com/firebasejs/9.23.0/firebase-firestore.js";
import { firebaseConfig } from "./firebaseConfig.js";

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

document.getElementById("signup-btn").addEventListener("click", async () => {
  const email = document.getElementById("signup-email").value;
  const pass = document.getElementById("signup-pass").value;
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      pass
    );
    alert("Sign Up Successful! You can now login.");
  } catch (err) {
    alert(err.message);
  }
});

document.getElementById("login-btn").addEventListener("click", async () => {
  const email = document.getElementById("login-email").value;
  const pass = document.getElementById("login-pass").value;
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, pass);
    const user = userCredential.user;
    alert("Login Successful!");
    window.location.href = "dashboard.html";
  } catch (err) {
    alert(err.message);
  }
});
