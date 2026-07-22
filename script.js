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
    OUTPUT.innerHTML = "<p>Added " + item + " ($" + itemPrice + ") to the order.</p>";

    document.getElementById("itemField").value = "";

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
    console.log("Order restarted");
}

function toggleCart() {
    document.getElementById("orderSidebar").classList.toggle("hidden");
    document.getElementById("cartIcon").querySelector("i").classList.toggle("active");
}