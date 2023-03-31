export const btnChoiceHandler = ({ target }) => {
  const btnNew = document.querySelector('#newChoiseBtn');
  const btnPopular = document.querySelector('#popularChoiseBtn');
  const sliderNew = document.querySelector('.container__newPopularSlider--slider.new');
  const sliderPopular = document.querySelector('.container__newPopularSlider--slider.popular');

  if (!target.classList.contains('active')) {
    target.classList.add('active');
    if (target.id === 'newChoiseBtn') {
      sliderNew.classList.add('active');

      btnPopular.classList.remove('active');
      sliderPopular.classList.remove('active');
    } else {
      sliderPopular.classList.add('active');
      btnNew.classList.remove('active');
      sliderNew.classList.remove('active');
    }
  }
};
