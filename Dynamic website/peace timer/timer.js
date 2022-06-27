let twentySecondsBtnEl = document.getElementById("twentySecondsBtn");
let thirtySecondsBtnEl = document.getElementById("thirtySecondsBtn");
let fortySecondsBtnEl = document.getElementById("fortySecondsBtn");
let oneMinuteBtnEl = document.getElementById("oneMinuteBtn");
let timerTextEl = document.getElementById("timerText");

let secondLeft = 0;
let timerCompletedText = "your moment is complete";
let timerId;

function clearPreviousTimers() {
    clearInterval(timerId);
}

twentySecondsBtnEl.onclick = function() {
    secondLeft = 20;
    clearPreviousTimers();
    setTimerAndShow();
};

thirtySecondsBtnEl.onclick = function() {
    secondLeft = 30;
    clearPreviousTimers();
    setTimerAndShow();
};

fortySecondsBtnEl.onclick = function() {
    secondLeft = 40;
    clearPreviousTimers();
    setTimerAndShow();
};

oneMinuteBtnEl.onclick = function() {
    secondLeft = 60;
    clearPreviousTimers();
    setTimerAndShow();
};

function setTimerAndShow() {
    timerTextEl.textContent = secondLeft + "seconds Left";
    timerId = setInterval(startTimer, 1000);
}

function startTimer() {
    if (secondLeft > 1) {
        secondLeft -= 1;
        timerTextEl.textContent = secondLeft + "seconds Left";
    } else {
        clearPreviousTimers();
        timerTextEl.textContent = timerCompletedText;
    }
}