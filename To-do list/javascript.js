let Tasks = ["Do laundry", "Make bed"];
function showTasks() {
    
    let taskListUl = document.getElementById("TaskList");
    taskListUl.innerHTML = "";

    for (let i = 0; i < Tasks.length; i++) {
        let li = document.createElement("li");
        li.innerText = Tasks[i];
        taskListUl.appendChild(li);
    }
}

function addTask(){
    let task = prompt("Enter your task: ");
    Tasks.push(task);
     showTasks();
}

function clearTask(){
    Tasks = [];
    showTasks();
   
}

//function addTask(){
//    let task = prompt("Enter your task: ");
//    for (i=0; i<tasks.length, i++)
//    tasks.splice(i, 1, "");
//     showTasks();
//}
