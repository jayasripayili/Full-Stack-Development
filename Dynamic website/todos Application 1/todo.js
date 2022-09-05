/* Follow the instructions found in the description to complete the JavaScript functionality.*/

let todoList = [{
    text: "Learn HTML"
},
{
    text: "Learn CSS"
},
{
    text: "Learn JavaScript"
}
];
let todoItemsContainer = document.getElementById("todoItemsContainer");

function createAndAppendTodo(todo) {
let todoElement = document.createElement("li");
todoElement.classList.add("todo-item-container", "d-flex", "flex-row");
todoItemsContainer.appendChild(todoElement);

let inputElement = document.createElement("input");
inputElement.type = "checkbox";
inputElement.id = "checkboxInput";
inputElement.classList.add("checkbox-input");
todoElement.appendChild(inputElement);

let labelContainer = document.createElement("div");
labelContainer.classList.add("labelContainer", "d-flex", "flex-row");
todoElement.appendChild(labelContainer);

let labelElement = document.createElement("label");
labelElement.setAttribute("for", "checkboxInput");
labelElement.classList.add("checkbox-label");
labelElement.textContent = todo.text;
labelContainer.appendChild(labelElement);

let deleteIconContainer = document.createElement("div");
deleteIconContainer.classList.add("delete-icon-container");
labelContainer.appendChild(deleteIconContainer);

let deleteIcon = document.createElement("i");
deleteIcon.classList.add("far", "fa-trash-alt", "deleteIcon");
deleteIconContainer.appendChild(deleteIcon);
}

for (let todo of todoList) {
createAndAppendTodo(todo);
}