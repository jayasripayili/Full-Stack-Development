let billAmountInput = document.getElementById("billAmount");
let percentageTipInput = document.getElementById("percentageTip");
let tipAmountInput = document.getElementById("tipAmount");
let totalInput = document.getElementById("totalAmount");
let errorMeassageElement = document.getElementById("errorMessage");
let errorMeassage = "Please Enter a Valid Input.";

function calculateTip() {
    let billAmountInputValue = billAmountInput.value;
    let percentageTipInputValue = percentageTipInput.value;

    if (billAmountInputValue === "") {
        errorMeassageElement.textContent = errorMeassage;
    } else if (percentageTipInputValue === "") {
        errorMeassageElement.textContent = errorMeassage;
    } else {
        errorMeassageElement.textContent = "";
        let billAmount = parseInt(billAmountInputValue);
        let percentageTip = parseInt(percentageTipInputValue);

        let calculateTip = (percentageTip / 100) * billAmount;
        let calculateTotal = billAmount + calculateTip;

        tipAmountInput.value = calculateTip;
        totalInput.value = calculateTotal;
    }
}