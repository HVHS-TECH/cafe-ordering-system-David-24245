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
let menuNames = ["Croissant", "Bagel", "Muffin", "Brownie", "Espresso", "Latte", "Hot Chocolate", "Cappuccino"];
let menuPrices = [6, 7, 7, 4, 9, 9, 9, 9];

/****************************
Functions
****************************/

function addItem(){
    const OUTPUT = document.getElementById("spaceForJavaScriptOutput");
    let choice = document.getElementById("itemField").value;
    let position = choice - 1;

    if (choice < 1 || choice > menuNames.length || choice === "") {
        OUTPUT.innerHTML = "<p>Please enter a valid item number (1-8).</p>";
        return;
    }

    item = menuNames[position];
    itemPrice = menuPrices[position];

    itemList.push(item);
    priceList.push(itemPrice);
    orderTotal += itemPrice;

    console.log("Added: " + item + " ($" + itemPrice + ")");

    document.getElementById("itemField").value = "";

    updateCartSummary();
}

function updateCartSummary(){
    const SUMMARY = document.getElementById("cartSummary");

    let Items1 = [];
    let quantities = [];
    let unitPrices = [];

    for (let i = 0; i < itemList.length; i++) {
        let currentItem = itemList[i];
        let currentPrice = priceList[i];
        let Index = Items1.indexOf(currentItem);

        if (Index === -1) {
            Items1.push(currentItem);
            quantities.push(1);
            unitPrices.push(currentPrice);
        } else {
            quantities[Index] += 1;
        }
    }

    SUMMARY.innerHTML = "";

    for (let i = 0; i < Items1.length; i++) {
        let lineTotal = quantities[i] * unitPrices[i];
        SUMMARY.innerHTML += "<p>" + quantities[i] + "x " + Items1[i] + " - $" + lineTotal + " " + "<button onclick=\"decreaseQuantity('" + Items1[i] + "')\">-</button> " + "<button onclick=\"increaseQuantity('" + Items1[i] + "', " + unitPrices[i] + ")\">+</button>" + "</p>";
    }
}


function increaseQuantity(itemName, price) {
    itemList.push(itemName);
    priceList.push(price);
    orderTotal += price;

    updateCartSummary();
}

function decreaseQuantity (itemName) {
    let position = itemList.indexOf(itemName);
    
    if (position !== -1) {
        let price = priceList[position];
        itemList.splice(position, 1);
        priceList.splice(position, 1);
        orderTotal -= price;
}

updateCartSummary();
}

function calculateChange(_money, _price){
    let change = _money - _price;
    return change;
}

function goToReceipt(){
    userName = document.getElementById("nameField").value;
    userMoney = document.getElementById("moneyField").value;

    localStorage.setItem("userName", userName);
    localStorage.setItem("userMoney", userMoney);
    localStorage.setItem("itemList", itemList);
    localStorage.setItem("priceList", priceList);
    localStorage.setItem("orderTotal", orderTotal);

    itemList = [];
    priceList = [];
    orderTotal = 0;

    document.getElementById("cartSummary").innerHTML = "";

    window.location.href = "receipt.html";
}

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

function toggleCart() {
    document.getElementById("orderSidebar").classList.toggle("hidden");
    document.getElementById("cartIcon").querySelector("i").classList.toggle("active");
}