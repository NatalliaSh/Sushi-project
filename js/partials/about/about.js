const buttonWrap = document.querySelector('.about__button');
const button = buttonWrap.querySelectorAll('button');

const textDescription = document.querySelector('.about__description');

button.forEach((el) =>
  el.addEventListener('click', () => {
    textDescription.classList.toggle('about__description--active');
    buttonWrap.classList.toggle('about__button--active');
  }),
);
