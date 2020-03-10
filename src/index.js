document.addEventListener("DOMContentLoaded", () => {
  let taskForm = document.querySelector("form#create-task-form")
  let taskList = document.querySelector("table#tasks")
  taskForm.addEventListener("submit", (e) => {
    e.preventDefault()
    let taskField = document.getElementById("new-task-description")
    let newTask = document.createElement("tr")
    let column = document.createElement("td")
    column.innerText = taskField.value
    newTask.append(column)
    column = document.createElement("td")
    column.innerText = (new Date()).toLocaleString()
    newTask.append(column)
    column = document.createElement("td")
    column.innerText = "new Date()"
    newTask.append(column)
    newTask.setAttribute('data-timestamp', Date.now())
    newTask.id = "taskItem"
    taskList.append(newTask)
    sortTasks()
  })
});
 

function sortTasks() {
  let tasks = Array.from(document.querySelectorAll("li#taskItem"))
  tasks.sort(function(a,b) {
    return b.getAttribute('data-timestamp') - a.getAttribute('data-timestamp')
  })
  let taskList = document.querySelector("ul#tasks")
  for (const task of tasks){
    debugger
    taskList.append(task)
  }
}