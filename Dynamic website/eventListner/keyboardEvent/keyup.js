let inputEl = document.createElement("input");

function keydown() {
    console.log("key pressed");
}

inputEl.addEventListener("keyup", keydown);
document.body.appendChild("inputEl");