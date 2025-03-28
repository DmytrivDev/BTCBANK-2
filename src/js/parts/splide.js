import { initSlider } from './splidecust';

const createSplide = document.querySelector('.create');
if (createSplide) {
  initSlider(createSplide, {
    gap: '1.5rem',
    perPage: 3,
    breakpoints: {
      960: {
        gap: '1rem',
        perPage: 2,
        pagination: true,
      },
      768: {
        perPage: 1,
      },
    },
  });
}

// const elemSplides = document.querySelectorAll('.elem');
// elemSplides?.forEach(container => {
//   initSlider(container, {
//     perPage: 2,
//     breakpoints: {
//       960: {},
//       500: {},
//     },
//   });
// });

// let elemSliderInstance;
// const elem = document.querySelector('.elem');

// const initElemSlider = () => {
//   if (elem && !elemSliderInstance) {
//     elemSliderInstance = initSlider(elem, {
//       perPage: 2,
//       breakpoints: {
//         960: {},
//         500: {},
//       },
//     });
//   }
// };

// const destroySliders = () => {
//   if (elemSliderInstance) {
//     elemSliderInstance.destroy();
//     elemSliderInstance = null;
//   }
// };

// const checkViewport = () => {
//   initElemSlider();
//   if (window.innerWidth > 960) {
//     destroySliders();
//   }
// };

// window.addEventListener('resize', checkViewport);
// document.addEventListener('DOMContentLoaded', checkViewport);
