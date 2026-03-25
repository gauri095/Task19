let total = 0;

const cart = document.getElementById("cart");
const totalEl = document.getElementById("total");

// add item function
function addItem(name, price) {
    console.log("adding item:", name);

    let li = document.createElement("li");
    li.innerText = name + " - $" + price;

    // remove button
    let btn = document.createElement("button");
    btn.innerText = "Remove";

    btn.addEventListener("click", function() {
        console.log("removing item");

        cart.removeChild(li);
        total = total - price;
        totalEl.innerText = total;
    });

    li.appendChild(btn);
    cart.appendChild(li);

    total = total + price;
    totalEl.innerText = total;
}
let addBtns = document.querySelectorAll(".addBtn");

addBtns.forEach(function(btn) {
    btn.addEventListener("click", function() {
        let name = btn.getAttribute("data-name");
        let price = parseInt(btn.getAttribute("data-price"));

        addItem(name, price);
    });
});
let skipBtns = document.querySelectorAll(".skipBtn");

skipBtns.forEach(function(btn) {
    btn.addEventListener("click", function() {
        console.log("skip clicked");
        alert("Item skipped");
    });
});
const form = document.getElementById("bookingForm");
const msg = document.getElementById("msg");

form.addEventListener("submit", function(e) {
    e.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;

    console.log(name, email, phone);

    if (name === "" || email === "" || phone === "") {
        msg.innerText = "fill all fields";
        return;
    }

    if (!email.includes("@")) {
        msg.innerText = "invalid email";
        return;
    }

    msg.innerText = "booking done!";
});

