// event elements

const form = document.querySelector("form");
const taskInput = document.querySelector("#task");
const list = document.querySelector("ul");
const clearTasks = document.getElementById("clear-tasks");

form.addEventListener("submit", addTask);
list.addEventListener("click",removeTask); 
clearTasks.addEventListener("click", removeAllTasks);

document.addEventListener("DOMContentLoaded", getTasksFromLS);


function getTasksFromLS() {
  tasks = localStorage.getItem('tasks') || []

  if (tasks) {
    tasks = JSON.parse(tasks)
  }
};

function addTask(e) {
    const li = document.createElement("li");
    const link = document.createElement("a");
    const ul = document.querySelector("ul");

    li.className = "collection-item";
    li.appendChild(document.createTextNode(taskInput.value));
    
    link.className = "secondary-content";
    link.appendChild(document.createTextNode("X"));
    
    link.setAttribute("href", "#");
    li.appendChild(link);
    // lisab submissioni
    
    ul.appendChild(li);

    addTaskToLS(taskInput.value);

    taskInput.value = "";
    e.preventDefault();

    


};



function removeTask(e) {
    if(e.target.textContent == "X"){
        if(confirm("Do you want to delete this task?")) {
            e.target.parentElement.remove();
            removeTaskFromLS(e.target.parentElement.firstChild.textContent);
        }
    }
};

function removeAllTasks(e) {
    console.log("Remove")
    const list = document.getElementById("taskList")
    if(confirm("Do you want to delete all tasks?")) {
        e.target.parentElement.remove();
        clearTasksFromLS();
        console.log(e.target.parentElement)
    }
    
};

function addTaskToLS(task) {
    let tasks;
    if(localStorage.getItem("tasks") === null) {
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem("tasks"));
    }
    tasks.push(task);
    localStorage.setItem("tasks", JSON.stringify(tasks))
    console.log(tasks);
};

function removeTaskFromLS(task) {
    let tasks;
    if(localStorage.getItem("tasks") === null) {
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem("tasks"));
    }
    tasks.forEach(function(tasksElement, tasksIndex) {
        if(tasksElement === task) {
            tasks.splice(tasksIndex, 1);
        }
    });
    localStorage.setItem("tasks", JSON.stringify(tasks))
};

function clearTasksFromLS(task) {
    let tasks;
    if(localStorage.getItem("tasks") === null) {
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem("tasks"));
    }
    localStorage.removeItem("tasks", JSON.stringify(tasks))
};

function getTasksFromLS(e) {
    let tasks;
    if(localStorage.getItem("tasks") === null) {
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem("tasks"));
    }
    tasks.forEach(function(tasksElement, tasksIndex) {
        const li = document.createElement("li");
        const link = document.createElement("a");
        const ul = document.querySelector("ul");

        li.className = "collection-item";
        li.appendChild(document.createTextNode(tasksElement));
        
        link.className = "secondary-content";
        link.appendChild(document.createTextNode("X"));
        
        link.setAttribute("href", "#");
        li.appendChild(link);        
        ul.appendChild(li);
    });
    localStorage.setItem("tasks", JSON.stringify(tasks))
};
