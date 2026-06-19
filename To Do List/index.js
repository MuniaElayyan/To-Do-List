function addTask() {
    let input = document.getElementById("taskInput");
    let taskText = input.value;
    if (taskText === "") return;
    let li = document.createElement("li");
    let checkbox = document.createElement("input");
    checkbox.type = "checkbox"; 
    let span = document.createElement("span");
    span.textContent = taskText;
    let btn = document.createElement("button");
    btn.textContent = "X";
    btn.classList.add("delete");
    btn.onclick = function () {
    li.remove();};
    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(btn);
    document.getElementById("taskList").appendChild(li);
    input.value = "";}
