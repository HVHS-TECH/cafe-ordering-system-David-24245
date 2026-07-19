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
    } else