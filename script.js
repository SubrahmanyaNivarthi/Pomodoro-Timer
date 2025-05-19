const timerDisplay = document.getElementById('timer');
const startBtn = document.getElementById('start');
const resetBtn = document.getElementById('reset');

const modeButtons = {
    pomodoro: document.getElementById('pomodoro'),
    short: document.getElementById('short'),
    long: document.getElementById('long')
};

const durations = {
    pomodoro: 25 * 60,
    short: 5 * 60,
    long: 15 * 60
};

let currentMode = 'pomodoro';
let timeLeft = durations[currentMode];
let timerInterval =null;

function updateTimerDisplay() {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    timerDisplay.textContent = `${String(minutes).padStart(2,'0')}:${String(seconds).padStart(2, '0')}`;
}

function switchMode(mode) {
    currentMode = mode;
    timeLeft = durations[mode];
    clearInterval(timerInterval);
    timerInterval = null;
    startBtn.textContent = 'Start';
    updateTimerDisplay();
    
    for (let hey in modeButtons) {
        modebuttons[key].classList.remove('active');
    }
    modeButtons[mode].classList.add('active');
}

function startTimer() {
  clearInterval(timerInterval); 
  timerInterval = setInterval(() => {
    timeLeft--;
    updateTimerDisplay();

    if (timeLeft <= 0) {
      clearInterval(timerInterval); 
      alert("Time's up!"); 
    }
  }, 1000);

   startBtn.textContent = 'Pause';
}

function pauseTimer() {
    clearInterval(timerInterval);
    timerInterval = null;
    startBtn.textContent = 'Start';
}

function resetTimer() {
    clearInterval(timerInterval);
    timerInterval = null;
    timeLeft = durations[currentMode];
    updateTimerDisplay();
    startBtn.textContent = 'Start';
}

for (let mode in modeButtons) {
    modeButtons[mode].addEventListener('click', () => switchMode(mode));
}

startBtn.addEventListener('click', () => {
    if (timerInterval) {
        pauseTimer();
    } else {
        startTimer();
    }
});

resetBtn.addEventListener('click', resetTimer);

updateTimerDisplay();
