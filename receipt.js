/* This piece of code loads the customer's order, groups identical items together, and displays the completed receipt*/
function displayReceipt(){
    // Retrieves the saved customer information
    const userName = localStorage.getItem("userName");
    const userMoney = localStorage.getItem("userMoney");
    const orderTotal = localStorage.getItem("orderTotal");

    // Retrieve the saved item and price lists
    const itemListRaw = localStorage.getItem("itemList");
    const priceListRaw = localStorage.getItem("priceList");

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

    // Array used to group identical items together — each entry is an object: { name, quantity, price }
    let receiptItems = [];

    // Count how many of each item were ordered
    for (let i = 0; i < itemList.length; i++) {
        const currentItem = itemList[i];
        const currentPrice = priceList[i];

        let existingEntry = null;
        for (let i = 0; i < receiptItems.length; i++) {
            if (receiptItems[i].name === currentItem) {
                existingEntry = receiptItems[i];
            }
        }

        if (existingEntry === null) {
    // First time the item has appeared
            receiptItems.push({ name: currentItem, quantity: 1, price: currentPrice });
        } else {
    // Increase the quantity of an existing item
            existingEntry.quantity += 1;
        }
    }

    // Display the customer's information
    document.getElementById("receiptName").textContent = userName;
    document.getElementById("receiptTotal").textContent = orderTotal;
    document.getElementById("receiptMoney").textContent = userMoney;

    const ROWS = document.getElementById("receiptRows");
    ROWS.innerHTML = "";
    for (let i = 0; i < receiptItems.length; i++) {
        const RECEIPT_ITEM = receiptItems[i];
        ROWS.innerHTML += "<tr><td>" + RECEIPT_ITEM.quantity + "</td><td>" + RECEIPT_ITEM.name + "</td><td>$" + RECEIPT_ITEM.price + "</td></tr>";
    }

    // Calculate and display the customer's change
    const change = userMoney - orderTotal;
    document.getElementById("receiptChange").textContent = change;
}

// Run the function automatically when the receipt page opens
displayReceipt();