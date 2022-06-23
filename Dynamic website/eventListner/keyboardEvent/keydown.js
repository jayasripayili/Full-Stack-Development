let inputEl = document.createElement("input");

function keydown() {
    console.log("key pressed");
}

inputEl.addEventListener("keydown", keydown);
document.body.appendChild("inputEl");