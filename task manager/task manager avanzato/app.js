// Inizializzazione delle variabili principali
let tasks = [];
let taskId = 1;
let editingTaskId = null;
let searchTerm = '';
let currentFilter = 'all';

// Collegamento agli elementi del DOM
const taskInput = document.getElementById('taskInput');
const addBtn = document.getElementById('addBtn');
const taskList = document.getElementById('taskList');
const searchInput = document.getElementById('searchInput');
const filterBtns = document.querySelectorAll('.filter-btn');

// Aggiunge una nuova attività
function addTask() {
    const text = taskInput.value.trim();

    if (text === '') return;

    tasks.push({
        id: taskId++,
        text: text,
        completed: "todo"
    });

    taskInput.value = '';
    renderTasks();
}

// Cambia lo stato di una attività (todo → in-progress → completed → todo)
function changeStatus(id) {
    const task = tasks.find(t => t.id === id);
    if (!task) return;

    if (task.status === 'todo') {
        task.status = 'in-progress';
    } else if (task.status === 'in-progress') {
        task.status = 'completed';
    } else {
        task.status = 'todo';
    }

    renderTasks();
}

// Elimina un'attività
function deleteTask(id) {
    tasks = tasks.filter(t => t.id !== id);
    renderTasks();
}

// Filtra le attività in base al filtro attivo e al termine di ricerca
function filterTasks() {
    let filtered = tasks;

    if (currentFilter !== 'all') {
        filtered = filtered.filter(task => task.status === currentFilter);
    }

    if (searchTerm) {
        filtered = filtered.filter(task =>
            task.text.toLowerCase().includes(searchTerm.toLowerCase())
        );
    }

    return filtered;
}

// Imposta un'attività in modalità modifica
function editTask(id) {
    editingTaskId = id;
    renderTasks();
}

// Salva le modifiche fatte al testo di un'attività
function saveEdit(id, newText) {
    const task = tasks.find(t => t.id === id);
    if (task && newText.trim() !== '') {
        task.text = newText.trim();
    }
    editingTaskId = null;
    renderTasks();
}

// Annulla la modifica in corso
function cancelEdit() {
    editingTaskId = null;
    renderTasks();
}

// Renderizza tutte le attività filtrate nel DOM
function renderTasks() {
    const filtered = filterTasks();

    if (filtered.length === 0) {
        taskList.innerHTML = '<div class="empty-message">Nessuna attività. Aggiungi la prima!</div>';
        return;
    }

    const statusNames = {
        'todo': 'Da fare',
        'in-progress': 'In corso',
        'completed': 'Completata'
    };

    // Genera l'HTML per ogni attività
    taskList.innerHTML = filtered.map(task => {
        const isEditing = editingTaskId === task.id;

        // Modalità modifica
        if (isEditing) {
            return `
                <div class="task ${task.status}">
                    <input type="text" class="edit-input" value="${task.text}" id="editInput${task.id}">
                    <div class="task-actions">
                        <button class="task-btn save-btn" onclick="saveEdit(${task.id}, document.getElementById('editInput${task.id}').value)">Salva</button>
                        <button class="task-btn cancel-btn" onclick="cancelEdit()">Annulla</button>
                    </div>
                </div>
            `;
        }

        // Modalità normale
        return `
            <div class="task ${task.status}">
                <div class="task-content">
                    <div class="task-text">${task.text}</div>
                    <span class="task-status status-${task.status}">${statusNames[task.status]}</span>
                </div>
                <div class="task-actions">
                    <button class="task-btn edit-btn" onclick="editTask(${task.id})">Modifica</button>
                    <button class="task-btn status-btn" onclick="changeStatus(${task.id})">Cambia Stato</button>
                    <button class="task-btn delete-btn" onclick="deleteTask(${task.id})">Elimina</button>
                </div>
            </div>
        `;
    }).join('');
}

// Eventi collegati ai pulsanti e agli input

// Aggiunta attività col click del bottone
addBtn.onclick = addTask;

// Aggiunta attività premendo INVIO nel campo di input
taskInput.onkeypress = function(e) {
    if (e.key === 'Enter') addTask();
};

// Aggiornamento del termine di ricerca mentre si digita
searchInput.oninput = function(e) {
    searchTerm = e.target.value;
    renderTasks();
};

// Gestione dei pulsanti filtro (tutti, da fare, in corso, completati)
filterBtns.forEach(btn => {
    btn.onclick = function () {
        filterBtns.forEach(b => b.classList.remove('active'));
        this.classList.add('active');
        currentFilter = this.dataset.filter;
        renderTasks();
    };
});