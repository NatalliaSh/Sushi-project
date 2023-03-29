const btnNew = document.querySelector('.button__choice--new');
const btnPopular = document.querySelector('.button__choice--popular');

const sliderNew = document.querySelector('.container__newPopularSlider--slider.new');
const sliderPopular = document.querySelector('.container__newPopularSlider--slider.popular');

btnNew.addEventListener('click', () => {
  if (!btnNew.classList.contains('active')) {
    btnNew.classList.add('active');
    sliderNew.classList.add('active');

    btnPopular.classList.remove('active');
    sliderPopular.classList.remove('active');
  }
});

btnPopular.addEventListener('click', () => {
  if (!btnPopular.classList.contains('active')) {
    btnPopular.classList.add('active');
    sliderPopular.classList.add('active');

    btnNew.classList.remove('active');
    sliderNew.classList.remove('active');
  }
});
