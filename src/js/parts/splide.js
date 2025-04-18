import { initSlider } from './splidecust';

const secureSplide = document.querySelector('.secure');
if (secureSplide) {
  initSlider(secureSplide, {
    direction: 'ttb', // Вертикальная прокрутка
    height: '27.5rem', // Высота слайдера
    gap: '1.5rem',
    focus: 'center',
    easing: 'linear',
    perPage: 3,
    type: 'loop', // Зацикленный режим
    autoplay: true, // Автопрокрутка
    interval: 2000, // Интервал 3 секунды
    speed: 2000,
    arrows: false, // Отключаем стрелки
    pagination: false, // Отключаем пагинацию
    drag: false, // Отключаем перетаскивание
    pauseOnHover: false, // Отключаем паузу при наведении
    pauseOnFocus: false, // Отключаем паузу при фокусе
    breakpoints: {
      960: {
        height: '19.5rem',
        gap: '1rem',
      },
    },
  });
}

let qualitiesSliderInstance;
const qualities = document.querySelector('.qualities');

const initQualitiesSlider = () => {
  if (qualities && !qualitiesSliderInstance) {
    qualitiesSliderInstance = initSlider(qualities, {
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
};

let createSliderInstance;
const create = document.querySelector('.create');

const initCreateSlider = () => {
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
  if (qualitiesSliderInstance) {
    qualitiesSliderInstance.destroy();
    qualitiesSliderInstance = null;
  }
  if (createSliderInstance) {
    createSliderInstance.destroy();
    createSliderInstance = null;
  }
};

const checkViewport = () => {
  initQualitiesSlider();
  initCreateSlider();
  if (window.innerWidth > 960) {
    destroySliders();
  }
};

window.addEventListener('resize', checkViewport);
document.addEventListener('DOMContentLoaded', checkViewport);
