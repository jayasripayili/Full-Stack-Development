let counterValueE1 = document.getElementById("counterValue");

let clickCount = localStorage.getItem("clickCount");

if (clickCount === null) {
    counterValueE1.textContent = 0;
} else {
    counterValueE1.textContent = clickCount;
}

function onIncrementCount() {
    let previousCounterValue = counterValueE1.textContent;
    let updateCounterValue = parseInt(previousCounterValue) + 1;

    localStorage.setItem("clickCount", updateCounterValue);

    counterValueE1.textContent = updateCounterValue;
}