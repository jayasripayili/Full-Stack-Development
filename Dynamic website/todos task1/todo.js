let todoItemsContainerEl = document.getElementById("todoItemsContainer");

let todoList = [
    {
        text: "Learn HTML"
    },
    {
        text: "Learn CSS"
    },
    {
        text: "Learn JavaScript"
    }
];

function createAddAppendTodo(todo) {
        
    let todoEl = document.createElement("li");
    todoEl.classList.add("todo-item-container", "d-flex", "flex-row");
    todoItemsContainerEl.appendChild(todoEl);

    let inputEl = document.createElement("input");
    inputEl.type = "checkbox";
    inputEl.id = "checkboxInput";
    inputEl.classList.add("checkbox-input");
    todoEl.appendChild(inputEl);

    let labelContainerEl = document.createElement("div");
    labelContainerEl.classList.add("label-container", "d-flex", "flex-row");
    todoEl.appendChild(labelContainerEl );

    let labelEl = document.createElement("label");
    labelEl.setAttribute("for", "checkboxInput");
    labelEl.classList.add("checkbox-label");
    labelEl.textContent = todo.text;
    labelContainerEl.appendChild(labelEl);

    let deleteContainerEl =document.createElement("div");
    deleteContainerEl.classList.add("delete-icon-container");
    labelContainerEl.appendChild(deleteContainerEl);

    let deleteEl = document.createElement("i");
    deleteEl.classList.add("delete-icon", "far", "fa-trash-alt");
    deleteContainerEl.appendChild(deleteEl);
}

for (let todo of todoList) {
    createAddAppendTodo(todo);
}
