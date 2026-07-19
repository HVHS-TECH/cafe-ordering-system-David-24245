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
let shoppingList = [];
let orderTotal = 0;
let item;
let itemPrice;

/****************************
Arrays
****************************/

/****************************
Functions
****************************/

function addName(){
    const OUTPUT = document.getElementById("spaceForJavaScriptOutput");
    let name = document.getElementById("nameField").value;

    userName = name;
    console.log("Name: " + name);

    OUTPUT.innerHTML = "<p>Order Name " + name + ".</p>";
    document.getElementById("nameField").value = "";
}

function addItem(){
    const OUTPUT = document.getElementById("spaceForJavaScriptOutput");
    let name = document.getElementById("nameField").value;

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
    orderTotal += itemPrice;

    console.log("Added: " + item + " ($" + itemPrice + ")");
    OUTPUT.innerHTML = "<p>Added " + item + " ($" + itemPrice + ") to the order.</p>";
    document.getElementById("itemField").value = "";
}

function displayList() {
    const OUTPUT = document.getElementById("spaceForJavaScriptOutput");
    OUTPUT.innerHTML = "<p>Order for " + userName + ":</p>";

    for (let i = 0; i < itemList.length; i++) {
    OUTPUT.innerHTML += itemList[i] + "<br>";
    }

    OUTPUT.innerHTML += "<p>Total: $" + orderTotal + "</p>";
    console.log("List displayed Items: " + itemList.length);
    }

function calculateChange(_money, _price){
    let change = _money - _price;
    return change;
}

function checkPayment(){
    const OUTPUT = document.getElementById("spaceForJavaScriptOutput");
    let userMoney = document.getElementById("moneyField").value;

    if (userMoney < orderTotal){
        console.log("Sorry you can't afford the order");
        OUTPUT.innerHTML = "<p>Sorry, you can't afford the order.</p>";
    } else {
        let change = calculateChange(userMoney, orderTotal);
        console.log("You can afford the order");
        OUTPUT.innerHTML = "<p>You can afford the order!</p>";
        OUTPUT.innerHTML += "<p>You will get $" + change + " change.</p>";
    }
}