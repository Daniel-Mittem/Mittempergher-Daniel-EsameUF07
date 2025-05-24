let tasks = [];
let taskId = 1;

const taskInput = document.getElementById('taskInput');
const addBtn = document.getElementById('addBtn');
const taskList = document.getElementById('taskList');
       
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

function deleteTask(id) {
        tasks = tasks.filter(t => t.id !== id);
        renderTasks();
}

function renderTasks() {
        if (tasks.length === 0) {
            taskList.innerHTML = '<div class="empty-message">Nessuna attività. Aggiungi la prima!</div>';
            return;
        }

        const statusNames = {
            'todo': 'Da fare',
            'in-progress': 'In corso',
            'completed': 'Completata'
        };

        taskList.innerHTML = tasks.map(task => `
            <div class="task ${task.status}">
                <div class="task-text">${task.text}</div>
                <div class="task-status">${statusNames[task.status]}</div>
                <button onclick="changeStatus(${task.id})">Cambia Stato</button>
             <button onclick="deleteTask(${task.id})">Elimina</button>
            </div>
        `).join('');
}

addBtn.onclick = addTask;
taskInput.onkeypress = function(e) {
    if (e.key === 'Enter') addTask();
};