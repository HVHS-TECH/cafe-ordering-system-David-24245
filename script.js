console.log("Hello world!")

//Variables
let userName = "David";
let year = 2026;
let age = 15;
let pocketMoney = 20;
let birthYear;
let oldAge;
let halfMoney;
birthYear = year - age;
oldAge = age + 10;
halfMoney = pocketMoney / 2;
let itemList = [];
let priceList = [];
let orderTotal = 0;
let item;
let itemPrice;
let userMoney;

/****************************
Arrays
****************************/
// This is the menu's data menuNames[i] and menuPrices[i] refer to the same item
let menuNames = ["Croissant", "Bagel", "Muffin", "Brownie", "Espresso", "Latte", "Hot Chocolate", "Cappuccino"];
let menuPrices = [6, 7, 7, 4, 9, 9, 9, 9];

/****************************
Functions
****************************/

// Adds one item to the order based on the number selected in the item dropdown
function addItem(){
    const OUTPUT = document.getElementById("spaceForJavaScriptOutput");
    let choice = document.getElementById("itemField").value;
    let position = choice - 1;   // convert item number (1-8) into an array index (0-7)

    // Reject empty or out-of-range choices
    if (choice < 1 || choice > menuNames.length || choice === "") {
        OUTPUT.innerHTML = "<p>Please enter a valid item number (1-8).</p>";
        return;
    }

    // Look up the item's name and price from the menu arrays
    item = menuNames[position];
    itemPrice = menuPrices[position];

    // Add the item to the order and update the running total
    itemList.push(item);
    priceList.push(itemPrice);
    orderTotal += itemPrice;

    console.log("Added: " + item + " ($" + itemPrice + ")");

    document.getElementById("itemField").value = "";

    updateCartSummary();
}

// Resets the summary shown in the sidebar, grouping repeated items into one line with a quantity
function updateCartSummary(){
    const SUMMARY = document.getElementById("cartSummary");

    let Items1 = [];
    let quantities = [];
    let unitPrices = [];

    // Count how many of each item appear in itemList
    for (let i = 0; i < itemList.length; i++) {
        let currentItem = itemList[i];
        let currentPrice = priceList[i];
        let Index = Items1.indexOf(currentItem);

        if (Index === -1) {
            // First time seeing this item — add it as a new entry
            Items1.push(currentItem);
            quantities.push(1);
            unitPrices.push(currentPrice);
        } else {
            // Already seen this item — just increase its quantity
            quantities[Index] += 1;
        }
    }

    SUMMARY.innerHTML = "";

    // One line per distinct item, with +/- buttons to adjust quantity
    for (let i = 0; i < Items1.length; i++) {
        let lineTotal = quantities[i] * unitPrices[i];
        SUMMARY.innerHTML += "<p>" + quantities[i] + "x " + Items1[i] + " - $" + lineTotal + " " + "<button onclick=\"decreaseQuantity('" + Items1[i] + "')\">-</button> " + "<button onclick=\"increaseQuantity('" + Items1[i] + "', " + unitPrices[i] + ")\">+</button>" + "</p>";
    }
}

// Adds one more of the given item to the order (used by the + button)
function increaseQuantity(itemName, price) {
    itemList.push(itemName);
    priceList.push(price);
    orderTotal += price;

    updateCartSummary();
}

// Removes one of the given item from the order (used by the - button)
function decreaseQuantity (itemName) {
    let position = itemList.indexOf(itemName);   // find the first matching item

    if (position !== -1) {
        let price = priceList[position];
        itemList.splice(position, 1);    // remove one entry from itemList at that position
        priceList.splice(position, 1);   // remove the matching price too
        orderTotal -= price;
    }

    updateCartSummary();
}

// Calculates change owed: money given minus the price/total
function calculateChange(_money, _price){
    let change = _money - _price;
    return change;
}

// Validates the order, saves it for the receipt page, then redirects there
function goToReceipt(){
    userName = document.getElementById("nameField").value;
    userMoney = document.getElementById("moneyField").value;

    const OUTPUT = document.getElementById("spaceForJavaScriptOutput");

    // Check name was entered
    if (userName === "") {
        OUTPUT.innerHTML = "<p>Please enter your name.</p>";
        return;
    }

    // Check at least one item was added
    if (itemList.length === 0) {
        OUTPUT.innerHTML = "<p>Please add at least one item.</p>";
        return;
    }

    // Check payment amount was entered
    if (userMoney === "") {
        OUTPUT.innerHTML = "<p>Please enter a payment amount.</p>";
        return;
    }

    // Check enough money was given to cover the order
    if (userMoney < orderTotal){
        OUTPUT.innerHTML = "<p>Not enough money to purchase. Total: $" + orderTotal + "</p>";   // FIXED: was RECEIPT_OUTPUT, which doesn't exist here
        return;
    }

    // Save the order details so receipt.html can read them
    localStorage.setItem("userName", userName);
    localStorage.setItem("userMoney", userMoney);
    localStorage.setItem("itemList", itemList);
    localStorage.setItem("priceList", priceList);
    localStorage.setItem("orderTotal", orderTotal);

    // Reset the order now that it's been saved, ready for the next customer
    itemList = [];
    priceList = [];
    orderTotal = 0;

    document.getElementById("cartSummary").innerHTML = "";

    window.location.href = "receipt.html";
}

// Clears the current order and resets all input fields, without navigating away
function restartOrder(){
    const OUTPUT = document.getElementById("spaceForJavaScriptOutput");

    itemList = [];
    priceList = [];
    orderTotal = 0;
    userName = "";
    userMoney = "";

    document.getElementById("nameField").value = "";
    document.getElementById("itemField").value = "";
    document.getElementById("moneyField").value = "";

    OUTPUT.innerHTML = "<p> </p>";
    document.getElementById("cartSummary").innerHTML = "";

    console.log("Order restarted");
}

// Opens or closes the order sidebar, and switches the cart icon color to match
function toggleCart() {
    document.getElementById("orderSidebar").classList.toggle("hidden");
    document.getElementById("cartIcon").querySelector("i").classList.toggle("active");
}