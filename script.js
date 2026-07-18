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

    /*************** Name ***************/
function getFormInput(){
    const OUTPUT = document.getElementById("spaceForJavaScriptOutput");
    let name = document.getElementById("nameField").value;
    
    shoppingList.push(name);
    console.log("Added: " + name);

    OUTPUT.innerHTML = "<p>You have added " + name + " to the list.</p>";
    document.getElementById("nameField").value = "";
}

    /*************** Order ***************/
function addItem() {
    const OUTPUT = document.getElementById("spaceForJavaScriptOutput");
    let item = document.getElementById("itemField").value;
    
    shoppingList.push(item);
    console.log("Added: " + item);

    OUTPUT.innerHTML = "<p>You have added " + item + " to the list.</p>";
    document.getElementById("itemField").value = "";
}

function displayList() {
    const OUTPUT = document.getElementById("spaceForJavaScriptOutput");
    OUTPUT.innerHTML = "<p>Order:</p>";

    for (let i = 0; i < shoppingList.length; i++) {
        OUTPUT.innerHTML += shoppingList[i] + "<br>";
    }

    console.log("List displayed Items: " + shoppingList.length);
}

    /*************** Payment ***************/
function calculateChange(_money, _price){
    let change = _money - _price;
    return change;
}

function getFormInput(){
    const OUTPUT = document.getElementById("spaceForJavaScriptOutput");
    let userMoney = document.getElementById("moneyField").value;

    if (userMoney < 4){
        console.log("Sorry you can't afford the order");
        OUTPUT.innerHTML = "<p>Sorry, you can't afford the order.</p>";
    } else {
        let change = calculateChange(userMoney, 4);
        console.log("You can afford the order");
        OUTPUT.innerHTML = "<p>You can afford the order</p>";
        OUTPUT.innerHTML += "<p>You will get $" + change + " change.</p>";
    }
}