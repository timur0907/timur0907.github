window.onload = function () {
  document.body.style.zoom = "100%";
};

var swiper = new Swiper(".mySwiper", {
  centeredSlides: true,
  slidesPerView: "auto",
});

let header_burger = document.querySelector(".header__content-burger");
let burger = document.querySelector(".burger");
let size = document.querySelectorAll(".size");

header_burger.addEventListener("click", () => {
  header_burger.classList.toggle("active");
  burger.classList.toggle("active");
});

size.forEach((element) => {
  element.addEventListener("click", () => {
    element.classList.toggle("active");
  });
});

let cart_btn = document.querySelectorAll(".cart-btn");
let cart_modal = document.querySelector(".cart-modal");
let close_modal_btn = document.querySelector(".close-modal-btn");
let cart_content_middle = document.querySelector(".cart-modal__content-middle");
let cart_content_middle_btn1 = document.querySelector(
  ".cart-modal__content-middle--btn1"
);
let cart_content_bottom = document.querySelector(".cart-modal__content-bottom");
let cart_back = document.querySelector(".back");

cart_btn.forEach((el) => {
  el.addEventListener("click", () => {
    cart_modal.classList.add("active");
    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";
  });
});

close_modal_btn.addEventListener("click", () => {
  cart_modal.classList.remove("active");
  cart_content_middle.classList.remove("off");
  cart_content_bottom.classList.remove("active");
  document.body.style.overflow = "unset";
  document.documentElement.style.overflow = "unset";
});

cart_content_middle_btn1.addEventListener("click", () => {
  cart_content_middle.classList.add("off");
  cart_content_bottom.classList.add("active");
});

cart_back.addEventListener("click", () => {
  cart_content_middle.classList.remove("off");
  cart_content_bottom.classList.remove("active");
});
