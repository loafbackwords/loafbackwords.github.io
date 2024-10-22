const correctCode = "3064"; // Set your door code here
const doorCodeInput = document.getElementById("doorCode");
const submitBtn = document.getElementById("submitBtn");
const statusMessage = document.getElementById("statusMessage");
const alarmSound = document.getElementById("alarmSound");

submitBtn.addEventListener("click", () => {
  const enteredCode = doorCodeInput.value;
  if (enteredCode === correctCode) {
    statusMessage.textContent = "Code correct! Press 'Space' to trigger alarm.";
    doorCodeInput.disabled = true; // Disable input after correct code
  } else {
    statusMessage.textContent = "Incorrect code, try again.";
  }
});

// Listen for space key press
window.addEventListener("keydown", (event) => {
  if (event.code === "Space" && doorCodeInput.disabled) {
    alarmSound.play();
    statusMessage.textContent = "Alarm triggered!";
  }
});
