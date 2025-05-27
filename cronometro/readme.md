# ⏱️ Cronometro Digitale

Un'applicazione web per cronometrare il tempo con interfaccia moderna e funzionalità avanzate.

## 📋 Caratteristiche

### Versione Base
- **Interfaccia semplice** con pulsanti Start, Stop e Reset
- **Display del tempo** in formato MM:SS
- **Design responsive** e moderno
- **Controlli intuitivi** per l'utilizzo

### Versione Avanzata
- **Funzione Giro** per salvare tempi intermedi
- **Display del tempo** in formato MM:SS:MS (millisecondi)
- **Lista dinamica** dei giri salvati
- **Controlli da tastiera** per un utilizzo rapido
- **Animazioni** e effetti visivi
- **Interfaccia glassmorphism** con effetti di sfocatura

## 🚀 Funzionalità

### Controlli Base
- **Start**: Avvia il cronometro
- **Stop**: Ferma il cronometro mantenendo il tempo
- **Reset**: Azzera il cronometro e cancella tutti i giri

### Controlli Avanzati
- **Giro**: Salva il tempo attuale nella lista (solo quando il cronometro è in funzione)
- **Lista Giri**: Visualizza tutti i tempi salvati con tempo parziale e totale

### Scorciatoie da Tastiera
- **Spazio**: Start/Stop del cronometro
- **Ctrl + R**: Reset del cronometro
- **Ctrl + L**: Salva giro (solo se il cronometro è attivo)

## 🛠️ Struttura del Progetto

```
cronometro______/
├── index.html          # Struttura HTML principale
├── style.css           # Stili e animazioni
├── app.js              # Logica JavaScript
└── README.md           # Documentazione
```

## 💻 Tecnologie Utilizzate

- **HTML5**: Struttura semantica dell'applicazione
- **CSS3**: Styling avanzato con gradients, backdrop-filter e animazioni
- **JavaScript (ES6+)**: Logica dell'applicazione e gestione eventi
- **Responsive Design**: Compatibile con dispositivi mobile e desktop

## 🎨 Design Features

- **Glassmorphism**: Effetto vetro con backdrop-filter
- **Gradients**: Sfondi sfumati moderni
- **Animazioni**: Transizioni fluide e effetti hover
- **Typography**: Font monospace per il display del tempo
- **Color Coding**: Colori intuitivi per ogni azione (verde=start, rosso=stop, etc.)

## 📱 Responsività

L'applicazione è completamente responsive e si adatta a:
- **Desktop**: Layout orizzontale ottimizzato
- **Tablet**: Adattamento automatico dei controlli
- **Mobile**: Layout verticale con pulsanti ottimizzati per touch

## 🔧 Implementazione Tecnica

### Gestione del Tempo
- Utilizzo di `Date.now()` per precisione al millisecondo
- `setInterval()` per aggiornamenti in tempo reale (ogni 10ms)
- Calcolo accurato del tempo trascorso anche dopo pause

### Gestione dello Stato
- Variabili globali per tracking dello stato del cronometro
- Gestione corretta dei pulsanti abilitati/disabilitati
- Sincronizzazione tra display e logica interna

### Funzionalità Giri
- Array per memorizzazione dei tempi
- Calcolo automatico dei tempi parziali
- Visualizzazione dinamica con animazioni

## 🎯 Utilizzo

1. **Avvio**: Clicca "Start" o premi Spazio per iniziare
2. **Pausa**: Clicca "Stop" o premi Spazio per fermare
3. **Reset**: Clicca "Reset" o premi Ctrl+R per azzerare
4. **Giri**: Clicca "Giro" o premi Ctrl+L per salvare il tempo attuale

## 📊 Formati Tempo

- **Base**: MM:SS (es. 01:30)
- **Avanzato**: MM:SS:MS (es. 01:30:45)
- **Lista Giri**: Mostra sia tempo parziale che totale

## 🎪 Caratteristiche Avanzate

### Animazioni
- Pulsazione del display durante il funzionamento
- Effetti hover sui pulsanti
- Animazioni fade-in per i nuovi giri
- Transizioni fluide su tutti gli elementi

### UX/UI
- Feedback visivo per ogni azione
- Stati disabilitati chiari
- Tooltip informativi
- Scrollbar personalizzata per la lista giri

### Accessibilità
- Supporto completo da tastiera
- Contrasti appropriati
- Struttura semantica HTML
- Responsive design

## 🌟 Versioni Disponibili

Il progetto include due versioni:
- **Versione Base** (`index.html` semplificato): Funzionalità essenziali
- **Versione Avanzata** (`index.html` completo): Tutte le funzionalità

## 📝 Note Sviluppo

- Implementazione basata su `setInterval()` come richiesto
- Codice modulare e ben commentato
- Gestione errori e casi edge
- Performance ottimizzate per aggiornamenti frequenti

---

**Sviluppato per il corso UF07:WEB** - Progetto Cronometro Digitale