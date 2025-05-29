// Variabili di stato per il cronometro
let startTime = 0;
let elapsedTime = 0;
let timerInterval = null;
let isRunning = false;

// Collegamento agli elementi HTML del DOM
const timeDisplay = document.getElementById('timeDisplay');
const startBtn = document.getElementById('startBtn');
const stopBtn = document.getElementById('stopBtn');
const resetBtn = document.getElementById('resetBtn');

// Formatta il tempo in mm:ss partendo dai millisecondi
function formatTime(milliseconds) {
    const totalSeconds = Math.floor(milliseconds / 1000);
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;

    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

// Aggiorna il display del cronometro
function updateDisplay() {
    const currentTime = Date.now();
    elapsedTime = (currentTime - startTime);
    timeDisplay.textContent = formatTime(elapsedTime);
}

// Avvia il cronometro
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

// Ferma il cronometro
function stopStopwatch() {
    if (isRunning) {
        clearInterval(timerInterval);
        isRunning = false;

        startBtn.disabled = false;
        stopBtn.disabled = true;
        startBtn.textContent = 'Start';
    }
}

// Azzera il cronometro
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