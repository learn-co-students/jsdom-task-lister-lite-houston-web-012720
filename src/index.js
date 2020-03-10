// document.addEventListener("DOMContentLoaded", () => {
  // your code here
// }); // used defer in the script reference in HTML file


const form = document.querySelector("form")
const ulTask = document.querySelector("ul#tasks")
let taskId = 0 

    form.addEventListener("submit", function(e) {
    e.preventDefault()
  // let task = document.getElementById("new-task-description").value
    
    let li = document.createElement("li")
    li.id = taskId
    li.innerText = e.target.querySelector("input#new-task-description").value

    ulTask.append(li)
    e.target.reset()

    let button = document.createElement("button")
    button.innerText = "Remove Task"
    li.append(button)

    button.addEventListener("click", function() {
      // let target = e.target
      // let parent = target.parentElement;
      // debugger
      // document.querySelector(`li#${taskId}`).remove()
      li.remove()
      
      // find the li with corresponding id 
      // refer to line 15 
      // remember you can interpolate 
  });

  taskId++;

});
// querySelector(`li#${taskId}`).remove();     
//     
