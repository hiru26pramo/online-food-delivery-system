document.querySelectorAll(".order_button").forEach(button => { 
    button.addEventListener("click", function () {
        document.querySelector(".container").classList.add("activehide");
        document.querySelector(".body-blur").classList.add("blur");
    });
});

document.addEventListener("DOMContentLoaded", () => {
  const orderButtons = document.querySelectorAll(".order_button");
  const popup = document.querySelector(".container");
  const popupImg = popup.querySelector(".pizza-img");
  const popupTitle = popup.querySelector(".title");
  const closeBtn = popup.querySelector(".close-btn");
  const bodyBlur = document.querySelector(".body-blur");
  const priceDisplay = document.getElementById("total-price");
  const quantityValue = document.getElementById("quantity");
  const sizeButtons = document.querySelectorAll(".size-btn");
  const toppingCheckboxes = document.querySelectorAll(".topping");

  function resetPopup() {
    quantity = 1;
    quantityValue.textContent = "1";

    basePrice = 1200;
    sizeButtons.forEach(btn => btn.classList.remove("active"));
    sizeButtons[0].classList.add("active");

    toppingCheckboxes.forEach(cb => cb.checked = false);
    selectedToppings = 0;

    updatePrice();

    const oldMsg = document.querySelector(".added-msg");
    if (oldMsg) oldMsg.remove();

    popupOrderBtn.classList.remove("clicked");
  }

  orderButtons.forEach(button => {
    button.addEventListener("click", () => {
      const itemBox = button.closest(".pizza_image_box, .rice_image_box");
      const itemImg = itemBox.querySelector("img");
      const itemName = itemBox.querySelector(".pizza_name").textContent;

      popupImg.src = itemImg.src;
      popupTitle.textContent = `🍽️ ${itemName}`;

      resetPopup();
      popup.classList.add("show");
      bodyBlur.classList.add("blur");
    });
  });

  closeBtn.addEventListener("click", () => {
    popup.classList.remove("show");
    bodyBlur.classList.remove("blur");
  });
});

document.querySelector(".container .close-btn").addEventListener("click", function () {
  document.querySelector(".container").classList.remove("activehide");
});

const popupOrderBtn = document.getElementById("order-now");
const cartCounter = document.getElementById("cart-no");
const popup = document.querySelector(".container");

popupOrderBtn.addEventListener("click", () => {
  const addedQuantity = parseInt(document.getElementById("quantity").textContent);
  const currentCount = parseInt(cartCounter.textContent) || 0;
  cartCounter.textContent = currentCount + addedQuantity;

  let msg = document.createElement("div");
  msg.className = "added-msg";
  msg.textContent = "✔️ Added to Cart";
  msg.style.marginTop = "10px";
  msg.style.color = "green";
  msg.style.fontWeight = "bold";
  msg.style.textAlign = "center";

  popupOrderBtn.classList.add("clicked");
  popupOrderBtn.insertAdjacentElement("beforebegin", msg);

  setTimeout(() => {
    msg.remove();
    popupOrderBtn.classList.remove("clicked");
  }, 2000);

  popup.classList.remove("show");
  document.querySelector(".body-blur").classList.remove("blur");
});

let basePrice = 1200;
let toppingPrice = 150;
let quantity = 1;
let selectedToppings = 0;

const sizeButtons = document.querySelectorAll('.size-btn');
const toppingCheckboxes = document.querySelectorAll('.topping');
const quantityValue = document.getElementById('quantity');
const decreaseBtn = document.getElementById('decrease');
const increaseBtn = document.getElementById('increase');
const totalPriceElement = document.getElementById('total-price');

sizeButtons.forEach(button => {
  button.addEventListener('click', () => {
    sizeButtons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');
    basePrice = parseInt(button.dataset.price);
    updatePrice();
  });
});

toppingCheckboxes.forEach(checkbox => {
  checkbox.addEventListener('change', () => {
    selectedToppings = document.querySelectorAll('.topping:checked').length;
    updatePrice();
  });
});

decreaseBtn.addEventListener('click', () => {
  if (quantity > 1) {
    quantity--;
    quantityValue.textContent = quantity;
    updatePrice();
  }
});

increaseBtn.addEventListener('click', () => {
  quantity++;
  quantityValue.textContent = quantity;
  updatePrice();
});

function calculateTotal() {
  return (basePrice + (selectedToppings * toppingPrice)) * quantity;
}

function updatePrice() {
  totalPriceElement.textContent = `Rs. ${calculateTotal()}`;
}



