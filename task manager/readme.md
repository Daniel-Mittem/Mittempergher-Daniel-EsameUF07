# 📝 Task Manager

Un'applicazione web moderna e intuitiva per la gestione delle attività quotidiane, sviluppata con HTML, CSS e JavaScript vanilla.

## 🚀 Caratteristiche

### Funzionalità Base
- ✅ **Aggiunta attività**: Inserisci nuove attività nella tua lista
- ❌ **Rimozione attività**: Elimina le attività completate o non più necessarie
- 🎨 **Interfaccia moderna**: Design glassmorphism con effetti blur e gradienti

### Funzionalità Avanzate
- ✏️ **Modifica attività**: Modifica il nome delle attività esistenti con un click
- 🔄 **Gestione stati**: Tre stati per ogni attività:
  - 🔵 **Da fare** - Attività appena create
  - 🟡 **In corso** - Attività in fase di svolgimento
  - 🟢 **Completata** - Attività terminate
- 🔍 **Ricerca**: Trova rapidamente le attività tramite il campo di ricerca
- 🏷️ **Filtri**: Visualizza solo le attività del tipo desiderato
- 📱 **Responsive**: Ottimizzata per dispositivi mobili e desktop

## 🛠️ Tecnologie Utilizzate

- **HTML5**: Struttura semantica dell'applicazione
- **CSS3**: Styling moderno con glassmorphism, backdrop-filter e transizioni fluide
- **JavaScript ES6+**: Logica dell'applicazione con gestione dello stato dinamico

## 📁 Struttura del Progetto

```
task-manager_____/
├── index.html          # Struttura HTML principale
├── style.css           # Stili CSS con design glassmorphism
├── app.js              # Logica JavaScript dell'applicazione
└── README.md           # Documentazione del progetto
```

### Gestione delle Attività

#### Aggiungere una nuova attività
1. Scrivi il nome dell'attività nel campo di input
2. Clicca "Aggiungi" o premi Enter
3. L'attività verrà aggiunta con stato "Da fare"

#### Modificare un'attività
1. Clicca il pulsante "Modifica" sull'attività desiderata
2. Modifica il testo nel campo di input che appare
3. Clicca "Salva" per confermare o "Annulla" per annullare

#### Cambiare lo stato di un'attività
1. Clicca "Cambia Stato" sull'attività
2. Lo stato cambierà ciclicamente: Da fare → In corso → Completata → Da fare

#### Cercare attività
1. Utilizza il campo di ricerca in alto
2. Digita parte del nome dell'attività
3. La lista si filtrerà automaticamente

#### Filtrare per stato
1. Utilizza i pulsanti filtro: "Tutte", "Da fare", "In corso", "Completate"
2. La lista mostrerà solo le attività del tipo selezionato

## 🎨 Design e UI/UX

L'interfaccia utilizza un design moderno **glassmorphism** caratterizzato da:
- **Sfondo gradiente**: Colori blu-viola per un aspetto professionale
- **Effetti blur**: Backdrop-filter per elementi semi-trasparenti
- **Animazioni fluide**: Transizioni CSS per hover e interazioni
- **Indicatori visivi**: Bordi colorati per differenziare gli stati delle attività
- **Responsive design**: Adattabile a diverse dimensioni schermo

### Palette Colori
- 🔵 **Da fare**: Blu (#45b7d1)
- 🟡 **In corso**: Giallo (#ffc107)
- 🟢 **Completata**: Verde (#28a745)

## 💡 Possibili Miglioramenti Futuri

- 📅 **Date e scadenze**: Aggiungere date di creazione e scadenza
- 🏷️ **Categorie**: Organizzare le attività per categorie
- 💾 **Persistenza dati**: Salvare i dati nel localStorage del browser
- 📊 **Statistiche**: Dashboard con statistiche sulle attività completate
- 🔔 **Notifiche**: Promemoria per attività in scadenza
- 🌙 **Tema scuro/chiaro**: Possibilità di cambiare tema
- 📱 **PWA**: Trasformare in Progressive Web App
- 🔄 **Drag & Drop**: Riordinare le attività trascinandole

## 📋 Requisiti Tecnici

- Browser moderno con supporto per:
  - CSS Grid e Flexbox
  - ES6+ JavaScript
  - CSS backdrop-filter
  - CSS custom properties (variabili)

## 👨‍💻 Sviluppo

Il progetto è stato sviluppato seguendo le best practices:
- **Codice pulito**: Funzioni modulari e ben documentate
- **Separazione delle responsabilità**: HTML per struttura, CSS per stile, JS per logica
- **Accessibilità**: Uso di elementi semantici e contrasti adeguati
- **Performance**: Codice ottimizzato senza dipendenze esterne


**Sviluppato per il corso UF07:WEB** - Progetto Task Manager