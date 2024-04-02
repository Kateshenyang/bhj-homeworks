document.addEventListener('DOMContentLoaded', function() {
    const addTaskButton = document.getElementById('tasks__add');
    const tasksList = document.getElementById('tasks__list');
    const taskInput = document.getElementById('task__input');

    function addTask() {
        const taskText = taskInput.value.trim();
        if (taskText !== '') {
            const taskElement = document.createElement('div');
            taskElement.className = 'task';
            taskElement.innerHTML = `
                <div class="task__title">${taskText}</div>
                <a href="#" class="task__remove">&times;</a>
            `;
            taskElement.querySelector('.task__remove').addEventListener('click', function(event) {
                event.preventDefault();
                taskElement.remove();
            });

            tasksList.appendChild(taskElement);
            taskInput.value = '';
        }
    }

    addTaskButton.addEventListener('click', function(event) {
        event.preventDefault();
        addTask();
    });

    taskInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            event.preventDefault();
            addTask();
        }
    });
});