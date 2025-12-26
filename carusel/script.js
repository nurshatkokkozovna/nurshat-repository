const swiper = new Swiper('.testimonials__slider', {
  loop: true,

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  slidesPerView: 1,
  spaceBetween: 20,

  breakpoints: {
    768: {
      slidesPerView: 2,
    },
  },
});
