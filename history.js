
function loadOrderHistory() {
    let orders = JSON.parse(localStorage.getItem("Orders")) || [];

    const orderTableBody = document.querySelector('#orderTable tbody');
    orderTableBody.innerHTML = ''; 

    orders.forEach(order => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${order.id}</td>
            <td>${order.name}</td>
            <td>${order.item}</td>
            <td>$${order.price.toFixed(2)}</td>           
        `;
        orderTableBody.appendChild(row);
    });
}
// function clearHistory() {
//     localStorage.removeItem("Orders");
//     loadOrderHistory(); 
// }
window.onload = loadOrderHistory;
