import { initSlider } from './splidecust';

const qualitiesSplide = document.querySelector('.qualities');
if (qualitiesSplide) {
  initSlider(qualitiesSplide, {
    gap: '1.5rem',
    perPage: 3,
    breakpoints: {
      960: {
        gap: '1rem',
        perPage: 2,
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

let createSliderInstance;
const create = document.querySelector('.create');

const initElemSlider = () => {
  if (create && !createSliderInstance) {
    createSliderInstance = initSlider(create, {
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
};

const destroySliders = () => {
  if (createSliderInstance) {
    createSliderInstance.destroy();
    createSliderInstance = null;
  }
};

const checkViewport = () => {
  initElemSlider();
  if (window.innerWidth > 960) {
    destroySliders();
  }
};

window.addEventListener('resize', checkViewport);
document.addEventListener('DOMContentLoaded', checkViewport);
