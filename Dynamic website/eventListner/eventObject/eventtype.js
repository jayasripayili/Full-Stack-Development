let inputEl = document.createElement("input");

function keydown(event) {
    console.log(event.type);
}
inputEl.addEventListener("keydown", keydown);
document.body.appendChild(inputEl);