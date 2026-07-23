
/* This piece of code loads the customer's order, groups identical items together, and displays the completed receipt*/
function displayReceipt(){
    // Retrieves the saved customer information
    let userName = localStorage.getItem("userName");
    let userMoney = localStorage.getItem("userMoney");
    let orderTotal = localStorage.getItem("orderTotal");

    // Retrieve the saved item and price lists
    let itemListRaw = localStorage.getItem("itemList");
    let priceListRaw = localStorage.getItem("priceList");

    let itemList;
    let priceList;

    // If no items were saved, create empty arrays
    if (itemListRaw === "") {
        itemList = [];
        priceList = [];
    } else {
    // Convert the saved text back into arrays
        itemList = itemListRaw.split(",");
        priceList = priceListRaw.split(",");
    }

    // Arrays used to group identical items together
    let Items1 = [];
    let quantities = [];
    let unitPrices = [];

    // Count how many of each item were ordered
    for (let i = 0; i < itemList.length; i++) {
        let currentItem = itemList[i];
        let currentPrice = priceList[i];
        let Index = Items1.indexOf(currentItem);

        if (Index === -1) {
    // First time the item has appeared
            Items1.push(currentItem);
            quantities.push(1);
            unitPrices.push(currentPrice);
        } else {
    // Increase the quantity of an existing item
            quantities[Index] += 1;
        }
    }

    // Display the customer's information
    document.getElementById("receiptName").textContent = userName;
    document.getElementById("receiptTotal").textContent = orderTotal;
    document.getElementById("receiptMoney").textContent = userMoney;

    const ROWS = document.getElementById("receiptRows");
    ROWS.innerHTML = "";
    for (let i = 0; i < Items1.length; i++) {
        ROWS.innerHTML += "<tr><td>" + quantities[i] + "</td><td>" + Items1[i] + "</td><td>$" + unitPrices[i] + "</td></tr>";
    }

    // Calculate and display the customer's change
    let change = userMoney - orderTotal;
    document.getElementById("receiptChange").textContent = change;
}

// Run the function automatically when the receipt page opens
displayReceipt();