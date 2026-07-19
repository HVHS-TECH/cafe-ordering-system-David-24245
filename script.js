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


/****************************
Arrays
****************************/

let items = ["Croissant", "Bagel", "Muffin", "Brownie", "Espresso", "Latte", "Hot Chocolate", "Cappuccino"];
let itemPrices = [6, 7, 7, 4, 9, 9, 9, 9];

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

    if (choice === ""){
        OUTPUT.innerHTML = "<p>Please enter a valid item number (1-8).</p>";
    } else if (choice < 1){
        OUTPUT.innerHTML = "<p>Please enter a valid item number (1-8).</p>";
    } else if (choice > 8){
        OUTPUT.innerHTML = "<p>Please enter a valid item number (1-8).</p>";
    }
}