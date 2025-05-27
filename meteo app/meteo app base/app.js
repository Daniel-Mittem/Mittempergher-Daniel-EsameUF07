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