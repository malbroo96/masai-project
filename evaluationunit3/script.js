import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import {
  getDatabase,
  ref,
  push,
  set,
  onValue,
  remove,
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-database.js";

// 🔹 Your Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyAbriwRxa38MMmCWQn0bM4uvCCd5ewhhWE",
  authDomain: "library-49fb4.firebaseapp.com",
  databaseURL:
    "https://library-49fb4-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "library-49fb4",
  storageBucket: "library-49fb4.firebasestorage.app",
  messagingSenderId: "909495889789",
  appId: "1:909495889789:web:0db2cc33bddb24c6a22614",
  measurementId: "G-LL0Y8C37QR",
};

// 🔹 Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
const codesRef = ref(db, "codes");

const form = document.getElementById("form");
const codeInput = document.getElementById("code");
const list = document.getElementById("list");

let codeArr = JSON.parse(localStorage.getItem("list")) || [];

// Render list
function renderList() {
  list.innerHTML = "";
  codeArr.forEach((item, idx) => {
    const div = document.createElement("div");
    div.textContent = item;
    div.style.display = "block";
    div.style.marginBottom = "8px";

    const delBtn = document.createElement("button");
    delBtn.textContent = "Delete";
    delBtn.style.marginLeft = "10px";
    delBtn.onclick = function () {
      codeArr.splice(idx, 1);
      localStorage.setItem("list", JSON.stringify(codeArr));

      // Delete from Firebase
      onValue(
        codesRef,
        (snapshot) => {
          snapshot.forEach((child) => {
            if (child.val() === item) {
              remove(ref(db, `codes/${child.key}`));
            }
          });
        },
        { onlyOnce: true }
      );

      renderList();
    };

    div.appendChild(delBtn);
    list.appendChild(div);
  });
}

// Handle submit
form.addEventListener("submit", function (e) {
  e.preventDefault();
  const value = codeInput.value.trim();
  if (value) {
    codeArr.push(value);
    localStorage.setItem("list", JSON.stringify(codeArr));

    const newCodeRef = push(codesRef);
    set(newCodeRef, value);

    renderList();
    codeInput.value = "";
  }
});

// Sync from Firebase
onValue(codesRef, (snapshot) => {
  codeArr = [];
  snapshot.forEach((child) => {
    codeArr.push(child.val());
  });
  localStorage.setItem("list", JSON.stringify(codeArr));
  renderList();
});

renderList();
