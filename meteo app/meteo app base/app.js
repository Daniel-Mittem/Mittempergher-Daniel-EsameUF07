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

let savedData = {};

function getWeatherData() {
    const lat = document.getElementById('latitude').value;
    const lon = document.getElementById('longitude').value;

    if (!lat || !lon) {
        showError('⚠️ Inserisci sia latitudine che longitudine');
        return;
    }

    showLoading();

    const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,relative_humidity_2m,precipitation,rain,cloud_cover,wind_speed_10m,weather_code`;
    const geocodeUrl = `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lon}&localityLanguage=it`;

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

function displayWeatherData(data, locationData) {
    const meteo = data.current;
    const code = meteo.weather_code;
    const icona = weatherIcons[code] || "❓ Codice meteo: " + code;

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