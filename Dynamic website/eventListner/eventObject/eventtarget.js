let buttonEl = document.getElementById("orderNowButton");

buttonEl.addEventListener("click", function(event) {
    let targetEl = event.target;
    targetEl.style.backgroundColor ="green";
});