let hoursInputEl = document.getElementById("hoursInput");
let minutesInputEl = document.getElementById("minutesInput");
let convertBtn = document.getElementById("convertBtn");
let timeInSeconds = document.getElementById("timeInSeconds");
let errorMsg = document.getElementById("errorMsg");


function getSeconds() {
    let hoursInputValue = parseInt(hoursInputEl.value);
    let minutesInputValue = parseInt(minutesInputEl.value);
    let seconds = (hoursInputValue * 60 + minutesInputValue) * 60;

    if (hoursInputEl.value === "" && minutesInputEl.value === "") {
        errorMsg.textContent = "Please enter a valid numbers";
        timeInSeconds.textContent = "";

    } else if (minutesInputEl.value === "") {
        errorMsg.textContent = "Please enter a valid number of minutes";
        timeInSeconds.textContent = "";
    } else if (hoursInputEl.value === "") {
        errorMsg.textContent = "Please enter a valid number of hours";
        timeInSeconds.textContent = "";
    } else {
        timeInSeconds.classList.add("time");
        timeInSeconds.textContent = seconds + "s"
        errorMsg.textContent = "";
    }
}

convertBtn.addEventListener("click", getSeconds);