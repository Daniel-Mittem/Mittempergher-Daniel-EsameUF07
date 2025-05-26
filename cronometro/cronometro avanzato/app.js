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
    const currentTime = getCurrentTime();
    timeDisplay.textContent = formatTime(currentTime);
}

function startStopwatch() {
    if (!isRunning) {
        startTime = Date.now();
        timerInterval = setInterval(updateDisplay, 10); 
        isRunning = true;
        
        startBtn.disabled = true;
        stopBtn.disabled = false;
        lapBtn.disabled = false;
        stopwatchContainer.classList.add('running');
        
        console.log('Cronometro avviato');
    }
}

function stopStopwatch() {
    if (isRunning) {
        elapsedTime = getCurrentTime();
        clearInterval(timerInterval);
        isRunning = false;
        
        startBtn.disabled = false;
        stopBtn.disabled = true;
        lapBtn.disabled = true;
        stopwatchContainer.classList.remove('running');
        
        console.log('Cronometro fermato a:', formatTime(elapsedTime));
    }
}

function resetStopwatch() {
    clearInterval(timerInterval);
    startTime = 0;
    elapsedTime = 0;
    isRunning = false;
    
    updateDisplay();
    startBtn.disabled = false;
    stopBtn.disabled = true;
    lapBtn.disabled = true;
    stopwatchContainer.classList.remove('running');
    
    laps = [];
    updateLapDisplay();
    
    console.log('Cronometro resettato');
}

function saveLap() {
    if (isRunning) {
        const currentTime = getCurrentTime();
        const lapData = {
            number: laps.length + 1,
            time: currentTime,
            formattedTime: formatTime(currentTime),
            timestamp: new Date()
        };
        
        laps.push(lapData);
        updateLapDisplay();
        
        console.log(`Giro ${lapData.number} salvato:`, lapData.formattedTime);
    }
}

function updateLapDisplay() {
    lapList.innerHTML = '';
    
    if (laps.length === 0) {
        const noLapsItem = document.createElement('li');
        noLapsItem.className = 'no-laps';
        noLapsItem.textContent = 'Nessun giro salvato';
        lapList.appendChild(noLapsItem);
        return;
    }
    
    for (let i = laps.length - 1; i >= 0; i--) {
        const lap = laps[i];
        const lapItem = document.createElement('li');
        lapItem.className = 'lap-item fade-in';
        
        lapItem.innerHTML = `
            <span class="lap-number">Giro ${lap.number}</span>
            <span class="lap-time">${lap.formattedTime}</span>
        `;
        
        lapList.appendChild(lapItem);
    }
}