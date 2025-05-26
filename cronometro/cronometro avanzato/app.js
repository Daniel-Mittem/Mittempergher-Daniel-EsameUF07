let startTime = 0;
let elapsedTime = 0;
let timerInterval = null;
let isRunning = false;

let laps = [];

const timeDisplay = document.getElementById('timeDisplay');
const startBtn = document.getElementById('startBtn');
const stopBtn = document.getElementById('stopBtn');
const resetBtn = document.getElementById('resetBtn');
const lapBtn = document.getElementById('lapBtn');
const lapList = document.getElementById('lapList');
const stopwatchContainer = document.getElementById('stopwatchContainer');

function formatTime(ms) {
    const totalSeconds = Math.floor(ms / 1000);
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    const milliseconds = Math.floor((ms % 1000) / 10); 
    
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}:${milliseconds.toString().padStart(2, '0')}`;
}

function getCurrentTime() {
    if (isRunning) {
        return elapsedTime + (Date.now() - startTime);
    }
    return elapsedTime;
}

function updateDisplay() {
    const currentTime = Date.now();
    elapsedTime = (currentTime - startTime);
    timeDisplay.textContent = formatTime(elapsedTime);
}

function startStopwatch() {
    if (!isRunning) {
        startTime = Date.now() - elapsedTime;
        timerInterval = setInterval(updateDisplay, 10);
        isRunning = true;
        
        startBtn.disabled = true;
        stopBtn.disabled = false;
        startBtn.textContent = 'Running...';
    }
}
function stopStopwatch() {
    if (isRunning) {
        clearInterval(timerInterval);
        isRunning = false;
        
        startBtn.disabled = false;
        stopBtn.disabled = true;
        startBtn.textContent = 'Start';
    }
}

function resetStopwatch() {
    clearInterval(timerInterval);
    isRunning = false;
    elapsedTime = 0;
    startTime = 0;
    
    timeDisplay.textContent = '00:00';
    startBtn.disabled = false;
    stopBtn.disabled = true;
    startBtn.textContent = 'Start';
}