import {
  collection,
  getDocs,
} from "https://www.gstatic.com/firebasejs/9.23.0/firebase-firestore.js";

async function loadRegistrations() {
  const snapshot = await getDocs(collection(db, "registrations"));
  const list = document.getElementById("registrations-list");
  snapshot.forEach((doc) => {
    const li = document.createElement("li");
    li.textContent = `${doc.data().userEmail} registered for ${
      doc.data().webinar
    }`;
    list.appendChild(li);
  });
}

loadRegistrations();
