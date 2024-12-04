$(function() {
  var swiper = new Swiper(".logos", {
    spaceBetween: 10,
    centeredSlides: true,
    slidesPerView: 5,
    loop: true,
    autoplay: {
      delay: 500,
      disableOnInteraction: false,
    },
    breakpoints: {
      "@0.00": {
        slidesPerView: 5,
      },
      "@0.50": {
        slidesPerView: 7,
      },
    },
  });
})