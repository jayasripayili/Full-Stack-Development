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
        uniqueNo: todosCount,
        isChecked: false
    };
    todoList.push(newTodo);
    createAndAppendTodo(newTodo);
    userInputValue = "";
}

addTodoButton.onclick = function() {
    onAddTodo();
};


function onTodoStatusChanged(checkboxId, labelId, todoId) {
    let checkboxEl = document.getElementById(checkboxId);
    let labelEl = document.getElementById(labelId);
    labelEl.classList.toggle("checked");

    let todoIndex = todoList.findIndex(function(eachTodo) {
        let eachTodoId = "todo" + eachTodo.uniqueNo;
        if (eachTodoId === todoId) {
            return true;
        } else {
            return false;
        }
    });

    let todoObject = todoList[todoIndex];

    if (todoObject.isChecked === true) {
        todoObject.isChecked = false;
    } else {
        todoObject.isChecked = true;
    }
}

function onDeleteTodo(todoId) {
    let todoEl = document.getElementById(todoId);
    todoItemsContainerEl.removeChild(todoEl);

    let deleteIndex = todoList.findIndex(function(eachTodo) {
        let eachTodoId = "todo" + eachTodo.uniqueNo;
        if (eachTodoId === todoId) {
            return true;
        } else {
            return false;
        }
    });
    todoList.splice(deleteIndex, 1);
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
    inputE1.checked = todo.isChecked;

    inputE1.onclick = function() {
        onTodoStatusChanged(checkboxId, labelId, todoId);
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
    if (todo.isChecked === true) {
        labelEl.classList.add("checked");
    }

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