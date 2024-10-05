// localStorage.removeItem("Burger");
// localStorage.removeItem("Submarine");
// localStorage.removeItem("Fries");
// localStorage.removeItem("Pasta");
// localStorage.removeItem("Chicken");
// localStorage.removeItem("Beverage");
if (JSON.parse(localStorage.getItem("Burger")) == null) {
    let burgerArray = [
        { index: 1, itemID: "B1001", itemName: "Classic Burger (Large)", itemCategory: "burgers", itemPrice: 1500, itemDiscount: 0, itemQTY: 15, itemExDate: "2024-12-04", URL: "img/burger2.jpg" },
        { index: 2, itemID: "B1002", itemName: "Classic Burger (Regular)", itemCategory: "burgers", itemPrice: 750, itemDiscount: 15, itemQTY: 15, itemExDate: "2024-12-04", URL: "img/burger2.jpg" },
        { index: 3, itemID: "B1003", itemName: "Turkey Burger", itemCategory: "burgers", itemPrice: 1600, itemDiscount: 0, itemQTY: 10, itemExDate: "2024-12-04", URL: "img/burger2.jpg" },
        { index: 4, itemID: "B1004", itemName: "Chicken Burger (Large)", itemCategory: "burgers", itemPrice: 1400, itemDiscount: 0, itemQTY: 15, itemExDate: "2024-12-04", URL: "img/burger2.jpg" },
        { index: 5, itemID: "B1005", itemName: "Chicken Burger (Regular)", itemCategory: "burgers", itemPrice: 800, itemDiscount: 20, itemQTY: 15, itemExDate: "2024-12-04", URL: "img/burger2.jpg" },
        { index: 6, itemID: "B1006", itemName: "Cheese Burger (Large)", itemCategory: "burgers", itemPrice: 1000, itemDiscount: 0, itemQTY: 10, itemExDate: "2024-12-04", URL: "img/burger2.jpg" },
        { index: 7, itemID: "B1007", itemName: "Cheese Burger (Regular)", itemCategory: "burgers", itemPrice: 600, itemDiscount: 0, itemQTY: 20, itemExDate: "2024-12-04", URL: "img/burger2.jpg" },
        { index: 8, itemID: "B1008", itemName: "Bacon Burger", itemCategory: "burgers", itemPrice: 650, itemDiscount: 15, itemQTY: 15, itemExDate: "2024-12-04", URL: "img/burger2.jpg" },
        { index: 9, itemID: "B1009", itemName: "Shawarma Burger", itemCategory: "burgers", itemPrice: 800, itemDiscount: 0, itemQTY: 15, itemExDate: "2024-12-04", URL: "img/burger2.jpg" },
        { index: 10, itemID: "B1010", itemName: "Olive Burger", itemCategory: "burgers", itemPrice: 1800, itemDiscount: 0, itemQTY: 15, itemExDate: "2024-12-04", URL: "img/burger2.jpg" },
        { index: 11, itemID: "B1011", itemName: "Double-Cheese Burger", itemCategory: "burgers", itemPrice: 1250, itemDiscount: 20, itemQTY: 15, itemExDate: "2024-12-04", URL: "img/burger2.jpg" },
        { index: 12, itemID: "B1012", itemName: "Crispy chicken Burger (Regular)", itemCategory: "burgers", itemPrice: 1200, itemDiscount: 0, itemQTY: 15, itemExDate: "2024-12-04", URL: "img/burger2.jpg" },
        { index: 13, itemID: "B1013", itemName: "Crispy chicken Burger (Large)", itemCategory: "burgers", itemPrice: 1600, itemDiscount: 10, itemQTY: 15, itemExDate: "2024-12-04", URL: "img/burger2.jpg" },
        { index: 14, itemID: "B1014", itemName: "Paneer Burger", itemCategory: "burgers", itemPrice: 900, itemDiscount: 0, itemQTY: 15, itemExDate: "2024-12-04", URL: "img/burger2.jpg" }
    ]
    localStorage.setItem("Burger", JSON.stringify(burgerArray));
}
if (JSON.parse(localStorage.getItem("Submarine")) == null){
    let submarineArray = [
        { index: 1, itemID: "S1001", itemName: "Crispy chicken Submarine(Large)", itemCategory: "submarines", itemPrice: 2000, itemDiscount: 0, itemQTY: 15, itemExDate: "2024-12-04", URL: "img/submarine.png" },
        { index: 2, itemID: "S1002", itemName: "Crispy chicken Submarine(Regular)", itemCategory: "submarines", itemPrice: 1500, itemDiscount: 0, itemQTY: 15, itemExDate: "2024-12-04", URL: "img/submarine.png" },
        { index: 3, itemID: "S1003", itemName: "chicken Submarine(Large)", itemCategory: "submarines", itemPrice: 1800, itemDiscount: 3, itemQTY: 15, itemExDate: "2024-12-04", URL: "img/submarine.png" },
        { index: 4, itemID: "S1004", itemName: "chicken Submarine(Regular)", itemCategory: "submarines", itemPrice: 1400, itemDiscount: 0, itemQTY: 15, itemExDate: "2024-12-04", URL: "img/submarine.png" },
        { index: 5, itemID: "S1005", itemName: "Grinder Submarine", itemCategory: "submarines", itemPrice: 2300, itemDiscount: 0, itemQTY: 15, itemExDate: "2024-12-04", URL: "img/submarine.png" },
        { index: 6, itemID: "S1006", itemName: "Cheese Submarine", itemCategory: "submarines", itemPrice: 2200, itemDiscount: 0, itemQTY: 15, itemExDate: "2024-12-04", URL: "img/submarine.png" },
        { index: 7, itemID: "S1007", itemName: "Double Cheese n chicken Submarine", itemCategory: "submarines", itemPrice: 1900, itemDiscount: 16, itemQTY: 15, itemExDate: "2024-12-04", URL: "img/submarine.png" },
        { index: 8, itemID: "S1008", itemName: "Special Horgie Submarine", itemCategory: "submarines", itemPrice: 2800, itemDiscount: 0, itemQTY: 15, itemExDate: "2024-12-04", URL: "img/submarine.png" },
        { index: 9, itemID: "S1009", itemName: "WANG Special Submarine", itemCategory: "submarines", itemPrice: 3000, itemDiscount: 0, itemQTY: 15, itemExDate: "2024-12-04", URL: "img/submarine.png" }
    ]
localStorage.setItem("Submarine", JSON.stringify(submarineArray));
}
if (JSON.parse(localStorage.getItem("Fries")) == null) {
    let friesArray = [
        { index: 1, itemID: "F1001", itemName: "Steak fries(Large)", itemCategory: "fries", itemPrice: 1200, itemDiscount: 0, itemQTY: 10, itemExDate: "2025-10-20", URL: "img/fries.png" },
        { index: 2, itemID: "F1002", itemName: "Steak fries(Medium)", itemCategory: "fries", itemPrice: 600, itemDiscount: 0, itemQTY: 10, itemExDate: "2025-10-20", URL: "img/fries.png" },
        { index: 3, itemID: "F1003", itemName: "French fries(Large)", itemCategory: "fries", itemPrice: 800, itemDiscount: 0, itemQTY: 10, itemExDate: "2025-10-20", URL: "img/fries.png" },
        { index: 4, itemID: "F1004", itemName: "French fries(Medium)", itemCategory: "fries", itemPrice: 650, itemDiscount: 0, itemQTY: 10, itemExDate: "2025-10-20", URL: "img/fries.png" },
        { index: 5, itemID: "F1005", itemName: "French fries(Small)", itemCategory: "fries", itemPrice: 450, itemDiscount: 0, itemQTY: 10, itemExDate: "2025-10-20", URL: "img/fries.png" },
        { index: 6, itemID: "F1006", itemName: "Sweet Potato fries(Large)", itemCategory: "fries", itemPrice: 600, itemDiscount: 0, itemQTY: 10, itemExDate: "2025-10-20", URL: "img/fries.png" }
    ]
    localStorage.setItem("Fries", JSON.stringify(friesArray));
}
if (JSON.parse(localStorage.getItem("Pasta")) == null) {
    let pastaArray = [
        { index: 1, itemID: "P1001", itemName: "Chicken n Cheese pasta", itemCategory: "pasta", itemPrice: 1600, itemDiscount: 15, itemQTY: 5, itemExDate: "2025-10-02", URL: "img/pasta.png" },
        { index: 2, itemID: "P1002", itemName: "Chicken Penne pasta", itemCategory: "pasta", itemPrice: 1700, itemDiscount: 0, itemQTY: 5, itemExDate: "2025-10-02", URL: "img/pasta.png" },
        { index: 3, itemID: "P1003", itemName: "Ground Turkey pasta Bake", itemCategory: "pasta", itemPrice: 2900, itemDiscount: 10, itemQTY: 5, itemExDate: "2025-10-02", URL: "img/pasta.png" },
        { index: 4, itemID: "P1004", itemName: "Creamy Shrimp pasta", itemCategory: "pasta", itemPrice: 2000, itemDiscount: 0, itemQTY: 5, itemExDate: "2025-10-02", URL: "img/pasta.png" },
        { index: 5, itemID: "P1005", itemName: "Lemon Butter pasta", itemCategory: "pasta", itemPrice: 1950, itemDiscount: 0, itemQTY: 5, itemExDate: "2025-10-02", URL: "img/pasta.png" },
        { index: 6, itemID: "P1006", itemName: "Tagliatelle pasta", itemCategory: "pasta", itemPrice: 2400, itemDiscount: 1, itemQTY: 5, itemExDate: "2025-10-02", URL: "img/pasta.png" },
        { index: 7, itemID: "P1007", itemName: "Baked Ravioli", itemCategory: "pasta", itemPrice: 2000, itemDiscount: 1, itemQTY: 5, itemExDate: "2025-10-02", URL: "img/pasta.png" }
    ]
    localStorage.setItem("Pasta", JSON.stringify(pastaArray));
}
if (JSON.parse(localStorage.getItem("Chicken")) == null) {
    let chickenArray = [
        { index: 1, itemID: "C1001", itemName: "Fried chicken(Small)", itemCategory: "chicken", itemPrice: 1200, itemDiscount: 0, itemQTY: 10, itemExDate: "2025-07-25", URL: "img/chicken.jpg" },
        { index: 2, itemID: "C1002", itemName: "Fried chicken(Regular)", itemCategory: "chicken", itemPrice: 2300, itemDiscount: 10, itemQTY: 10, itemExDate: "2025-07-25", URL: "img/chicken.jpg" },
        { index: 3, itemID: "C1003", itemName: "Fried chicken(Large)", itemCategory: "chicken", itemPrice: 3100, itemDiscount: 5, itemQTY: 10, itemExDate: "2025-07-25", URL: "img/chicken.jpg" },
        { index: 4, itemID: "C1004", itemName: "Hot Wings(Large)", itemCategory: "chicken", itemPrice: 2400, itemDiscount: 0, itemQTY: 10, itemExDate: "2025-07-25", URL: "img/chicken.jpg" },
        { index: 5, itemID: "C1005", itemName: "Devilled chicken(Large)", itemCategory: "chicken", itemPrice: 900, itemDiscount: 0, itemQTY: 10, itemExDate: "2025-07-25", URL: "img/chicken.jpg" },
        { index: 6, itemID: "C1006", itemName: "BBQ chicken(Regular)", itemCategory: "chicken", itemPrice: 2100, itemDiscount: 0, itemQTY: 10, itemExDate: "2025-07-25", URL: "img/chicken.jpg" }
    ]
    localStorage.setItem("Chicken", JSON.stringify(chickenArray));
}
if (JSON.parse(localStorage.getItem("Beverage")) == null) {
    let beverageArray = [
        { index: 1, itemID: "D1001", itemName: "Pepsi(330ml)", itemCategory: "beverage", itemPrice: 990, itemDiscount: 5, itemQTY: 20, itemExDate: "2026-07-25", URL: "img/drink.png" },
        { index: 2, itemID: "D1002", itemName: "Coca-Cola(330ml)", itemCategory: "beverage", itemPrice: 1230, itemDiscount: 0, itemQTY: 20, itemExDate: "2026-07-25", URL: "img/drink.png" },
        { index: 3, itemID: "D1003", itemName: "Sprite(330ml)", itemCategory: "beverage", itemPrice: 1500, itemDiscount: 3, itemQTY: 20, itemExDate: "2026-07-25", URL: "img/drink.png" },
        { index: 4, itemID: "D1004", itemName: "Mirinda(330ml)", itemCategory: "beverage", itemPrice: 850, itemDiscount: 7, itemQTY: 20, itemExDate: "2026-07-25", URL: "img/drink.png" }
    ]
    localStorage.setItem("Beverage", JSON.stringify(beverageArray));
}
