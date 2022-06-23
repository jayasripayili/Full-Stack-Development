let inputEl = document.createElement("input");

function keydown(event) {
    console.log(event.key);
}
inputEl.addEventListener("keydown", keydown);
document.body.appendChild(inputEl);