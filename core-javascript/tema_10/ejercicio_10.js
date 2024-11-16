let minutes = 0;
let seconds = 0;
let interval = null;

const timeDisplay = document.getElementById('time');
const startBtn = document.getElementById('startBtn');
const stopBtn = document.getElementById('stopBtn');
const resetBtn = document.getElementById('resetBtn');

function updateDisplay() {
  timeDisplay.textContent = `${formatTime(minutes)}:${formatTime(seconds)}`;
}

function startTimer() {
  if (interval) clearInterval(interval);
  interval = setInterval(() => {
    seconds++;
    if (seconds === 60) {
      seconds = 0;
      minutes++;
    }
    updateDisplay();
  }, 1000);
}

function stopTimer() {
  clearInterval(interval);
}

function resetTimer() {
  stopTimer();
  minutes = 0;
  seconds = 0;
  updateDisplay();
}

function formatTime(unit) {
  return unit < 10 ? `0${unit}` : unit;
}

startBtn.addEventListener('click', startTimer);
stopBtn.addEventListener('click', stopTimer);
resetBtn.addEventListener('click', resetTimer);

updateDisplay();
