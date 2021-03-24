const mySwiper = new Swiper(".swiper-container", {
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: ".slider-button-next",
    prevEl: ".slider-button-prev",
  },
});

// Cart
const buttonCart = document.querySelector(".button-cart");
const modalCart = document.getElementById("modal-cart");
const modalCross = document.querySelector(".modal-close");

const openModal = () => {
  modalCart.classList.add("show");
};

const closeModal = () => {
  modalCart.classList.remove("show");
};
buttonCart.addEventListener("click", openModal);
modalCross.addEventListener("click", closeModal);

// smooth scroll

const scrollLinks = document.querySelectorAll("a.scroll-link");

{
  for (let counter = 0; counter < scrollLinks.length; counter++) {
    scrollLinks[counter].addEventListener("click", (event) => {
      event.preventDefault();
      const id = scrollLinks[counter].getAttribute("href");
      console.log(id);
      document.querySelector(id).scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    });
  }
}
