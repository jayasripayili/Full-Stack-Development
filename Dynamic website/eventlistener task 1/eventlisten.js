let timerEl = document.getElementById("timer");

let intervalId = setInterval(function() {
    countdown = countdown - 1;
    timerEl.textContent = countdown;
    if(countdown === 0) {
        timerEl.textContent = "BOOM!!";
        clearInterval(intervalId);
    }
}, 1000);