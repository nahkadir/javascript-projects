let toDoList = [];

renderToDoList();

function renderToDoList() {
  let toDoListHTML = "";

  for (let i = 0; i < toDoList.length; i++) {
    const todoObject = toDoList[i];
    // destructuring
    const { name, dueDate } = todoObject;

    const html = `<div> ${name} </div> <div> ${dueDate} </div>
   <button class="delete-btn" onclick="
      toDoList.splice(${i}, ${1});
      renderToDoList();
    "> Delete </button>`;
    toDoListHTML += html;
  }

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
