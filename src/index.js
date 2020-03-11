document.addEventListener("DOMContentLoaded", () => {
  let form = document.getElementById('create-task-form')

  form.addEventListener('submit', function(event){
    event.preventDefault()
    console.log('test')

    let input = document.getElementById('new-task-description').value 
    let priority = document.getElementById('new-task-priority').value
    
    
    let ul = document.getElementById('tasks')
    let li = document.createElement('li')
    
    if (priority === "medium") {
      li.style.color = 'red'
      } 
    if (priority === 'high') {
      li.style.color = 'blue'
      }
    if (priority === 'low'){
      li.style.color = 'green'
      }
    
    li.innerText = input 
    // li.id = input 

    ul.append(li)


    let bttn = document.createElement('button')
    bttn.innerText = 'Delete'
    li.append(bttn) 

    bttn.addEventListener('click', function (e) {
      // let task = document.querySelector(`li#${input}`)
     li.remove()
    })
    





  })
});
