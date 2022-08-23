$(document).ready(function() {
  // swiper
  const swiper = new Swiper('.swiper_ex', {
    speed: 400,
    autoplay : {
      delay: 5000,
    },
    loop : true,
    navigation: {
      // enabled : true,
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    scrollbar : {
      el : '.swiper-scrollbar',
      draggable: true,
    },
    pagination: {
      el: '.swiper-pagination',
      type: 'fraction',
      // type: 'bullets',
    },
    // spaceBetween: 100,
  });
})