# 🌤️ Meteo App

Un'applicazione web moderna per il recupero e la visualizzazione delle condizioni meteorologiche in tempo reale, utilizzando le API di Open-Meteo e le funzionalità di geolocalizzazione del browser.

## 🚀 Caratteristiche

### Funzionalità Base
- 🌍 **Input manuale coordinate**: Inserimento di latitudine e longitudine per località specifica
- 🌡️ **Dati meteo completi**: Temperatura, umidità, precipitazioni, copertura nuvolosa e velocità del vento
- 💾 **Salvataggio locale**: I dati vengono salvati in memoria e visualizzati in formato JSON
- 📱 **Design responsive**: Interfaccia ottimizzata per dispositivi mobili e desktop

### Funzionalità Avanzate
- 📍 **Geolocalizzazione automatica**: Rileva automaticamente la posizione corrente del dispositivo
- 🎨 **Icone meteo intelligenti**: Visualizzazione di emoji appropriate basate sui codici WMO
- 🏙️ **Riconoscimento località**: Mostra il nome della città/località tramite reverse geocoding
- ⚡ **Gestione errori**: Messaggi di errore chiari e stati di caricamento

## 🛠️ Tecnologie Utilizzate

### API Esterne
- **[Open-Meteo API](https://open-meteo.com)**: Dati meteorologici gratuiti e accurati
- **[BigDataCloud Geocoding API](https://www.bigdatacloud.com)**: Conversione coordinate → nome località
- **Navigator Geolocation API**: Geolocalizzazione del browser

### Frontend
- **HTML5**: Struttura semantica dell'applicazione
- **CSS3**: Design glassmorphism con effetti moderni
- **JavaScript ES6+**: Logica asincrona con Promise e Fetch API

## 📁 Struttura del Progetto

```
meteo-app_____/
├── index.html          # Interfaccia utente principale
├── style.css           # Stili CSS con design glassmorphism
├── app.js              # Logica JavaScript e gestione API
└── README.md           # Documentazione del progetto
```

### Metodi per Ottenere Dati Meteo

#### 1. Geolocalizzazione Automatica (Consigliato)
1. Clicca il pulsante "📍 Posizione Corrente"
2. Autorizza l'accesso alla posizione quando richiesto dal browser
3. I dati meteo verranno recuperati automaticamente

#### 2. Inserimento Manuale Coordinate
1. Inserisci la **latitudine** nel primo campo (es: 46.0679)
2. Inserisci la **longitudine** nel secondo campo (es: 11.1211)
3. Clicca "Ottieni Dati Meteo"

### Interpretazione dei Dati
L'app mostra le seguenti informazioni meteorologiche:
- **📍 Località**: Nome della città/regione
- **🌡️ Temperatura**: In gradi Celsius
- **💧 Umidità**: Percentuale di umidità relativa
- **🌧️ Pioggia**: Millimetri di precipitazioni
- **☁️ Nuvole**: Percentuale di copertura nuvolosa
- **💨 Vento**: Velocità in km/h

## 🌦️ Codici Meteo e Icone

L'applicazione utilizza i **codici WMO (World Meteorological Organization)** per determinare le condizioni meteorologiche e mostra icone appropriate:

| Codice | Condizione | Icona |
|--------|------------|-------|
| 0 | Cielo sereno | ☀️ |
| 1-3 | Nuvolosità variabile | 🌤️⛅☁️ |
| 45-48 | Nebbia | 🌫️ |
| 51-57 | Pioviggine | 🌦️ |
| 61-67 | Pioggia | 🌧️ |
| 71-77 | Neve | ❄️🌨️ |
| 80-86 | Rovesci | 🌦️ |
| 95-99 | Temporali | ⛈️ |

*Per l'elenco completo dei codici, consulta la [documentazione WMO](https://open-meteo.com/en/docs)*

## 🔧 API Integration

### Open-Meteo API
L'app utilizza l'endpoint forecast di Open-Meteo:
```
https://api.open-meteo.com/v1/forecast?
latitude={lat}&longitude={lon}&
current=temperature_2m,relative_humidity_2m,precipitation,rain,cloud_cover,wind_speed_10m,weather_code
```

#### Parametri Utilizzati:
- `latitude`: Coordinata latitudine
- `longitude`: Coordinata longitudine  
- `current`: Variabili meteorologiche attuali

#### Esempio Risposta API:
```json
{
  "latitude": 46.04,
  "longitude": 11.12,
  "current": {
    "temperature_2m": 11.9,
    "relative_humidity_2m": 54,
    "precipitation": 0.00,
    "cloud_cover": 100,
    "wind_speed_10m": 9.8,
    "weather_code": 3
  }
}
```

### Reverse Geocoding
Per convertire le coordinate in nomi di località:
```
https://api.bigdatacloud.net/data/reverse-geocode-client?
latitude={lat}&longitude={lon}&localityLanguage=it
```

## 📱 Compatibilità Browser

### Requisiti Minimi:
- **Fetch API**: Supporto nativo (IE11+, tutti i browser moderni)
- **Promises**: ES6+ (IE11+ con polyfill)
- **Geolocation API**: HTML5 (tutti i browser moderni)
- **CSS Grid/Flexbox**: Layout responsivo

## 🔒 Privacy e Sicurezza

- **Geolocalizzazione**: Richiede autorizzazione esplicita dell'utente
- **Dati locali**: Salvati solo in memoria (non persistenti)
- **API esterne**: Connessioni HTTPS sicure
- **No tracking**: Nessun dato viene inviato a server di terze parti per tracking

## 🎨 Design e UI/UX

### Stile Glassmorphism
- **Sfondo gradiente**: Blu-viola per atmosfera moderna
- **Elementi semi-trasparenti**: Effetto vetro con backdrop-filter
- **Animazioni fluide**: Transizioni CSS per interazioni smooth
- **Typography moderna**: Font Segoe UI per leggibilità ottimale

### Responsive Design
- **Mobile-first**: Layout ottimizzato per smartphone
- **Breakpoint tablet**: Adattamenti per schermi medi
- **Desktop enhanced**: Esperienza completa su schermi grandi

## 💡 Possibili Miglioramenti Futuri

### Funzionalità
- 📊 **Grafici meteo**: Visualizzazione trend con Chart.js
- 📅 **Previsioni settimanali**: Forecast a 7 giorni
- 🏠 **Località preferite**: Sistema di bookmark per luoghi frequenti
- 🔔 **Notifiche meteo**: Alert per condizioni avverse
- 🌡️ **Unità di misura**: Toggle Celsius/Fahrenheit, km/h vs mph

### Tecnologie
- 💾 **PWA**: Progressive Web App con cache offline
- 📱 **Service Worker**: Funzionamento offline limitato
- 🗺️ **Mappa interattiva**: Integrazione con Leaflet/MapBox
- 📈 **Analytics**: Statistiche uso (privacy-friendly)

## 🔍 Troubleshooting

### Errori Comuni
- **"Geolocalizzazione non supportata"**: Browser obsoleto o HTTP (non HTTPS)
- **"Impossibile ottenere la posizione"**: Autorizzazione negata o GPS disattivato
- **"Errore nel recupero dei dati"**: Problemi di connessione o coordinate non valide

### Debug
I dati vengono salvati in formato JSON nella sezione "Dati Salvati Localmente" per verificare la risposta dell'API.

## 📚 Risorse e Documentazione

- [Open-Meteo API Documentation](https://open-meteo.com/en/docs)
- [WMO Weather Codes](https://open-meteo.com/en/docs#weathervariables)
- [MDN Geolocation API](https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API)
- [CSS Backdrop Filter](https://developer.mozilla.org/en-US/docs/Web/CSS/backdrop-filter)

**Sviluppato per il corso UF07:WEB** - Progetto Meteo App