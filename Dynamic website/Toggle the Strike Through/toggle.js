let checkBoxWithLabelContainerE1 = document.getElementById("checkBoxWithLabelContainer");
let checkboxId = "checkbox";
let labelId = "checkboxLabel";

function onCheckboxStatusChange() {
    checkboxLabelE1.classList.toggle("strike-through");
}

let checkboxInputE1 = document.createElement("input");
checkboxInputE1.type = "checkbox";
checkboxInputE1.id = checkboxId;

checkboxInputE1.onclick = function() {
    onCheckboxStatusChange();
};
checkBoxWithLabelContainer.appendChild(checkboxInputE1);

let checkboxLabelE1 = document.createElement("label");
checkboxLabelE1.classList.add("checkbox-label");
checkboxLabelE1.setAttribute("for", checkboxId);
checkboxLabelE1.id = labelId;
checkboxLabelE1.textContent = "I am a label";
checkBoxWithLabelContainer.appendChild(checkboxLabelE1);