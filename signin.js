
let customers = [];

function storeCustomerData(customerName, contactNumber, username, password) {
    const customer = {
        customerName: customerName,
        contactNumber: contactNumber,
        username: username,
        password: password,
    };
    customers = JSON.parse(localStorage.getItem("Customer")) || [];
    console.log(customers);
    customers.push(customer);
    localStorage.setItem("Customer", JSON.stringify(customers));
    console.log(customers);

}

document.getElementById("signInForm").addEventListener("submit", function (event) {
    event.preventDefault();
    const customerName = document.getElementById("customerName").value;
    const contactNumber = document.getElementById("contactNumber").value;
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    storeCustomerData(customerName, contactNumber, username, password);

    event.target.reset();
});
function backpage() {
    window.location.href = "index.html"
}
