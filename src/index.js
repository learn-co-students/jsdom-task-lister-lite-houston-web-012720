document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const form = document.getElementById('create-task-form');
  const list = document.getElementById('tasks');

  const priorityChooser = document.createElement('select');
  priorityChooser.id = "priority-chooser";
  const priorities = ["low", "medium", "high"];
  for (const priority of priorities) {
    const option = document.createElement('option');
    switch (priority) {
      case "high":
        option.value = "red";
        break
      case "medium":
        option.value = "yellow";
        break
      case "low":
        option.value = "green";
        break
    }
    option.innerText = priority;
    priorityChooser.append(option);
  }
  form.append(priorityChooser);

  const dueDateInput = document.createElement('input');
  dueDateInput.type = "text";
  dueDateInput.id = "due-date-input";
  dueDateInput.placeholder = "Due date";
  form.append(dueDateInput);

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const comment = document.getElementById('new-task-description').value;
    const priority = document.getElementById('priority-chooser').value;
    const dueDate = document.getElementById('due-date-input').value;
    const newTask = document.createElement('li');
    newTask.style = `color: ${priority}`;

    const deleteButton = document.createElement('button');
    deleteButton.innerText = "X";
    newTask.innerText = `${comment}, due: ${dueDate} `;
    newTask.append(deleteButton);

    // deleteButton.addEventListener("click", (e) => {
    //   e.preventDefault();
    //   e.target.parentElement.remove();
    // }) 

    // raul malarkey
    addDeleteFunctions(deleteButton,newTask)

    list.append(newTask);
    form.reset();
  })
  
});

let addDeleteFunctions = (dBtn, nT) =>{
  dBtn.addEventListener('click', ()=>{
    console.log('we finna remove ', nT)
    nT.remove()
  })
}