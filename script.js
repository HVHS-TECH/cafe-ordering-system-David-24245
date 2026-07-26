console.log("Hello world!")

//Variables
let userName = "David";
let itemList = [];
let priceList = [];
let orderTotal = 0;
let item;
let itemPrice;
let userMoney;

/****************************
Arrays
****************************/
// This is the menu's data, each object holds a name and price together
const menu = [ 
    { name: "Croissant", price: 6 }, 
    { name: "Bagel", price: 7 }, 
    { name: "Muffin", price: 7 }, 
    { name: "Brownie", price: 4 }, 
    { name: "Espresso", price: 9 }, 
    { name: "Latte", price: 9 }, 
    { name: "Hot Chocolate", price: 9 }, 
    { name: "Cappuccino", price: 9 } 
]; 


/****************************
Functions
****************************/

// Adds one item to the order based on the number selected in the item dropdown
function addItem(){
    const OUTPUT = document.getElementById("spaceForJavaScriptOutput");
    let choice = document.getElementById("itemField").value;
    let position = choice - 1;   // convert item number (1-8) into an array index (0-7)

    // Reject empty or out of range choices
    if (choice < 1 || choice > menu.length || choice === "") {
        OUTPUT.innerHTML = "<p>Please enter a valid item number (1-8).</p>";
        return;
    }

    // Look up the item's name and price from the menu array
    const selectedItem = menu[position];
    item = selectedItem.name;
    itemPrice = selectedItem.price;

    // Add the item to the order and update the running total
    itemList.push(item);
    priceList.push(itemPrice);
    orderTotal += itemPrice;

    console.log("Added: " + item + " ($" + itemPrice + ")");

    document.getElementById("itemField").value = "";

    updateCartSummary();
}

// Rebuilds the summary shown in the sidebar, grouping repeated items into one line with a quantity
function updateCartSummary(){
    const SUMMARY = document.getElementById("cartSummary");

    let cartItems = [];   // each entry is an object: { name, quantity, price }

    // Count how many of each item appear in itemList
    for (let i = 0; i < itemList.length; i++) {
        const currentItem = itemList[i];
        const currentPrice = priceList[i];

        let existingEntry = null;
        for (let i = 0; i < cartItems.length; i++) {
            if (cartItems[i].name === currentItem) {
                existingEntry = cartItems[i];
            }
        }

        if (existingEntry === null) {
            // First time seeing this item — add it as a new object
            cartItems.push({ name: currentItem, quantity: 1, price: currentPrice });
        } else {
            // Already seen this item — just increase its quantity
            existingEntry.quantity += 1;
        }
    }

    SUMMARY.innerHTML = "";

    // One line per distinct item, with +/- buttons to adjust quantity
    for (let i = 0; i < cartItems.length; i++) {
        const CART_ITEM = cartItems[i];
        const lineTotal = CART_ITEM.quantity * CART_ITEM.price;
        SUMMARY.innerHTML += "<p>" + CART_ITEM.quantity + "x " + CART_ITEM.name + " - $" + lineTotal + " " + "<button onclick=\"decreaseQuantity('" + CART_ITEM.name + "')\">-</button> " + "<button onclick=\"increaseQuantity('" + CART_ITEM.name + "', " + CART_ITEM.price + ")\">+</button>" + "</p>";
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
        const price = priceList[position];
        itemList.splice(position, 1);    // remove one entry from itemList at that position
        priceList.splice(position, 1);   // remove the matching price too
        orderTotal -= price;
    }

    updateCartSummary();
}

// Calculates change owed: money given minus the price/total
function calculateChange(_money, _price){
    const change = _money - _price;
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

    if (userMoney === "") {
        OUTPUT.innerHTML = "<p>Please enter a payment amount.</p>";
        return;
    } else if (userMoney < 0) {
        OUTPUT.innerHTML = "<p>Please enter a valid payment amount.</p>";
        return;
    } else if (isNaN(userMoney)) {
        OUTPUT.innerHTML = "<p>Payment must be a number.</p>";
        return;
    }

    // Check enough money was given to cover the order
    if (userMoney < orderTotal){
        OUTPUT.innerHTML = "<p>Not enough money to purchase. Total: $" + orderTotal + "</p>";
        return;
    }

    // Save the order details so receipt.html can read them
    localStorage.setItem("userName", userName);
    localStorage.setItem("userMoney", userMoney);
    localStorage.setItem("itemList", itemList);
    localStorage.setItem("priceList", priceList);
    localStorage.setItem("orderTotal", orderTotal);

    // Reset the order now that it's been saved, ready for the next order
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