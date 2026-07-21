console.log("Running receipt.js")

function displayReceipt(){
    const RECEIPT_OUTPUT = document.getElementById("receiptOutput");

    let userName = localStorage.getItem("userName");
    let userMoney = localStorage.getItem("userMoney");
    let orderTotal = localStorage.getItem("orderTotal");
    let itemList = localStorage.getItem("itemList").split(",");
    let priceList = localStorage.getItem("priceList").split(",");

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

    RECEIPT_OUTPUT.innerHTML = "<p>Receipt for " + userName + ":</p>";

    for (let i = 0; i < Items1.length; i++) {
        let lineTotal = quantities[i] * unitPrices[i];
        RECEIPT_OUTPUT.innerHTML += quantities[i] + "x " + Items1[i] + " - $" + lineTotal + "<br>";
    }

    RECEIPT_OUTPUT.innerHTML += "<p>Total: $" + orderTotal + "</p>";

    if (userMoney < orderTotal){
        RECEIPT_OUTPUT.innerHTML += "<p>Sorry, you can't afford the order.</p>";
    } else {
        let change = userMoney - orderTotal;
        RECEIPT_OUTPUT.innerHTML += "<p>Payment: $" + userMoney + "</p>";
        RECEIPT_OUTPUT.innerHTML += "<p>Change: $" + change + "</p>";
    }
}

displayReceipt();