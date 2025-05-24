document.addEventListener("DOMContentLoaded", function () {

  let currentSlide = 0;
  const slides = document.querySelectorAll(".background_image_box .slide");

  function showNextSlide() {
    slides[currentSlide].classList.remove("active");
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].classList.add("active");
  }

  setInterval(showNextSlide, 3000);


  let pizzaProductsHtml='';

  pizzaProducts.forEach((product)=>{
    pizzaProductsHtml += `
      <div class="pizza_image_box">
        <div><img src="${product.image}" class='pizza_images'></div>
        <div class="pizza_name">${product.name}</div>
        <div class="rating">
          <div><img src="/FULL/images/ratings/rating-${product.rating.stars *10}.png" class="product-stars"></div>
          <div class ="product-count">${product.rating.count}</div>
        </div>
        <div class ="product-price">Rs.${(product.priceCents.medium/100).toFixed(2)}</div>
        <button class="order_button js-order-button" data-product = '${JSON.stringify(product)}'>Order Now</button>
      </div>
    `
  });

  document.querySelector('.js-pizza-product-container').
    innerHTML=pizzaProductsHtml;


  let riceProductsHtml='';

  riceProducts.forEach((product)=>{
    riceProductsHtml += `
      <div class="rice_image_box">
        <div><img src="${product.image}" class="rice_images"></div> 
        <div class="pizza_name">${product.name}</div>
        <div class="rating">
          <div><img src="/FULL/images/ratings/rating-${product.rating.stars *10}.png" class="product-stars"></div>
          <div class ="product-count">${product.rating.count}</div>
        </div>
        <div class ="product-price">Rs.${(product.priceCents.medium/100).toFixed(2)}</div>

        <button class="order_button js-order-button" data-product = '${JSON.stringify(product)}'>Order Now</button>
      </div>
    `
  });


  document.querySelector('.js-rice-product-container').
    innerHTML = riceProductsHtml;

  function sizeButtonsClickHandler() {
    sizeButtons.forEach((btn) => {
      btn.addEventListener('click', () => {
        sizeButtons.forEach((b) => {
          b.classList.remove('active-btn');
        });
        btn.classList.add('active-btn');
      });
    });
  }

  let sizeButtons = document.querySelectorAll('.size-btn');
  let topupContainer = document.querySelector('.topup-container');

  function createTopupHTML() {
    document.querySelectorAll('.js-order-button') 
    .forEach((button)=>{
      button.addEventListener('click', ()=>{
        topupContainer.style.display = 'flex';
        let product = JSON.parse(button.dataset.product);
        let productImage = product.image;
        let productName = product.name;
        let productPrice = (product.priceCents.medium / 100).toFixed(2);
        let productDescription = product.description;

        topupContainer.innerHTML = `
          <div class="topup-content active">
            <i class="fas fa-times"></i>
            <div class="product-name">${productName}</div>
            <div class="product-image">
              <img src="${productImage}" alt="">
            </div>
            <div class="product-price">Rs. ${productPrice}</div>
            <div class="product-description">
              <p>${productDescription}</p>
            </div>
            <div class="size-option">
              <h3>Select Size :</h3>
              <button class="size-btn" data-size="large" >Large</button>
              <button class="size-btn active-btn" data-size="medium" >Medium</button>
              <button class="size-btn" data-size="small">Small</button>
            </div>
            <div class="quantity">
              <h3>Quantity   :</h3>
              <div class="quantity-selector">
                  <button class="quantity-btn" id="decrease">-</button>
                  <span class="quantity-value" id="quantity">1</span>
                  <button class="quantity-btn" id="increase">+</button>
              </div>
            </div>
            <button class="order-btn" id="order-now">Add-To-Cart</button>
          </div>
        `
        let closeBtn = document.querySelector('.topup-content i');
        closeBtn.addEventListener('click', ()=>{
        topupContainer.style.display = 'none';
        sizeButtons.forEach((btn)=>{
          btn.classList.remove('active-btn');
        });
      });
        sizeButtons = document.querySelectorAll('.size-btn');
        sizeButtons.forEach((btn)=>{
          btn.addEventListener('click', ()=>{
            sizeButtons.forEach((b)=>{
              b.classList.remove('active-btn');
            });
            btn.classList.add('active-btn');
          });
        });

        let quantityValue = document.getElementById('quantity');
        let increaseBtn = document.getElementById('increase');
        let decreaseBtn = document.getElementById('decrease');

        increaseBtn.addEventListener('click', ()=>{
          let currentQuantity = parseInt(quantityValue.textContent);
          quantityValue.textContent = currentQuantity + 1;
        });

        decreaseBtn.addEventListener('click', ()=>{
          let currentQuantity = parseInt(quantityValue.textContent);
          if(currentQuantity > 1){
            quantityValue.textContent = currentQuantity - 1;
          }
        });

      });   
    });
  }
  createTopupHTML();








});