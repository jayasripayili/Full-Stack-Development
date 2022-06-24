let todoItemsContainerEl = document.getElementById("todoItemsContainer");
let addTodoButton = document.getElementById("addTodoButton");
let saveTodoButton = document.getElementById("saveTodoButton");

function getTodoListFromLocalStroage() {
    let stringifiedTodoList = localStorage.getItem("todoList");
    let parsedTodoList = JSON.parse(stringifiedTodoList);
    if (parsedTodoList === null) {
        return [];
    } else {
        return parsedTodoList;
    }
}
let todoList = getTodoListFromLocalStroage();
let todosCount = todoList.length;

saveTodoButton.onclick = function() {
    localStorage.setItem("todoList", JSON.stringify(todoList));
}

function onTodoStatusChanged(checkboxId, labelId) {
    let checkboxEl = document.getElementById(checkboxId);
    let labelEl = document.getElementById(labelId);

    labelEl.classList.toggle("checked");
}

function onDeleteTodo(todoId) {
    let todoEl = document.getElementById(todoId);

    todoItemsContainerEl.removeChild(todoEl);
}

function createAndAppendTodo(todo) {
    let todoId = "todo" + todo.uniqueNo;
    let checkboxId = "checkbox" + todo.uniqueNo;
    let labelId = "label" + todo.uniqueNo;


    let todoEl = document.createElement("li");
    todoEl.classList.add("todo-item-container", "d-flex", "flex-row");
    todoEl.id = todoId;
    todoItemsContainerEl.appendChild(todoEl);

    let inputE1 = document.createElement("input");
    inputE1.type = "checkbox";
    inputE1.id = checkboxId;

    inputE1.onclick = function() {
        onTodoStatusChanged(checkboxId, labelId);
    }

    inputE1.classList.add("checkbox-input");
    todoEl.appendChild(inputE1);

    let labelContainer = document.createElement("div");
    labelContainer.classList.add("label-container", "d-flex", "flex-row");
    todoEl.appendChild(labelContainer);

    let labelEl = document.createElement("label");
    labelEl.setAttribute("for", checkboxId);
    labelEl.id = labelId;
    labelEl.classList.add("checkbox-label");
    labelEl.textContent = todo.text;
    labelContainer.appendChild(labelEl);

    let deleteIconContainer = document.createElement("div");
    deleteIconContainer.classList.add("delete-icon-container");
    labelContainer.appendChild(deleteIconContainer);

    let deleteIcon = document.createElement("i");
    deleteIcon.classList.add("far", "fa-trash-alt", "delete-icon");

    deleteIcon.onclick = function() {
        onDeleteTodo(todoId);
    };
    deleteIconContainer.appendChild(deleteIcon);
}

for (let todo of todoList) {
    createAndAppendTodo(todo);
}

function onAddTodo() {
    let userInputEl = document.getElementById("todoUserInput");
    let userInputValue = userInputEl.value;

    if (userInputValue === "") {
        alert("Enter Valid Text");
        return;
    }

    todosCount = todosCount + 1;

    let newTodo = {
        text: userInputValue,
        uniqueNo: todosCount
    };
    todoList.push(newTodo);
    createAndAppendTodo(newTodo);
    userInputValue = "";
}

addTodoButton.onclick = function() {
    onAddTodo();
}