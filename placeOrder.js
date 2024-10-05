let addIndex;
let itemArray = [];
let selectedItem;
let cartArray = [];
function createCard(item, index, type) {
    return `
     <div class="col-md-4 mb-5">
        <div class="card" style="width: 18rem;">
            <img src="${item.URL}" class="card-img-top" alt="${item.itemName}">
            <div class="card-body">
                <h5 class="card-title">${item.itemName}</h5>
                <p class="card-text">Price: Rs.<span class="item-price">${item.itemPrice}.00</span></p>
                <p class="card-text">Discount: <span class="item-discount">${item.itemDiscount}%</span></p>               
                <p class="card-text">Expire Date: <span class="item-exDate">${item.itemExDate}</span></p>               
                <button class="btn btn-success addCart-item" data-index="${index}" data-type="${type}">Add To Cart</button>
            </div>
        </div>
    </div>`;
}
function renderCards(type) {
    const cardContainer = document.getElementById(type + "Card");
    cardContainer.innerHTML = "";

    const itemArray = JSON.parse(localStorage.getItem(type)) || [];

    itemArray.forEach((item, index) => {
        cardContainer.insertAdjacentHTML('beforeend', createCard(item, index, type));
        const lastCard = cardContainer.lastElementChild;
        const btnAddCart = lastCard.querySelector('.addCart-item');
        btnAddCart.addEventListener('click', () => {
            addIndex = index;
            addToCart(index, type, lastCard);
        });
    });
}
function addToCart(index, type, lastCard) {
    itemArray = JSON.parse(localStorage.getItem(type));
    selectedItem = itemArray[index];

    console.log("Adding to Cart: ", selectedItem);
    cartArray = JSON.parse(localStorage.getItem("Cart")) || [];
    cartArray.push(selectedItem);
    //localStorage.removeItem("Cart");
    localStorage.setItem("Cart", JSON.stringify(cartArray));

}
function load() {
    window.location.href = "cart.html"
}
function loadHistory() {
    window.location.href = "history.html"
}
function initialize() {
    renderCards("Burger");
    renderCards("Submarine");
    renderCards("Fries");
    renderCards("Pasta");
    renderCards("Chicken");
    renderCards("Beverage");
}
window.onload = initialize;