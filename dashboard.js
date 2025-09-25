import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
import {
  getFirestore,
  collection,
  getDocs,
} from "https://www.gstatic.com/firebasejs/9.23.0/firebase-firestore.js";
import { firebaseConfig } from "./firebaseConfig.js";

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

async function loadWebinars() {
  const webinarsCol = collection(db, "webinars");
  const webinarSnapshot = await getDocs(webinarsCol);
  const list = document.getElementById("webinar-list");
  webinarSnapshot.forEach((doc) => {
    const li = document.createElement("li");
    li.textContent = `${doc.data().title} - ${doc.data().date}`;
    list.appendChild(li);
  });
}

loadWebinars();
import { getAuth } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-auth.js";
import { addDoc } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-firestore.js";

const auth = getAuth();

document.getElementById("register-btn").addEventListener("click", async () => {
  const user = auth.currentUser;
  if (!user) {
    alert("Login first!");
    return;
  }

  try {
    await addDoc(collection(db, "registrations"), {
      userEmail: user.email,
      webinar: "Intro to AI Webinar", // Replace with selected webinar dynamically later
      timestamp: new Date(),
    });
    alert("You are registered!");
  } catch (err) {
    alert(err.message);
  }
});
