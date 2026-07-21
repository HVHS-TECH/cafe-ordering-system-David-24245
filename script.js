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

let quantityList = [];
let CroissantQuantity;
let removeCroissant;
let addCroissant;

/****************************
Functions
****************************/

function addItem(){
    const OUTPUT = document.getElementById("spaceForJavaScriptOutput");
    let choice = document.getElementById("itemField").value;

    /****************************
    if (choice == 1){
        croissantQuantity = "1x";
    } else if (choice == 2){
        item = "Bagel";
    } else if (choice == 3){
        item = "Muffin";
    } else if (choice == 4){
        item = "Brownie";
    } else if (choice == 5){
        item = "Espresso";
    } else if (choice == 6){
        item = "Latte";
    } else if (choice == 7){
        item = "Hot Chocolate";
    } else if (choice == 8){
        item = "Cappuccino";
    }
    ****************************/

    if (choice == 1){
        item = "Croissant";
        itemPrice = 6;
    } else if (choice == 2){
        item = "Bagel";
        itemPrice = 7;
    } else if (choice == 3){
        item = "Muffin";
        itemPrice = 7;
    } else if (choice == 4){
        item = "Brownie";
        itemPrice = 4;
    } else if (choice == 5){
        item = "Espresso";
        itemPrice = 9;
    } else if (choice == 6){
        item = "Latte";
        itemPrice = 9;
    } else if (choice == 7){
        item = "Hot Chocolate";
        itemPrice = 9;
    } else if (choice == 8){
        item = "Cappuccino";
        itemPrice = 9;
    } else {
        OUTPUT.innerHTML = "<p>Please enter a valid item number (1-8).</p>";
        return;
    }

    itemList.push(item);
    priceList.push(itemPrice);
    orderTotal += itemPrice;

    console.log("Added: " + item + " ($" + itemPrice + ")");
    OUTPUT.innerHTML = "<p>Added " + item + " ($" + itemPrice + ") to the order.</p>";

    document.getElementById("itemField").value = "";
}

function calculateChange(_money, _price){
    let change = _money - _price;
    return change;
}

function goToReceiptPage(){
    userName = document.getElementById("nameField").value;
    userMoney = document.getElementById("moneyField").value;

    const RECEIPT_OUTPUT = document.getElementById("receiptOutput");

    RECEIPT_OUTPUT.innerHTML = "<p>Receipt for " + userName + ":</p>";

    for (let i = 0; i < itemList.length; i++) {
    RECEIPT_OUTPUT.innerHTML += itemList[i] + " - " + quantityList[i] + " - $" + priceList[i] + "<br>";
    }

    RECEIPT_OUTPUT.innerHTML += "<p>Total: $" + orderTotal + "</p>";

    if (userMoney < orderTotal){
        RECEIPT_OUTPUT.innerHTML += "<p>Sorry, you can't afford the order.</p>";
    } else {
        let change = calculateChange(userMoney, orderTotal);
        RECEIPT_OUTPUT.innerHTML += "<p>Payment: $" + userMoney + "</p>";
        RECEIPT_OUTPUT.innerHTML += "<p>Change: $" + change + "</p>";
    }

    document.getElementById("orderPage").classList.add("hidden");
    document.getElementById("receiptPage").classList.remove("hidden");
}

    function goToOrderPage(){
        document.getElementById("orderPage").classList.remove("hidden");
        document.getElementById("receiptPage").classList.add("hidden");
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
    console.log("Order restarted");
}
