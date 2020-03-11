document.addEventListener("DOMContentLoaded", () => {
  let taskForm = document.querySelector('#create-task-form');

  let select = document.createElement('select');
  select.id = "priority"
  let option = document.createElement('option');
  let option2 = document.createElement('option');
  let option3 = document.createElement('option');

  option.value = "red"
  option.innerText = "high"
  // option.id = "red"
  option2.value = "yellow"
  option2.innerText = "medium"
  // option2.id = "yellow"
  option3.value = "green"
  option3.innerText = "low"
  // option3.id = "green"


  select.append(option);
  select.append(option2);
  select.append(option3);

  taskForm.append(select);

  taskForm.addEventListener("submit", ()=>{
    event.preventDefault();
    const input = document.querySelector('#new-task-description');
    input.value
    const priority = document.querySelector('#priority')
    let ul = document.querySelector('ul#tasks');
    let li = document.createElement('li');
    li.innerText = input.value;
    // debugger
    li.style.color = priority.value;
    let button = document.createElement('button');
    button.innerHTML = "delete";
    li.setAttribute("id",input.value);
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
