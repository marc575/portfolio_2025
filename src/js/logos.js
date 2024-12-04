$(function() {
  var swiper = new Swiper(".logos", {
    spaceBetween: 20,
    centeredSlides: true,
    loop: true,
    autoplay: {
      delay: 500,
      disableOnInteraction: false,
    },
    breakpoints: {
      "@0.00": {
        slidesPerView: 4,
      },
      "@0.75": {
        slidesPerView: 7,
      },
    },
  });
})