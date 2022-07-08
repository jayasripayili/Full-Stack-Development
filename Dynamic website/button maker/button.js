let bgColorElement = document.getElementById("bgColorInput");
let fontColorElement = document.getElementById("fontColorInput");
let fontSizeElement = document.getElementById("fontSizeInput");
let fontWeightElement = document.getElementById("fontWeightInput");
let paddingElement = document.getElementById("paddingInput");
let borderRadiusElement = document.getElementById("borderRadiusInput");
let customButtonElement = document.getElementById("customButton");

function applyBtn() {
    let bgColorValue = bgColorElement.value;
    let fontColorValue = fontColorElement.value;
    let fontSizeValue = fontSizeElement.value;
    let fontWeightValue = fontWeightElement.value;
    let paddingValue = paddingElement.value;
    let borderRadiusValue = borderRadiusElement.value;

    customButtonElement.style.backgroundColor = bgColorValue;
    customButtonElement.style.color = fontColorValue;
    customButtonElement.style.fontSize = fontSizeValue;
    customButtonElement.style.fontWeight = fontWeightValue;
    customButtonElement.style.padding = paddingValue;
    customButtonElement.style.borderRadius = borderRadiusValue;
}