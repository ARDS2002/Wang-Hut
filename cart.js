let total = 0;
let orderDetails = '';
let temp;
let customer;
let ordersArray = [];
let oID;
function displayItems() {
    const itemList = document.getElementById('item-list');
    itemList.innerHTML = '';
    const tempArray = JSON.parse(localStorage.getItem("Cart")) || [];
    tempArray.forEach(item => {
        const li = document.createElement('li');
        li.innerHTML = `${item.itemName} - Rs. ${item.itemPrice} - Discounted Price - Rs. ${(item.itemPrice * (100 - item.itemDiscount)) / 100} <button class="item-button" onclick="deleteItem('${item.itemID}')">Delete</button>`;
        itemList.appendChild(li);
    });
}
function deleteItem(id) {
    let temp = JSON.parse(localStorage.getItem("Cart")) || [];
    console.log(temp);
    for (let i = 0; i < temp.length; i++) {
        if (temp[i].itemID == id) {
            temp.splice(i, 1);
            break;
        }
    }
    localStorage.setItem("Cart", JSON.stringify(temp));
    window.alert("Delete Successfull");
    displayItems();
}
function backPage() {
    window.location.href = "addCart.html"
}
function orderPlace() {
    total = 0;
    orderDetails = '';
    oID = "";
    let order = JSON.parse(localStorage.getItem("Orders")) || [];
    oID = "O0" + (order.length + 1);
    const temp = JSON.parse(localStorage.getItem("Cart")) || [];
    for (let i = 0; i < temp.length; i++) {
        let item = temp[i];
        let discountedPrice = (item.itemPrice * (100 - item.itemDiscount)) / 100;
        total += discountedPrice;
        orderDetails += `Item: ${item.itemName} - Price: Rs. ${item.itemPrice} - Discounted Price: Rs. ${discountedPrice.toFixed(2)}\n`;
        const orders = {
            name: customer.customerName,
            id: oID,
            item: item.itemName,
            price: item.itemPrice
        }
        ordersArray.push(orders);
        localStorage.setItem("Orders", JSON.stringify(ordersArray));
    }
    document.getElementById("total-price").innerHTML = `${total.toFixed(2)}`;
    document.getElementById("name").innerHTML = `${customer.customerName}`;
    document.getElementById("oID").innerHTML = `${oID}`;
}

function pay() {
    generatePDF(orderDetails, total);
    localStorage.removeItem("Cart");
    displayItems();
}
function findUser() {
    let temp = JSON.parse(localStorage.getItem("Username")) || [];
    let tempArray = JSON.parse(localStorage.getItem("Customer")) || [];
    for (let i = 0; i < tempArray.length; i++) {
        if (tempArray[i].username === temp) {
            customer = tempArray[i];
            console.log(customer);
        }
    }
}
function generatePDF(orderDetails, total) {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    doc.setFontSize(18);
    doc.setFont("helvetica", "bold");
    doc.text("Wang Hut - Order Receipt", 105, 20, null, null, "center");

    doc.setFontSize(12);
    doc.setFont("helvetica", "normal");
    doc.text("Thank you for your order!", 105, 30, null, null, "center");

    doc.line(10, 35, 200, 35);

    doc.setFontSize(14);
    doc.setFont("helvetica", "bold");
    doc.text("Order Details:", 10, 45);

    doc.setFontSize(12);
    doc.setFont("helvetica", "normal");
    let yOffset = 55;
    const items = orderDetails.split("\n");

    items.forEach(item => {
        if (item.trim() !== "") {
            doc.text(item, 10, yOffset);
            yOffset += 8;
        }
    });

    yOffset += 10;
    doc.setFontSize(14);
    doc.setFont("helvetica", "bold");
    doc.text(`Total Price: Rs. ${total.toFixed(2)}`, 10, yOffset);

    yOffset += 20;
    doc.setFontSize(10);
    doc.setFont("helvetica", "italic");
    doc.text("We hope to serve you again soon!", 105, yOffset, null, null, "center");

    doc.save("order_receipt.pdf");
}

displayItems();
findUser();