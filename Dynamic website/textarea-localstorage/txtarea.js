let saveButton = document.getElementById("saveButton");
let userInputEl = document.getElementById("message");

saveButton.onclick = function() {
    let userEnteredText = userInputEl.value;
    localStorage.setItem("userEnteredText", userEnteredText);
};

let storedInputValue = localStorage.getItem("userEnteredText");

if (storedInputValue === null) {
    userInputEl.value = ""
} else {
    userInputEl.value = storedInputValue;
}