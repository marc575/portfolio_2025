$(function() {
    var swiper = new Swiper(".gallerie", {
        effect: "coverflow",
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: "auto",
        coverflowEffect: {
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        },
        autoplay: {
          delay: 10000,
          disableOnInteraction: false
        },
        pagination: {
          el: ".swiper-pagination",
        },
    });
})