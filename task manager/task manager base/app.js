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
            completed: false
        });

        taskInput.value = '';
        renderTasks();
}

function completeTask(id) {
        const task = tasks.find(t => t.id === id);
            if (task) {
                task.completed = !task.completed;
                renderTasks();
            }
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

addBtn.onclick = addTask;
taskInput.onkeypress = function(e) {
    if (e.key === 'Enter') addTask();
};
