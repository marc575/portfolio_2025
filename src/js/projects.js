$(function() {
    const progressCircle = document.querySelector(".autoplay-progress svg");
    const progressContent = document.querySelector(".autoplay-progress span");
    var swiper = new Swiper(".projects", {
      spaceBetween: 30,
      centeredSlides: true,
      mousewheel: true,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false
      },
      on: {
        autoplayTimeLeft(s, time, progress) {
          progressCircle.style.setProperty("--progress", 1 - progress);
          progressContent.textContent = `${Math.ceil(time / 1000)}s`;
        }
      }
    });
})