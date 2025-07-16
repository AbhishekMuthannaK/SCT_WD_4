function addTask() {
    const taskInput = document.getElementById("taskInput");
    const taskDate = document.getElementById("taskDate");
    const taskList = document.getElementById("taskList");

    const taskText = taskInput.value;
    const taskDatetime = taskDate.value;

    if (!taskText) {
        alert("Please enter a task.");
        return;
    }

    const li = document.createElement("li");
    li.textContent = `${taskText} (due: ${new Date(taskDatetime).toLocaleString()})`;
    li.style.opacity = '0';
    setTimeout(() => {
        li.style.opacity = '';
    }, 10);
    
    const completeButton = document.createElement("button");
    completeButton.textContent = "Complete";
    completeButton.onclick = function () {
        li.classList.toggle("completed");
        li.style.transition = 'transform 0.2s';
        li.style.transform = 'scale(1.04)';
        setTimeout(() => {
            li.style.transform = '';
        }, 200);
    };

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.onclick = function () {
        li.style.transition = 'opacity 0.4s, height 0.4s, margin 0.4s, padding 0.4s';
        li.style.opacity = '0';
        li.style.height = '0px';
        li.style.margin = '0px';
        li.style.padding = '0px';
        setTimeout(() => {
            if (li.parentNode) {
                taskList.removeChild(li);
            }
        }, 400);
    };

    li.appendChild(completeButton);
    li.appendChild(deleteButton);
    taskList.appendChild(li);

    taskInput.value = "";
    taskDate.value = "";
}
