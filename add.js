function createCard(item, index, type) {
    return `
     <div class="col-md-4 mb-5">
        <div class="card" style="width: 18rem;">
            <img src="${item.URL}" class="card-img-top" alt="${item.itemName}">
            <div class="card-body">
                <h5 class="card-title">${item.itemName}</h5>
                <p class="card-text">Price: Rs.<span class="item-price">${item.itemPrice}.00</span></p>
                <p class="card-text">Discount: <span class="item-discount">${item.itemDiscount}%</span></p>               
                <button class="btn btn-warning update-item" data-index="${index}" data-type="${type}">Update</button>
                <button class="btn btn-danger delete-item" data-index="${index}" data-type="${type}">Delete</button>
            </div>
        </div>
    </div>`;
}
function renderCards(type) {
    const cardContainer = document.getElementById(type + "Card");
    // if(cardContainer==null){
    //     type=""
    // }
    cardContainer.innerHTML = ""; 

    const itemArray = JSON.parse(localStorage.getItem(type)) || [];
    
    itemArray.forEach((item, index) => {
        cardContainer.innerHTML += createCard(item, index, type);
    });

    addCardEventListeners(); 
}
// function renderBurgerCards() {
//     let burgerCard = document.getElementById("burgerCard");
//     burgerCard.innerHTML = "";

//     let burgerArray = JSON.parse(localStorage.getItem("Burger")) || [];

//     burgerArray.forEach((item, index) => {
//         burgerCard.innerHTML += createCard(item, index, "Burger");
//     });

//     addCardEventListeners();
// }
// function renderSubmarineCards() {
//     let submarineCard = document.getElementById("submarineCard");
//     submarineCard.innerHTML = "";

//     let submarineArray = JSON.parse(localStorage.getItem("Submarine")) || [];

//     submarineArray.forEach((item, index) => {
//         submarineCard.innerHTML += createCard(item, index, "Submarine");
//     });

//     addCardEventListeners();
// }
// function renderFriesCards() {
//     let friesCard = document.getElementById("friesCard");
//     friesCard.innerHTML = "";

//     let friesArray = JSON.parse(localStorage.getItem("Fries")) || [];

//     friesArray.forEach((item, index) => {
//         friesCard.innerHTML += createCard(item, index, "Fries");
//     });

//     addCardEventListeners();
// }
// function renderPastaCards() {
//     let pastaCard = document.getElementById("pastaCard");
//     pastaCard.innerHTML = "";

//     let pastaArray = JSON.parse(localStorage.getItem("Pasta")) || [];

//     pastaArray.forEach((item, index) => {
//         pastaCard.innerHTML += createCard(item, index, "Pasta");
//     });

//     addCardEventListeners();
// }
// function renderChickenCards() {
//     let chickenCard = document.getElementById("chickenCard");
//     chickenCard.innerHTML = "";

//     let chickenArray = JSON.parse(localStorage.getItem("Chicken")) || [];

//     chickenArray.forEach((item, index) => {
//         chickenCard.innerHTML += createCard(item, index, "Chicken");
//     });

//     addCardEventListeners();
// }
// function renderBeveragesCards() {
//     let beveragesCard = document.getElementById("beveragesCard");
//     beveragesCard.innerHTML = "";

//     let beverageArray = JSON.parse(localStorage.getItem("Beverage")) || [];

//     beverageArray.forEach((item, index) => {
//         beveragesCard.innerHTML += createCard(item, index, "Beverage");
//     });

//     addCardEventListeners();
// }
function addCardEventListeners() {

    // document.querySelectorAll('.add-to-cart').forEach(button => {
    //     button.addEventListener('click', function() {
    //         let index = this.getAttribute('data-index');
    //         addToCart(index);
    //     });
    // });


    document.querySelectorAll('.update-item').forEach(button => {
        button.addEventListener('click', function () {
            let index = this.getAttribute('data-index');
            let type = this.getAttribute('data-type');
            updateItem(index, type);
        });
    });

    document.querySelectorAll('.delete-item').forEach(button => {
        button.addEventListener('click', function () {
            let index = this.getAttribute('data-index');
            let type = this.getAttribute('data-type');
            deleteItem(index, type);
        });
    });
}


// function addToCart(index) {
//     let burgerArray = JSON.parse(localStorage.getItem("Burger"));
//     let selectedItem = burgerArray[index];

//     console.log("Adding to Cart: ", selectedItem.itemName);
//     // You can now add this item to the user's cart (e.g., another array in localStorage)
// }


function updateItem(index, type) {
    let itemArray = JSON.parse(localStorage.getItem(type));
    let itemToUpdate = itemArray[index];

    console.log("Updating item: ", itemToUpdate.itemName);

}

function deleteItem(index, type) {
    const itemArray = JSON.parse(localStorage.getItem(type));

    
    if (index >= 0 && index < itemArray.length) {
        itemArray.splice(index, 1);
        localStorage.setItem(type, JSON.stringify(itemArray)); 
        console.log("Deleted item at index: ", index);
        renderCards(type); 
    } else {
        console.error("Invalid index: ", index);
    }
}
function initialize() {
    renderCards("Burger");
    renderCards("Submarine");
    renderCards("Fries");
    renderCards("Pasta");
    renderCards("Chicken");
    renderCards("Beverage");
}
// function initialize() {
//     const types = ["Burger", "Submarine", "Fries", "Pasta", "Chicken", "Beverage"];
//     types.forEach(type => renderCards(type)); 
// }

window.onload = initialize;

