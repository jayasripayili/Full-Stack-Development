let groceryList = ["Apples", "Boost Drink", "Butterscotch Ice Cream", "Tomato Ketchup", "Dairy Milk Chocolates", "Pasta"];

let groceryListContainerE1 = document.getElementById("groceryListContainer");
groceryListContainerE1.classList.add("grocery-list-container");

let headinE1 = document.createElement("h1");
headinE1.classList.add("grocery-list-heading");
headinE1.textContent = "Grocery List";
groceryListContainerE1.appendChild(headinE1);

let listItemsContainerE1 = document.createElement("ul");
listItemsContainerE1.classList.add("list-item-container");
groceryListContainerE1.appendChild(listItemsContainerE1);

for (let groceryItem of groceryList) {
    let listItemsE1 = document.createElement("li");
    listItemsE1.textContent = groceryItem;
    listItemsContainerE1.appendChild(listItemsE1);
}