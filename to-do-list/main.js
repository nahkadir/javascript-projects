let toDoList = [];

renderToDoList();

function renderToDoList() {
  let toDoListHTML = "";

  toDoList.forEach(function (todoObject, index) {
    // destructuring
    const { name, dueDate } = todoObject;

    const html = `<div> ${name} </div> <div> ${dueDate} </div>
   <button class="delete-btn" onclick="
      toDoList.splice(${index}, ${1});
      renderToDoList();
    "> Delete </button>`;
    toDoListHTML += html;
  });

  document.querySelector(".js-todo-list").innerHTML = toDoListHTML;
}

function addToDo() {
  const inputElement = document.querySelector(".js-input");
  const name = inputElement.value;

  const dateInputElement = document.querySelector(".js-due-date-input");
  const dueDate = dateInputElement.value;

  toDoList.push({ name, dueDate });

  inputElement.value = "";

  renderToDoList();
}
