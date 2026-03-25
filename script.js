// total price variable
let total = 0;

// getting elements from HTML (IMPORTANT: IDs match your HTML)
let cartDisplay = document.getElementById("cart-display");
let totalPrice = document.getElementById("total-price");

console.log("JS loaded");

// -------------------- ADD ITEM --------------------
function addItem(name, price) {
    console.log("add clicked:", name);

    // remove default text if first item
    if (cartDisplay.innerText.includes("No items")) {
        cartDisplay.innerHTML = "";
    }

    // create container
    let div = document.createElement("div");

    // item text
    let text = document.createElement("span");
    text.innerText = name + " - $" + price;

    // remove button
    let removeBtn = document.createElement("button");
    removeBtn.innerText = "Remove";

    // remove logic
    removeBtn.addEventListener("click", function () {
        console.log("removing:", name);

        cartDisplay.removeChild(div);
        total = total - price;
        totalPrice.innerText = total;
    });

    // add to div
    div.appendChild(text);
    div.appendChild(removeBtn);

    // add to cart
    cartDisplay.appendChild(div);

    // update total
    total = total + price;
    totalPrice.innerText = total;
}

// -------------------- SKIP BUTTON --------------------
let skipBtns = document.querySelectorAll(".skip-btn");

skipBtns.forEach(function(btn) {
    btn.addEventListener("click", function() {
        console.log("skip clicked");
        alert("Item skipped");
    });
});

// -------------------- FORM HANDLING --------------------
let form = document.getElementById("bookingForm");
let msg = document.getElementById("msg");

if (form) {
    form.addEventListener("submit", function(e) {
        e.preventDefault();

        let name = document.getElementById("name").value;
        let email = document.getElementById("email").value;
        let password = document.getElementById("password").value;

        console.log(name, email, password);

        // simple validation
        if (name === "" || email === "" || password === "") {
            msg.innerText = "Please fill all fields";
            return;
        }

        if (!email.includes("@")) {
            msg.innerText = "Invalid email";
            return;
        }

        msg.innerText = "Booking successful!";
    });
}

// -------------------- LOGOUT --------------------
let logoutBtn = document.getElementById("logoutBtn");

if (logoutBtn) {
    logoutBtn.addEventListener("click", function() {
        console.log("logging out");
        alert("Logging out...");
        location.reload();
    });
}
