let arr = [1, 7, 3, 1, 0, 20, 77];

let startIndexInputE1 = document.getElementById("startIndexInput");
let deleteCountInputE1 = document.getElementById("deleteCountInput");
let itemToAddInputE1 = document.getElementById("itemToAddInput");
let updatedArrayE1 = document.getElementById("updatedArray");
let spliceBtnE1 = document.getElementById("spliceBtn");

function convertArrtoJSONStringAndAppend() {
    const stringfiedArr = JSON.stringify(arr);
    updatedArrayE1.textContent = stringfiedArr;
}

convertArrtoJSONStringAndAppend();

spliceBtnE1.onclick = function spliceArray() {
    let startIndex = startIndexInputE1.value;
    let deleteCount = deleteCountInputE1.value;
    let itemToAdd = itemToAddInputE1.value;

    if (startIndex === "") {
        alert("Please enter start Index");
        return;
    }

    if (deleteCount === "") {
        deleteCount = 0;
    }

    if (itemToAdd === "") {
        arr.splice(parseInt(startIndex), parseInt(deleteCount));
    } else {
        arr.splice(parseInt(startIndex), parseInt(deleteCount), itemToAdd);
    }

    startIndexInputE1.value = "";
    deleteCountInputE1.value = "";
    itemToAddInputE1.value = "";
    convertArrtoJSONStringAndAppend();
};