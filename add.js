let tempArray = [];
let typeOfArray;
let updateIndex;
let search;
let burgerArray = JSON.parse(localStorage.getItem("Burger")) || [];
let submarineArray = JSON.parse(localStorage.getItem("Submarine")) || [];
let friesArray = JSON.parse(localStorage.getItem("Fries")) || [];
let pastaArray = JSON.parse(localStorage.getItem("Pasta")) || [];
let chickenArray = JSON.parse(localStorage.getItem("Chicken")) || [];
let beverageArray = JSON.parse(localStorage.getItem("Beverage")) || [];
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
                <button class="btn btn-warning update-item" data-index="${index}" data-type="${type}" data-bs-toggle="modal" data-bs-target="#updateModal" onclick="loadItemData('${item.itemID}', '${item.itemName}', '${item.itemCategory}', ${item.itemPrice}, ${item.itemDiscount}, ${item.itemQTY}, '${item.itemExDate}', '${item.URL}')">Update</button>
                <button class="btn btn-danger delete-item" data-index="${index}" data-type="${type}">Delete</button>
            </div>
        </div>
    </div>`;
}
function renderCards(type) {
    const cardContainer = document.getElementById(type + "Card");
    cardContainer.innerHTML = "";

    const itemArray = JSON.parse(localStorage.getItem(type)) || [];

    itemArray.forEach((item, index) => {
        // Insert the card HTML directly
        cardContainer.insertAdjacentHTML('beforeend', createCard(item, index, type));
        const lastCard = cardContainer.lastElementChild;
        const updateButton = lastCard.querySelector('.update-item');
        updateButton.addEventListener('click', () => {
            updateIndex = index;
            updateItem(index, type, lastCard);
        });
        const deleteButton = lastCard.querySelector('.delete-item');
        deleteButton.addEventListener('click', () => {
            deleteItem(index, type, lastCard);
        });
    });
}
function loadItemData(id, name, category, price, discount, quantity, expiry, imageUrl) {
    document.getElementById("item-id").value = id;
    document.getElementById("item-name-input").value = name;
    document.getElementById("item-category-input").value = category;
    document.getElementById("item-price-input").value = price;
    document.getElementById("item-discount-input").value = discount;
    document.getElementById("item-quantity-input").value = quantity;
    document.getElementById("item-expiry-input").value = expiry;
    document.getElementById("item-image-input").value = '';  // Reset file input
    document.getElementById("image-preview").style.display = 'none'; // Hide the preview initially
}
function previewImage(event) {
    const file = event.target.files[0];
    const preview = document.getElementById('image-preview');

    if (file) {
        const reader = new FileReader();
        reader.onload = function (e) {
            preview.src = e.target.result;
            preview.style.display = 'block'; // Show the preview
        }
        reader.readAsDataURL(file);
    }
}
document.getElementById("updateButton").addEventListener("click", function () {
    const itemId = document.getElementById("item-id").value;
    const itemName = document.getElementById("item-name-input").value;
    const itemCategory = document.getElementById("item-category-input").value;
    const itemPrice = document.getElementById("item-price-input").value;
    const itemDiscount = document.getElementById("item-discount-input").value;
    const itemQuantity = document.getElementById("item-quantity-input").value;
    const itemExpiry = document.getElementById("item-expiry-input").value;
    const itemImageUrl = document.getElementById("item-image-input").value;

    switch (itemCategory) {
        case "burgers": typeOfArray = "Burger"; break;
        case "submarines": typeOfArray = "Submarine"; break;
        case "fries": typeOfArray = "Fries"; break;
        case "pasta": typeOfArray = "Pasta"; break;
        case "chicken": typeOfArray = "Chicken"; break;
        case "beverage": typeOfArray = "Beverage";
    }
    // Find the index of the item in the array

    tempArray = JSON.parse(localStorage.getItem(typeOfArray));
    console.log(updateIndex);
    console.log(tempArray);

    // Update the item if found
    if (updateIndex !== -1) {
        tempArray[updateIndex].itemID = itemId;
        tempArray[updateIndex].itemName = itemName;
        tempArray[updateIndex].itemCategory = itemCategory;
        tempArray[updateIndex].itemPrice = parseFloat(itemPrice);
        tempArray[updateIndex].itemDiscount = parseFloat(itemDiscount);
        tempArray[updateIndex].itemQTY = parseInt(itemQuantity);
        tempArray[updateIndex].itemExDate = itemExpiry;
        //tempArray[updateIndex].URL = "img/"+itemImageUrl;

        localStorage.setItem(typeOfArray, JSON.stringify(tempArray));
        console.log('Updated Item:', tempArray[updateIndex]);

    }

    // Close the modal
    var modal = bootstrap.Modal.getInstance(document.getElementById('updateModal'));
    modal.hide();
    initialize();
});



function updateItem(index, type) {
    let itemArray = JSON.parse(localStorage.getItem(type));
    let itemToUpdate = itemArray[index];

    //console.log("Updating item: ", itemToUpdate.itemName);

}

function deleteItem(index, type, cardElement) {
    console.log("Deleting item of type: ", type);
    const itemArray = JSON.parse(localStorage.getItem(type));

    if (index >= 0 && index < itemArray.length) {
        itemArray.splice(index, 1);
        localStorage.setItem(type, JSON.stringify(itemArray));
        console.log("Deleted item at index: ", index);

        cardElement.remove();
        renderCards(type);
    } else {
        console.error("Invalid index: ", index);
    }
}
function Search() {
    let searched;
    search = document.getElementById("searchBar").value;
    for (let i = 0; i < burgerArray.length; i++) {
        if (search == burgerArray[i].itemID) {

        }

    }

}
function load(){
    window.location.href = "addCart.html"
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

