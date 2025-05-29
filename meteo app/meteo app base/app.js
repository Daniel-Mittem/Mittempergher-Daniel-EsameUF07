// Mappa dei codici meteo con relative icone e descrizioni testuali
const weatherIcons = { 
    0: "☀️ Sole",
    1: "🌤️ Parzialmente nuvoloso",
    2: "⛅ Variabile",
    3: "☁️ Nuvoloso",
    45: "🌫️ Nebbia",
    48: "🌫️ Nebbia congelante",
    51: "🌦️ Pioggia leggera",
    61: "🌧️ Pioggia moderata",
    71: "❄️ Neve leggera",
    95: "⛈️ Temporale"
};

// Oggetto per memorizzare temporaneamente i dati ricevuti
let savedData = {};

// Recupera i dati meteo e di localizzazione in base a latitudine e longitudine inserite
function getWeatherData() {
    const lat = document.getElementById('latitude').value;
    const lon = document.getElementById('longitude').value;

    // Verifica che i campi latitudine e longitudine siano stati compilati
    if (!lat || !lon) {
        showError('⚠️ Inserisci sia latitudine che longitudine');
        return;
    }

    showLoading();

    // URL dell’API meteo (Open-Meteo)
    const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,relative_humidity_2m,precipitation,rain,cloud_cover,wind_speed_10m,weather_code`;
    
    // URL dell’API per la geocodifica inversa (BigDataCloud)
    const geocodeUrl = `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lon}&localityLanguage=it`;

    // Effettua entrambe le richieste in parallelo
    Promise.all([
        fetch(url).then(res => res.json()),
        fetch(geocodeUrl).then(res => res.json())
    ])
    .then(([weatherData, locationData]) => {
        hideStatusMessages();
        displayWeatherData(weatherData, locationData);
        saveDataLocally(weatherData, locationData);
    })
    .catch(() => {
        showError('❌ Errore nel recupero dei dati meteo');
    });
}

// Mostra i dati meteo e la posizione sul DOM
function displayWeatherData(data, locationData) {
    const meteo = data.current;
    const code = meteo.weather_code;

    // Recupera l’icona meteo corrispondente al codice (oppure un punto interrogativo)
    const icona = weatherIcons[code] || "❓ Codice meteo: " + code;

    // Costruisce il nome della località, cercando tra i vari livelli
    const placeName = locationData.city || locationData.locality || locationData.principalSubdivision || locationData.countryName || "Località sconosciuta";

    // Inserisce i dati meteo nell’elemento HTML "weatherInfo"
    const weatherInfo = document.getElementById("weatherInfo");
    weatherInfo.innerHTML = `
        <div style="text-align: center; margin-bottom: 15px;">
            <h2 style="margin-bottom: 5px;">📍 ${placeName}</h2>
            <small style="opacity: 0.8;">Lat: ${data.latitude}, Lon: ${data.longitude}</small>
        </div>
        <div class="weather-icon" style="font-size: 3rem; text-align: center; margin-bottom: 15px;">${icona}</div>
        <div><strong>Temperatura:</strong> ${meteo.temperature_2m} °C</div>
        <div><strong>Umidità:</strong> ${meteo.relative_humidity_2m}%</div>
        <div><strong>Pioggia:</strong> ${meteo.precipitation} mm</div>
        <div><strong>Nuvole:</strong> ${meteo.cloud_cover}%</div>
        <div><strong>Vento:</strong> ${meteo.wind_speed_10m} km/h</div>
    `;

    // Rende visibile il contenitore dei dati meteo
    document.getElementById('weatherData').classList.add('show');
}

// Salva localmente i dati meteo e le informazioni sulla posizione
function saveDataLocally(data, locationData) {
    const placeName = locationData.city || locationData.locality || locationData.principalSubdivision || locationData.countryName || "Località sconosciuta";

    // Popola l’oggetto "savedData"
    savedData = {
        timestamp: new Date().toISOString(),
        location: placeName,
        latitude: data.latitude,
        longitude: data.longitude,
        current: data.current
    };

    // Mostra i dati salvati in formato JSON (per debug o visualizzazione)
    document.getElementById('storedData').textContent = JSON.stringify(savedData, null, 2);
}

// Mostra l’indicatore di caricamento e nasconde altri messaggi
function showLoading() {
    document.getElementById('loading').style.display = 'block';
    document.getElementById('error').style.display = 'none';
    document.getElementById('weatherData').classList.remove('show');
}

// Mostra un messaggio di errore personalizzato
function showError(message) {
    document.getElementById('loading').style.display = 'none';
    document.getElementById('error').textContent = message;
    document.getElementById('error').style.display = 'block';
    document.getElementById('weatherData').classList.remove('show');
}

// Nasconde tutti i messaggi di stato (caricamento ed errore)
function hideStatusMessages() {
    document.getElementById('loading').style.display = 'none';
    document.getElementById('error').style.display = 'none';
}