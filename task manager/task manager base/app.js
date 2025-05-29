// Inizializza un array vuoto per memorizzare le attività
let tasks = [];

// Variabile che tiene traccia dell'ID univoco delle attività
let taskId = 1;

// Ottiene i riferimenti agli elementi HTML del DOM
const taskInput = document.getElementById('taskInput'); 
const addBtn = document.getElementById('addBtn');       
const taskList = document.getElementById('taskList');   

// Funzione per aggiungere una nuova attività
function addTask() {
    const text = taskInput.value.trim(); 
    if (text === '') return; 

    // Aggiunge un oggetto attività all'array con ID univoco
    tasks.push({
        id: taskId++,       
        text: text,         
        completed: false    
    });

    taskInput.value = '';   
    renderTasks();          
}

// Funzione per completare o annullare un'attività
function completeTask(id) {
    const task = tasks.find(t => t.id === id); 
    if (task) {
        task.completed = !task.completed;      
        renderTasks();                         
    }
}

// Funzione per eliminare un'attività
function deleteTask(id) {
    tasks = tasks.filter(t => t.id !== id); 
    renderTasks();                          
}

// Funzione per mostrare le attività nel DOM
function renderTasks() {
    if (tasks.length === 0) {
        // Se non ci sono attività, mostra un messaggio
        taskList.innerHTML = '<div class="empty-message">Nessuna attività. Aggiungi la prima!</div>';
        return;
    }

    // Genera e inserisce l’HTML per ciascuna attività
    taskList.innerHTML = tasks.map(task => `
        <div class="task ${task.completed ? 'completed' : ''}">
            <div class="task-text">${task.text}</div>
            <div class="task-buttons">
                <button class="complete-btn" onclick="completeTask(${task.id})">
                    ${task.completed ? 'Annulla' : 'Fatto'}
                </button>
                <button class="delete-btn" onclick="deleteTask(${task.id})">
                    Elimina
                </button>
            </div>
        </div>
    `).join('');
}

// Collega il pulsante "Aggiungi" alla funzione addTask()
addBtn.onclick = addTask;

// Permette di aggiungere una attività premendo "Invio" nel campo input
taskInput.onkeypress = function(e) {
    if (e.key === 'Enter') addTask();
};