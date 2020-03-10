document.addEventListener("DOMContentLoaded", () => {
    // your code here
    let form = document.getElementById("create-task-form")
    let dd = document.createElement('select')
    let option1 = document.createElement('option')
    let option2 = document.createElement('option')
    let option3 = document.createElement('option')
    let div = document.getElementById('main-content')
    let newinput1 = document.createElement('input')
    let newinput2 = document.createElement('input')

    form.appendChild(newinput1)
    form.appendChild(newinput2)

    newinput1.placeholder = "due date"
    newinput2.placeholder = "User"




    let sort = document.createElement('button')
    sort.innerText = "sort"
    div.appendChild(sort)

    sort.addEventListener('click', function() {
        let lis = Array.from(document.querySelectorAll('li'))

        lis.sort(function(a, b) {
            return a.style.color.length - b.style.color.length
        })

        for (let item of lis) {
            let ul = document.getElementById("tasks")
            ul.appendChild(item)
        }

    })


    option1.innerHTML = "High"
    option2.innerHTML = "Medium"
    option3.innerHTML = "Low"


    dd.appendChild(option1)
    dd.appendChild(option2)
    dd.appendChild(option3)

    form.appendChild(dd)

    form.addEventListener("submit", function(event) {
        event.preventDefault()
        let newtask = event.target[0]
            // let newtask = event.target.getElementById("new-task-description")
        let newtaskvalue = newtask.value

        let li = document.createElement('li')
        li.innerText = newtaskvalue
        if (dd.value == "High") { li.style.color = 'red' }
        if (dd.value == "Low") { li.style.color = 'green' }
        if (dd.value == "Medium") { li.style.color = 'yellow' }
        let ul = document.getElementById("tasks")
        ul.appendChild(li)


        deletebtn = document.createElement('button')
        deletebtn.innerText = "x"
        li.appendChild(deletebtn)

        deletebtn.addEventListener('click', function(event) {
            li.remove()
        })
    })


});