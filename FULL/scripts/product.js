// document.addEventListener("DOMContentLoaded", function () {

let currentSlide = 0;
const slides = document.querySelectorAll(".background_image_box .slide");

function showNextSlide() {
  slides[currentSlide].classList.remove("active");
  currentSlide = (currentSlide + 1) % slides.length;
  slides[currentSlide].classList.add("active");
}

setInterval(showNextSlide, 3000);




const pizzaProducts = [{
  image : '/FULL/images/pizza image/BBQ Chicken Pan Medium.jpg',
  name : 'BBQ Chicken Pan Medium',
  priceCents : 150000,
  rating: {
      stars: 4,
      count: 2581
    }
},{
  image : '/FULL/images/pizza image/Butter Chicken Masala Pan.jpg',
  name : 'Butter Chicken Masala Pan',
  priceCents : 150000,
  rating: {
      stars: 3.5,
      count: 222
    }
},{
  image : '/FULL/images/pizza image/Cheese Lovers Pan Medium.jpg',
  name : 'Cheese Lovers Pan Medium',
  priceCents : 150000,
  rating: {
      stars: 2.5,
      count: 24
    }
},{
  image : '/FULL/images/pizza image/Chicken Hawaiian Pan Medium.jpg',
  name : 'Chicken Hawaiian Pan Medium',
  priceCents : 150000,
  rating: {
      stars: 3.5,
      count: 2589
    }
},{
  image : '/FULL/images/pizza image/Chicken Triple Treat Pizza Pan.jpg',
  name : 'Chicken Triple Treat Pizza Pan',
  priceCents : 150000,
  rating: {
      stars: 3.5,
      count: 2589
    }
},{
  image : '/FULL/images/pizza image/Devilled Chicken Pan Medium.jpg',
  name : 'Devilled Chicken Pan Medium',
  priceCents : 150000,
  rating: {
      stars: 4.5,
      count: 2541
    }
},{
  image : '/FULL/images/pizza image/Double Chicken & Cheese Fies.jpg',
  name : 'Double Chicken & Cheese Fies',
  priceCents : 150000,
  rating: {
      stars: 4,
      count: 1425
    }
},{
  image : '/FULL/images/pizza image/Double Chicken Surprise Pa.jpg',
  name : 'Double Chicken Surprise Pan',
  priceCents : 150000,
  rating: {
      stars: 4,
      count: 1780
    },
},{
  image : '/FULL/images/pizza image/Hot & Spicy Chicken Pan Med.jpg',
  name : 'Hot & Spicy Chicken Pan',
  priceCents : 150000,
  rating: {
      stars: 4.5,
      count: 258
    }
},{
  image : '/FULL/images/pizza image/Minced Mutton Treat Pan Med.jpg',
  name : 'Minced Mutton Treat Pan Med',
  priceCents : 150000,
  rating: {
      stars: 3,
      count: 24
    }
},{
  image : '/FULL/images/pizza image/Prawn with Chicken Bacon &.jpg',
  name : 'Prawn with Chicken Bacon',
  priceCents : 150000,
  rating: {
      stars: 2.5,
      count: 25
    }
},{
  image : '/FULL/images/pizza image/Spicy Fish Pizza Pan Medium.jpg',
  name : 'Spicy Fish Pizza Pan Medium',
  priceCents : 150000,
  rating: {
      stars: 2.5,
      count: 1285
    }
},{
  image : '/FULL/images/pizza image/Spicy Veggie with Paneer Pan.jpg',
  name : 'Spicy Veggie with Paneer Pan',
  priceCents : 150000,
  rating: {
      stars: 2,
      count: 25
    }
},{
  image : '/FULL/images/pizza image/Tandoori Chicken Pan Medium.jpg',
  name : 'Tandoori Chicken Pan Medium',
  priceCents : 150000,
  rating: {
      stars: 1,
      count: 5
    }
}];

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
      <div class ="product-price">Rs.${product.priceCents/100}.00</div>
      <button class="order_button">Order Now</button>
    </div>
  `
});

document.querySelector('.js-pizza-product-container').
  innerHTML=pizzaProductsHtml;


const riceProducts = [{
  image : '/FULL/images/fried rice/rice1.jpg',
  name : 'Chicken Fried Rice',
  priceCents : 150000,
  rating: {
      stars: 4,
      count: 5000
    }
},{
  image : '/FULL/images/fried rice/rice2.jpg',
  name : 'Classic Egg Fried Rice',
  priceCents : 150000,
  rating: {
      stars: 4.5,
      count: 368
    }
},{
  image : '/FULL/images/fried rice/rice3.jpg',
  name : 'Classic Seafood Fried Rice',
  priceCents : 150000,
  rating: {
      stars: 3,
      count: 785
    }
},{
  image : '/FULL/images/fried rice/rice4.jpg',
  name : 'Vegetable Fried Rice',
  priceCents : 150000,
  rating: {
      stars: 3.5,
      count: 254
    }
},{
  image : '/FULL/images/fried rice/rice5.jpg',
  name : 'Pork Fried Rice',
  priceCents : 150000,
  rating: {
      stars: 2.5,
      count: 289
    }
},{
  image : '/FULL/images/fried rice/rice6.jpg',
  name : '',
  priceCents : 150000,
  rating: {
      stars: 2.5,
      count: 1425
    }
},{
  image : '/FULL/images/fried rice/rice7.jpg',
  name : '',
  priceCents : 150000,
  rating: {
      stars: 3.5,
      count: 229
    }
},{
  image : '/FULL/images/fried rice/rice8.jpg',
  name : '',
  priceCents : 150000,
  rating: {
      stars: 3,
      count: 229
    }
},{
  image : '/FULL/images/fried rice/rice9.jpg',
  name : '',
  priceCents : 150000,
  rating: {
      stars: 2,
      count: 547
    }
},{
  image : '/FULL/images/fried rice/rice10.jpg',
  name : '',
  priceCents : 150000,
  rating: {
      stars: 1,
      count: 229
    }
}];


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
      <div class ="product-price">Rs.${product.priceCents/100}.00</div>
      

      <button class="order_button">Order Now</button>
    </div>
  `
});


document.querySelector('.js-rice-product-container').
  innerHTML = riceProductsHtml;