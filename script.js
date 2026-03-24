let total = 0;
const cartDisplay = document.getElementById('cart-display');
const totalPriceElement = document.getElementById('total-price');

// Function to add item to the list
const addItem = (name, price) => {
    // If it's the first item, clear the "No items" text
    if (total === 0) {
        cartDisplay.innerHTML = "";
    }

    // Add item to list
    const itemEntry = document.createElement('p');
    itemEntry.innerText = `${name} - $${price}`;
    cartDisplay.appendChild(itemEntry);

    // Update Total
    total += price;
    totalPriceElement.innerText = total;
};

// Logout functionality
document.getElementById('logoutBtn').addEventListener('click', () => {
    alert("Logging out...");
    window.location.reload();
});