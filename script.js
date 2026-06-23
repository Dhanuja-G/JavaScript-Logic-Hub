// Array of Dell products
var inventory = [
    "Dell Inspiron",
    "Dell XPS",
    "Dell Latitude",
    "Dell Alienware"
];

// Display inventory
function displayInventory() {
    var list = document.getElementById("inventoryList");
    var totalCount = document.getElementById("totalCount");
    var stockCount = document.getElementById("stockCount");
    list.innerHTML = "";
    totalCount.innerText = inventory.length;
    stockCount.innerText = inventory.length;

    for (var i = 0; i < inventory.length; i++) {
        var li = document.createElement("li");
        li.textContent = inventory[i];
        list.appendChild(li);
    }
}

// Find product without checking uppercase/lowercase
function findProductIndex(product) {
    var searchProduct = product.trim().toLowerCase();

    for (var i = 0; i < inventory.length; i++) {
        if (inventory[i].toLowerCase() === searchProduct) {
            return i;
        }
    }

    return -1;
}

// Add product
function addProduct() {
    var productInput = document.getElementById("productInput");
    var product = productInput.value.trim();

    if (product !== "") {
        inventory.push(product);
        displayInventory();
        productInput.value = "";

        document.getElementById("message").innerText =
            product + " added successfully!";
    }
}

// Remove product
function removeProduct() {
    var removeInput = document.getElementById("removeInput");
    var product = removeInput.value.trim();
    var index = findProductIndex(product);

    if (index !== -1) {
        var removedProduct = inventory[index];
        inventory.splice(index, 1);
        displayInventory();
        removeInput.value = "";

        document.getElementById("message").innerText =
            removedProduct + " removed successfully!";
    } else {
        document.getElementById("message").innerText =
            "Product not found!";
    }
}

// Check stock
function checkProduct() {
    var checkInput = document.getElementById("checkInput");
    var product = checkInput.value.trim();
    var index = findProductIndex(product);

    if (index !== -1) {
        document.getElementById("message").innerText =
            inventory[index] + " is in stock.";
    } else {
        document.getElementById("message").innerText =
            product + " is out of stock.";
    }

    checkInput.value = "";
}

// Load initial inventory
displayInventory();
