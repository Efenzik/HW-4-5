import { success, error } from "@pnotify/core";
import "@pnotify/core/dist/PNotify.css";
import "@pnotify/core/dist/BrightTheme.css";

const availableKeys = ["q", "w", "e", "r", "t", "y"];
let activeKeyIndex = 0;

const currentKeyLabel = document.querySelector("[data-key]");
const restartButton = document.querySelector("[data-btn]");

function updateKey() {
  activeKeyIndex = Math.floor(Math.random() * availableKeys.length);
  currentKeyLabel.textContent = availableKeys[activeKeyIndex];
}

document.addEventListener("keydown", (evt) => {
  const pressed = evt.key.toLowerCase();
  const expected = availableKeys[activeKeyIndex];
  if (pressed === expected) {
    success({
      text: `✅ Правильно: ${pressed}`,
      delay: 1000,
    });
    updateKey();
  } else {
    error({
      text: `❌  "${pressed}" ✅ "${expected}"`,
      delay: 1000,
    });
  }
});
restartButton.addEventListener("click", () => {
  updateKey();
});

updateKey();
