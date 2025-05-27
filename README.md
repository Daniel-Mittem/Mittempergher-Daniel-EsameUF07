# Progetti UF07:WEB

Questo repository contiene i tre progetti sviluppati per l'esame del corso UF07:WEB. Ogni progetto dimostra competenze specifiche nello sviluppo web frontend utilizzando tecnologie moderne.

## 📋 Struttura del Repository

```
Mittempergher-Daniel-EsameUF07/
├── task-manager/
│   ├── task manager base/     # Progetto 1: Task Manager 
│   └── task manager avanzato/ # Progetto 1: Task Manager 
├── cronometro/
│   ├── cronometro base/       # Progetto 2: Cronometro (Base)
│   └── cronometro avanzato/   # Progetto 2: Cronometro 
├── meteo-app/
│   ├── meteo app base/        # Progetto 3: Meteo App (Base)
│   └── meteo app avanzato/    # Progetto 3: Meteo App 
└── README.md                  # Questo file
```

## 🎯 Obiettivi dell'Esame

L'esame valuta le conoscenze apprese durante le lezioni attraverso la realizzazione pratica di tre progetti web. La valutazione è espressa in punteggio da 0 a 32, con sufficienza a 18.

### Requisiti per la Sufficienza
- ✅ **Progetto 1** (Task Manager) - versione base completata
- ✅ **Progetto 3** (Meteo App) - versione base completata

### Per il Punteggio Massimo (32/32)
- 🚀 Tutte le funzionalità avanzate implementate
- 🚀 Progetto 2 (Cronometro) completato
- 📚 Documentazione completa

---

## 🗂️ Progetto 1: Task Manager

### 📝 Descrizione
Web app per la gestione di una lista di attività personali o professionali.

### ⚡ Funzionalità Base
- ➕ Inserimento nuove attività
- ❌ Rimozione attività esistenti
- 📋 Visualizzazione lista completa

### 🚀 Funzionalità Avanzate
- ✏️ Modifica nome attività esistenti
- 🔄 Gestione stati delle attività:
  - 📝 Da fare
  - ⏳ In corso  
  - ✅ Completata
- 🔍 Filtro attività per stato
- 🔎 Ricerca attività per nome

### 🛠️ Tecnologie Utilizzate
- HTML5, CSS3, JavaScript
- Local Storage per persistenza dati
- DOM manipulation

---

## ⏱️ Progetto 2: Cronometro

### 📝 Descrizione
Cronometro digitale con funzionalità complete per il tracking del tempo.

### ⚡ Funzionalità Base
- ▶️ Avvio cronometro
- ⏸️ Stop cronometro
- 🔄 Reset cronometro
- 📊 Visualizzazione tempo formato MM:SS

### 🚀 Funzionalità Avanzate
- 🏁 Pulsante "Giro" per salvare tempi intermedi
- 📝 Lista dinamica dei tempi salvati
- 📊 Visualizzazione precisa formato MM:SS:MS
- 💾 Persistenza dei tempi di giro

### 🛠️ Tecnologie Utilizzate
- HTML5, CSS3, JavaScript
- `setTimeout()` per gestione timing
- Array manipulation per gestione giri

---

## 🌤️ Progetto 3: Meteo App

### 📝 Descrizione
Applicazione meteo che utilizza API esterne per fornire informazioni meteorologiche in tempo reale.

### ⚡ Funzionalità Base
- 🌍 Input coordinate (latitudine/longitudine)
- 🔗 Chiamata API Open-Meteo
- 📊 Visualizzazione dati meteo essenziali:
  - 🌡️ Temperatura
  - 💧 Umidità
  - 🌧️ Precipitazioni
  - 💨 Velocità vento

### 🚀 Funzionalità Avanzate
- 📍 Geolocalizzazione automatica utente
- 🎨 Icone meteo basate su weather_code
- 📚 Documentazione completa weather_code
- 🎯 Interfaccia utente migliorata

### 🔗 API Utilizzata
```
https://api.open-meteo.com/v1/forecast?latitude={lat}&longitude={lon}&current=temperature_2m,relative_humidity_2m,precipitation,rain,cloud_cover,wind_speed_10m,weather_code
```

### 🛠️ Tecnologie Utilizzate
- HTML5, CSS3, JavaScript
- Fetch API per chiamate HTTP
- Geolocation API
- JSON parsing e manipulation

---

## 🚀 Come Iniziare

### Prerequisiti
- Browser web moderno
- Connessione internet (per Progetto 3)
- Editor di codice (consigliato: VS Code)

### Installazione
1. Clona questo repository:
   ```bash
   git clone [URL_REPOSITORY]
   ```

2. Naviga nella cartella del progetto desiderato:
   ```bash
   # Versioni Base
   cd task-manager/task\ manager\ base
   cd cronometro/cronometro\ base
   cd meteo-app/meteo\ app\ base
   
   # Versioni Avanzate
   cd task-manager/task\ manager\ avanzato
   cd cronometro/cronometro\ avanzato
   cd meteo-app/meteo\ app\ avanzato
   ```

3. Apri il file `index.html` nel browser

### Percorsi Specifici

#### Versioni Base (Sufficienza - 18/32)
- **Task Manager**: `./task-manager/task manager base/index.html`
- **Cronometro**: `./cronometro/cronometro base/index.html`
- **Meteo App**: `./meteo-app/meteo app base/index.html`

#### Versioni Avanzate (Punteggio Massimo - 32/32)
- **Task Manager**: `./task-manager/task manager avanzato/index.html`
- **Cronometro**: `./cronometro/cronometro avanzato/index.html`
- **Meteo App**: `./meteo-app/meteo app avanzato/index.html`

---

## 📁 Struttura File per Progetto

Ogni progetto ha due versioni con questa struttura:

```
progetto-nome/
├── [progetto] base/           # Versione base (sufficienza)
│   ├── index.html             # Pagina principale
│   ├── style.css              # Fogli di stile
│   ├── script.js              # Logica JavaScript
│   └── README.md              # Documentazione specifica
└── [progetto] avanzato/       # Versione avanzata (punteggio max)
    ├── index.html             # Pagina principale
    ├── style.css              # Fogli di stile
    ├── script.js              # Logica JavaScript
    ├── README.md              # Documentazione specifica
    └── assets/                # Immagini, icone, etc.
```

---

## 🧪 Testing

Per testare i progetti, sono disponibili entrambe le versioni:

### Versioni Base (Sufficienza)
1. **Task Manager Base**: Verifica inserimento e rimozione attività
2. **Cronometro Base**: Testa funzioni Start/Stop/Reset con formato MM:SS
3. **Meteo App Base**: Controlla chiamate API con coordinate manuali

### Versioni Avanzate (Punteggio Massimo)
1. **Task Manager Avanzato**: Verifica CRUD completo, stati, filtri e ricerca
2. **Cronometro Avanzato**: Testa precisione MM:SS:MS e funzione giri
3. **Meteo App Avanzato**: Controlla geolocalizzazione automatica e icone meteocalizzazione

---

## 🐛 Troubleshooting

### Problemi Comuni

**Meteo App non funziona:**
- Verifica connessione internet
- Controlla console browser per errori API
- Assicurati che geolocalizzazione sia abilitata

**Task Manager perde dati:**
- Verifica supporto Local Storage browser
- Controlla console per errori JavaScript

**Cronometro impreciso:**
- Verifica che setTimeout() sia supportato
- Controlla performance del browser

---

## 📚 Documentazione Tecnica

### API Reference

#### Open-Meteo API
- **Base URL**: `https://api.open-meteo.com/v1/forecast`
- **Parametri richiesti**: `latitude`, `longitude`
- **Risposta**: JSON con dati meteo current

#### Weather Codes (WMO)
Codici standard meteorologici:
- `0`: Cielo sereno
- `1-3`: Prevalentemente sereno/nuvoloso
- `45-48`: Nebbia
- `51-67`: Pioggia
- `71-86`: Neve
- `95-99`: Temporali

---

## 🔄 Cronologia Versioni

### v1.0.0 - Release Iniziale
- ✅ Task Manager - funzionalità base e avanzate
- ✅ Cronometro - implementazione completa
- ✅ Meteo App - integrazione API e geolocalizzazione

---

## 👥 Contributori

- **Sviluppatore**: Mittempergher Daniel
- **Corso**: UF07:WEB
- **Anno Accademico**: 2024/2025

---