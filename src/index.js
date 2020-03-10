document.addEventListener("DOMContentLoaded", () => {
  // your code here
  let form = document.querySelector("#create-task-form")
  form.addEventListener("submit", (e)=> {
    e.preventDefault()
    let ul = document.querySelector("#tasks")
    let description = e.target.querySelector("#new-task-description").value 
    let li_div = document.createElement("div")
    li_div.style.display = "inline-block"
    let button_div = document.createElement("div")
    button_div.style.display = "inline-block"
    let channge_color_div = document.createElement("div")
    channge_color_div.style.display = "inline-block"
    let edit_div = document.createElement("div")
    edit_div.style.display = "inline-block"
    button_div.style.marginLeft = "5px"
    let main_div = document.createElement("div")
    let new_li = document.createElement("li")
    let delete_btn = document.createElement("button")
    let change_color_btn = document.createElement("button")
    let edit_btn = document.createElement("button")
    edit_btn.innerText = "Edit"
    let input = document.createElement("input")
    input.type = "text"
    input.value = description
    let submit = document.createElement("button")
    submit.innerText = "Submit"
    change_color_btn.innerText = "Change Color"
    delete_btn.innerText = "Delete"
    delete_btn.addEventListener("click", ()=> {
      main_div.remove()
    })
    let select = document.createElement("select")
    let colors = ["red","yellow","green"]
    for(let i in colors){
      let option = document.createElement("option")
      option.value = colors[i] 
      option.innerText = colors[i] 
      select.append(option)
    }
    change_color_btn.addEventListener("click", ()=>{
      let  color = select.value 
      new_li.style.color = color
    })
    edit_btn.addEventListener("click", ()=> {
      edit_div.append(input)
      edit_div.append(submit)
    })
    submit.addEventListener("click", ()=> {
      new_li.textContent = input.value 
      edit_div.removeChild(input)
      edit_div.removeChild(submit)
    })
    new_li.innerText = description
    li_div.append(new_li)
    button_div.append(delete_btn)
    channge_color_div.append(change_color_btn)
    edit_div.append(edit_btn)
    main_div.append(li_div)
    main_div.append(button_div)
    main_div.append(select)
    main_div.append(channge_color_div)
    main_div.append(edit_div)
    ul.append(main_div)
  })
});
