let msgEl = document.getElementById("msg");
let saveBtn = document.getElementById("saveBtn");
let clearBtn = document.getElementById("clearBtn");

let userInput = "userInput";

saveBtn.onclick = function() {
    let msgValue = msgEl.value;
    localStorage.setItem(userInput, msgValue);
}
clearBtn.onclick = function() {
    msgEl.value = "";
    localStorage.removeItem(userInput);
}

let storedValue = localStorage.getItem(userInput);

if (storedValue !== null) {
    msgEl.value = storedValue;
} else {
    msgEl.value = "";
}