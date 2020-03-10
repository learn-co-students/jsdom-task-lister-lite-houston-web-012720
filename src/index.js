document.addEventListener("DOMContentLoaded", () => {

  const text = document.querySelector("#new-task-description");
  const submit = document.querySelector("#submit-button");
  const list = document.querySelector("#tasks");
  const form = document.querySelector("#create-task-form");

  submit.addEventListener("click", () => {
    event.preventDefault();
    var new_item = document.createElement("li");
    new_item.innerHTML = text.value;

    var delete_task = document.createElement("input");
    delete_task.type = "submit";
    delete_task.value = "Delete";

    list.append(new_item);
    list.append(delete_task);

    delete_task.addEventListener("click", () => {
      event.preventDefault();
      new_item.remove();
    });

  });

});
