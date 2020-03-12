document.addEventListener("DOMContentLoaded", () => {

  const form = document.querySelector("form")
  const list = document.querySelector("ul#tasks")

// // ADD THE PRIOROTY SELECTION
//   let priority = document.createElement("select")
//   priority.id = "priority"
//   let opt1 = document.createElement("option")
//   opt1.innerText = "high"
//   opt1.value = "red"
//   let opt2 = document.createElement("option")
//   opt2.innerText = "medium"
//   opt2.value = "#ffdb58"
//   let opt3 = document.createElement("option")
//   opt3.innerText = "low"
//   opt3.value = "green"
//   priority.append(opt1, opt2, opt3)
//   form.append(priority)

//   // just add the select to the html 


// LIST ITEMS 

//   form.addEventListener("submit", function(event){
//     event.preventDefault() 

//     let newTaskVal = document.querySelector("input#new-task-description").value
//     let newTaskPriority = document.querySelector("#priority").value

//     let newTask = document.createElement("li")
//     newTask.innerText = newTaskVal 
//     newTask.style.color = form[2].value

//     let deleteBtn = document.createElement("button")
//     deleteBtn.innerText = "delete"
//     deleteBtn.addEventListener("click", function(event){
//       newTask.remove()
//     })

//     newTask.append(deleteBtn)
//     list.append(newTask)
//     form.reset()
//   })
// });


// TABLE ITEMS 

const table=document.querySelector("table")

form.addEventListener("submit", function(event){
  event.preventDefault() 

  // VALUES
  let newTaskVal = document.querySelector("input#new-task-description").value
  let newTaskPriority = document.querySelector("#priority").value
  let newTaskOwner = document.querySelector("#owner").value
  let newDueDate = document.querySelector("#due").value

  // HTML TAGS
  let newTask = document.createElement("tr")
  newTask.style.color = newTaskPriority
  let desc = document.createElement("td")
  desc.innerText = newTaskVal
  let owner = document.createElement("td")
  owner.innerText = newTaskOwner
  let due  = document.createElement("td")
  due.innerText  = newDueDate

  // DELETE BUTTON
  let deleteBtn = document.createElement("button")
  deleteBtn.innerText = "delete"
  deleteBtn.addEventListener("click", function(event){
    newTask.remove()
  })

  // EDIT BUTTON 



  // ATTACH
  table.append(newTask)
  newTask.append(owner)
  newTask.append(desc)
  newTask.append(due)
  newTask.append(deleteBtn)
  form.reset()
})
});

