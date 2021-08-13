
// слайдер свайпер
var swipOne = new Swiper('.swiper-container', {
  // Optional parameters
  direction: 'horizontal',
  observer: true,
  observeParents: true,
  observeSlideChildren: true,
  loop: true,

  // Navigation arrows
  // navigation: {
  //   nextEl: '.swiper-button-next',
  //   prevEl: '.swiper-button-prev',
  //
  // },
  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
    draggable: true,


  },
  slidesPerView: 3,
  breakpoints: {
   // when window width is >= 320px
   320: {
     slidesPerView: 1,
     spaceBetween: 10
   },
   // when window width is >= 65px
   650: {
     slidesPerView: 2,
     spaceBetween: 20
   },
   // 720: {
   //   slidesPerView: 2,
   //   spaceBetween: 20
   // },
   1000: {
     slidesPerView: 3,
     spaceBetween: 20
   },
   // when window width is >= 960px
   1200: {
     slidesPerView: 4,
     spaceBetween: 20
   }
 }
});
// const sliders = document.querySelectorAll('.swiper-container');
// // слайдер свайпер
// sliders.forEach(el) => {
// let mySwiper = new Swiper(el, {
//   direction: 'horizontal',
//     observer: true,
//     observeParents: true,
//     observeSlideChildren: true,
//
//   slidesPerView: 3,
//   spaceBetween: 10,
//   scrollbar: {
//       el: '.swiper-scrollbar',
//       draggable: true,
//   loop: true,
//   },
//
//   navigation: {
//     nextEl: el.querySelector('.swiper-button-next'),
//     prevEl: el.querySelector('.swiper-button-prev'),
//   },
// })
// });
