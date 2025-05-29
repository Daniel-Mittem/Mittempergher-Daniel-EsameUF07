// 🌤️ Mappa dei codici meteo → Emoji + descrizione user-friendly
const weatherIcons = {
    0: "☀️ Sole",
    1: "🌤️ Prevalentemente sereno", 
    2: "⛅ Parzialmente nuvoloso",
    3: "☁️ Nuvoloso",
    45: "🌫️ Nebbia",
    48: "🌫️ Nebbia con brina",
    51: "🌦️ Pioviggine leggera",
    53: "🌦️ Pioviggine moderata", 
    55: "🌦️ Pioviggine densa",
    56: "🧊 Pioviggine gelata leggera",
    57: "🧊 Pioviggine gelata densa",
    61: "🌧️ Pioggia leggera",
    63: "🌧️ Pioggia moderata",
    65: "🌧️ Pioggia forte",
    66: "🧊 Pioggia gelata leggera",
    67: "🧊 Pioggia gelata forte",
    71: "❄️ Neve leggera",
    73: "❄️ Neve moderata",
    75: "❄️ Neve forte",
    77: "🌨️ Granelli di neve",
    80: "🌦️ Rovesci di pioggia leggeri",
    81: "🌦️ Rovesci di pioggia moderati",
    82: "🌦️ Rovesci di pioggia violenti",
    85: "🌨️ Rovesci di neve leggeri",
    86: "🌨️ Rovesci di neve forti",
    95: "⛈️ Temporale",
    96: "⛈️ Temporale con grandine leggera",
    99: "⛈️ Temporale con grandine forte"
};

// 💾 Variabile per salvare localmente i dati ottenuti
let savedData = {};

// 📍 Ottieni la posizione corrente dell’utente via Geolocalizzazione HTML5
function getCurrentLocation() {
    if (!navigator.geolocation) {
        showError('⚠️ Geolocalizzazione non supportata');
        return;
    }
    
    showLoading();

    navigator.geolocation.getCurrentPosition(
        (position) => {
            // Imposta nei campi input latitudine e longitudine
            document.getElementById('latitude').value = position.coords.latitude.toFixed(4);
            document.getElementById('longitude').value = position.coords.longitude.toFixed(4);
            getWeatherData();
        },
        () => showError('❌ Impossibile ottenere la posizione')
    );
}

// 🌦️ Richiesta dati meteo e geolocalizzazione inversa (nome località)
function getWeatherData() {
    const lat = document.getElementById('latitude').value;
    const lon = document.getElementById('longitude').value;

    if (!lat || !lon) {
        showError('⚠️ Inserisci sia latitudine che longitudine');
        return;
    }

    showLoading();

    // Open-Meteo API per meteo attuale
    const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,relative_humidity_2m,precipitation,rain,cloud_cover,wind_speed_10m,weather_code`;

    // BigDataCloud API per ottenere il nome della località
    const geocodeUrl = `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lon}&localityLanguage=it`;

    // Richieste parallele: meteo + località
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

//Mostra i dati meteo nella pagina
function displayWeatherData(data, locationData) {
    const meteo = data.current;
    const code = meteo.weather_code;
    const icona = weatherIcons[code] || "❓ Codice meteo: " + code;

    // Determina il nome della località con fallback
    const placeName = locationData.city || locationData.locality || locationData.principalSubdivision || locationData.countryName || "Località sconosciuta";

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

    document.getElementById('weatherData').classList.add('show');
}

//Salva i dati meteo localmente per eventuale utilizzo successivo
function saveDataLocally(data, locationData) {
    const placeName = locationData.city || locationData.locality || locationData.principalSubdivision || locationData.countryName || "Località sconosciuta";
    
    savedData = {
        timestamp: new Date().toISOString(),
        location: placeName,
        latitude: data.latitude,
        longitude: data.longitude,
        current: data.current
    };
    
    // Visualizza il JSON dei dati salvati
    document.getElementById('storedData').textContent = JSON.stringify(savedData, null, 2);
}

//Mostra stato di caricamento
function showLoading() {
    document.getElementById('loading').style.display = 'block';
    document.getElementById('error').style.display = 'none';
    document.getElementById('weatherData').classList.remove('show');
}

//Mostra errore con messaggio specifico
function showError(message) {
    document.getElementById('loading').style.display = 'none';
    document.getElementById('error').textContent = message;
    document.getElementById('error').style.display = 'block';
    document.getElementById('weatherData').classList.remove('show');
}

//Nasconde messaggi di stato (loading/error)
function hideStatusMessages() {
    document.getElementById('loading').style.display = 'none';
    document.getElementById('error').style.display = 'none';
}