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
    
}