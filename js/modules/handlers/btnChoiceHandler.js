import { mainPageSlider } from '../sliders/mainPageSlider.js';

export const btnChoiceHandler = ({ target }) => {
  const btnNew = document.querySelector('#newChoiseBtn');
  const btnPopular = document.querySelector('#popularChoiseBtn');
  const sliderNew = document.querySelector('.slider--new');
  const sliderPopular = document.querySelector('.slider--popular');

  if (!target.classList.contains('active')) {
    target.classList.add('active');

    if (target.id === 'newChoiseBtn') {
      sliderNew.classList.add('active');
      sliderNew.classList.add('swiper-wrapper');

      btnPopular.classList.remove('active');
      sliderPopular.classList.remove('active');
      sliderPopular.classList.remove('swiper-wrapper');
    } else {
      sliderPopular.classList.add('active');
      sliderPopular.classList.add('swiper-wrapper');
      btnNew.classList.remove('active');
      sliderNew.classList.remove('active');
      sliderNew.classList.remove('swiper-wrapper');
    }
    mainPageSlider();
  }
};
