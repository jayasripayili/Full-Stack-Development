let itemList = [{
    itemName: "Veg Biryani",
    uniqueNo: 1,
},
{
    itemName: "Chicken 65",
    uniqueNo: 2,
},
{
    itemName: "Paratha",
    uniqueNo: 3,
}
];

let itemListContainerE1 = document.getElementById("itemListContainer");

function onDeleteItem(itemId) {
let itemE1 = document.getElementById(itemId);
itemListContainerE1.removeChild(itemE1);
}

function createAndAppendItem(item) {
let itemId = "item" + item.uniqueNo;
let buttonId = "button" + item.uniqueNo;

let itemE1 = document.createElement("li");
itemE1.id = itemId;
itemE1.classList.add("ordered-item");
itemE1.textContent = item.itemName;
itemListContainerE1.appendChild(itemE1);

let buttonE1 = document.createElement("button");
buttonE1.classList.add("btn", "btn-danger", "ml-3");
buttonE1.textContent = "Cancel";
buttonE1.id = buttonId;

buttonE1.onclick = function() {
    onDeleteItem(itemId);
};
itemE1.appendChild(buttonE1);
}

for (let item of itemList) {
createAndAppendItem(item);
}