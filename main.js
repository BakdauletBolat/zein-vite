import Accordion from "./src/utils/accordion.js";



import Swiper, { Navigation, Pagination } from 'swiper';
// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


const accordion = new Accordion('.accordion',{
});


const pagination = {
    el: '.swiper-pagination',
    bulletActiveClass: 'category-slider-pagination-active',
    bulletClass: 'category-slider-pagination',
    clickable: true,
    // dynamicBullets: true
}

// init Swiper:
const swiper = new Swiper('.swiper-about-us', {
  // configure Swiper to use modules
  modules: [Navigation, Pagination],
  pagination: {
    el: '.swiper-pagination',
    bulletClass: 'bslider-bullet',
    bulletActiveClass: 'bslider-active-bullet'
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-next',
    prevEl: '.swiper-prev',
  },
//   pagination: pagination
});

const swiperLicense = new Swiper('.swiper-license', {
  // configure Swiper to use modules
  modules: [Navigation, Pagination],
  pagination: {
    el: '.swiper-pagination',
    bulletClass: 'bslider-bullet',
    bulletActiveClass: 'bslider-active-bullet'
  },
  breakpoints: {
    300: {
      slidesPerView: 1
    },
    740: {
      slidesPerView: 3,
      spaceBetween: 32
    }
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-next',
    prevEl: '.swiper-prev',
  },
//   pagination: pagination
})