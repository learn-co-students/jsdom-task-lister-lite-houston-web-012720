document.addEventListener("DOMContentLoaded", () => {
  let taskForm = document.querySelector('#create-task-form');
  taskForm.addEventListener("submit", ()=>{
    event.preventDefault();
    const input = document.querySelector('#new-task-description');
    input.value
    let ul = document.querySelector('ul#tasks')
    let li = document.createElement('li')
 
    li.innerText = input.value
    let button = document.createElement('button')
    button.innerHTML = "delete";
    li.setAttribute("id",input.value)
    li.append(button);
    ul.append(li);

    button.addEventListener("click", ()=> { 
    deleteTask();

  });
    
  });
  const deleteTask = () => {
    const input = document.querySelector('#new-task-description');
    const inputVal = input.value
    let li = document.querySelector(`li#${inputVal}`);
   
    li.remove();
  }
});
