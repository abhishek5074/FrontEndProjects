document.getElementById("add-button").addEventListener("click",handleInput);

function handleInput(){
    const taskText = document.getElementById("task-input");
    const task = document.createElement("li");
    task.innerHTML = taskText.value;
    if(taskText.value !== '')
    {const element = document.getElementById("task-list");
    element.appendChild(task);}
}