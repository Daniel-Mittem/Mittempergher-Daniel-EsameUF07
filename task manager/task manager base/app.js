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