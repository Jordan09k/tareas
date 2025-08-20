let tasks = [];

function addTask() {
    const taskInput = document.getElementById("taskInput").value;
    const errorDiv = document.getElementById("Error");

    try {
        if (!taskInput.trim()) {
            throw new Error("Por favor ingrese una tarea válida");
        }

        const task = {
            text: taskInput,
            completed: false
        };

        tasks.push(task);
        displayTask();
        document.getElementById("taskInput").value = '';  // Limpiar el input
        errorDiv.innerHTML = ''; // Limpiar los mensajes de error
    } catch (error) {
        errorDiv.innerHTML = error.message;
    }
}

function displayTask() {
    const taskList = document.getElementById("taskList");
    taskList.innerHTML = '';  // Limpiar la lista antes de mostrar las tareas

    for (let i = 0; i < tasks.length; i++) {
        const li = document.createElement("li");
        li.textContent = tasks[i].text;

        if (tasks[i].completed) {
            li.style.textDecoration = "line-through";
        }

        const markBtn = document.createElement("button");
        markBtn.textContent = tasks[i].completed ? "Desmarcar" : "Marcar como realizada";
        markBtn.className = "mark-completed";
        markBtn.onclick = function () {
            tasks[i].completed = !tasks[i].completed;
            displayTask();  // Actualizar la lista
        };

        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Eliminar";
        deleteBtn.onclick = function () {
            tasks.splice(i, 1);  // Eliminar tarea
            displayTask();  // Actualizar la lista
        };

        li.appendChild(markBtn);
        li.appendChild(deleteBtn);
        taskList.appendChild(li);
    }
}
