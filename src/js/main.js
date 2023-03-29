import { start } from './modules/start.js';

start();

$(document).ready(function () {
  $('.container__saleSlider').slick({
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 3000,
    arrows: false,
    dots: true,
    easing: 'ease',
    infinite: true,
  });
});

$(document).ready(function () {
  $('.container__newPopularSlider--slider').slick({
    autoplay: true,
    autoplaySpeed: 1000,
    speed: 5000,
    arrows: true,
    dots: false,
    easing: 'ease',
    infinite: true,
  });
});
