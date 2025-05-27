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
    if (!isRunning) return;

    const currentTime = getCurrentTime();
    const lastLap = laps[laps.length - 1];
    const lapTime = lastLap ? currentTime - lastLap.totalTime : currentTime;

    const lapData = {
        number: laps.length + 1,
        lapTime,
        totalTime: currentTime,
        formattedLapTime: formatTime(lapTime),
        formattedTotalTime: formatTime(currentTime),
        timestamp: new Date()
    };

    laps.push(lapData);
    updateLapDisplay();

    console.log(`Giro ${lapData.number} salvato:`, lapData.formattedLapTime, `(Totale: ${lapData.formattedTotalTime})`);
}

function updateLapDisplay() {
    lapList.innerHTML = '';

    if (laps.length === 0) {
        const noLap = document.createElement('li');
        noLap.className = 'no-laps';
        noLap.textContent = 'Nessun giro salvato';
        lapList.appendChild(noLap);
        return;
    }

    for (let i = laps.length - 1; i >= 0; i--) {
        const { number, formattedLapTime, formattedTotalTime } = laps[i];
        const li = document.createElement('li');
        li.className = 'lap-item fade-in';
        li.title = `Tempo totale: ${formattedTotalTime}`;
        
        li.innerHTML = `
            <span class="lap-number">Giro ${number}</span>
            <span class="lap-time">${formattedLapTime}</span>
        `;
        
        lapList.appendChild(li);
    }
}

function setupEventListeners() {
    startBtn.addEventListener('click', startStopwatch);
    stopBtn.addEventListener('click', stopStopwatch);
    resetBtn.addEventListener('click', resetStopwatch);
    lapBtn.addEventListener('click', saveLap);
    
    document.addEventListener('keydown', function(event) {
        switch(event.code) {
            case 'Space':
                event.preventDefault();
                if (isRunning) {
                    stopStopwatch();
                } else {
                    startStopwatch();
                }
                break;
            case 'KeyR':
                if (event.ctrlKey) {
                    event.preventDefault();
                    resetStopwatch();
                }
                break;
            case 'KeyL':
                if (event.ctrlKey && isRunning) {
                    event.preventDefault();
                    saveLap();
                }
                break;
        }
    });
}

function initializeApp() {
    console.log('Inizializzazione cronometro avanzato...');
    
    updateDisplay();
    updateLapDisplay();
    setupEventListeners();
    
    console.log('Cronometro pronto!');
    console.log('Comandi disponibili:');
    console.log('- Spazio: Start/Stop');
    console.log('- Ctrl+R: Reset');
    console.log('- Ctrl+L: Salva Giro');
}

document.addEventListener('DOMContentLoaded', initializeApp);