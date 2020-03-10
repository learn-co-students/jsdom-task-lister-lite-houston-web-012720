document.addEventListener("DOMContentLoaded", () => {
  let form = document.querySelector('#create-task-form');
  let theListener = form.addEventListener('submit', function() {
    event.preventDefault()
    let myToDos = document.querySelector('div #tasks')
    let newToDo = document.createElement('li')
    newToDo.innerHTML = event.target[0].value
    event.target.reset()
    myToDos.appendChild(newToDo)
  })
});
