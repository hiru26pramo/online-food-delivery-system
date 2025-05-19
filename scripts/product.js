



document.addEventListener("DOMContentLoaded", function () {

let currentSlide = 0;
const slides = document.querySelectorAll(".background_image_box .slide");

function showNextSlide() {
  slides[currentSlide].classList.remove("active");
  currentSlide = (currentSlide + 1) % slides.length;
  slides[currentSlide].classList.add("active");
}

setInterval(showNextSlide, 3000);
});