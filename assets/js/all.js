"use strict";

$(function () {
  console.log('Hello Bootstrap5');
}); //
//

var swiper = new Swiper(".mySwiper", {
  slidesPerView: "3",
  centeredSlides: false,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true
  },
  breakpoints: {
    1000: {
      slidesPerView: 3
    },
    768: {
      slidesPerView: 2
    },
    300: {
      slidesPerView: 1
    }
  }
});
//# sourceMappingURL=all.js.map
