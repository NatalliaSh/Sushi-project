function selfProductPageSlider() {
  $(document).ready(function () {
    $('.sliderContainer__allCards').slick({
      slidesToShow: 4,
      autoplay: true,
      autoplaySpeed: 3000,
      speed: 3000,
      arrows: true,
      dots: false,
      easing: 'ease',
      infinite: true,
      responsive: [
        {
          breakpoint: 1400,
          settings: {
            slidesToShow: 3,
          },
        },
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 2,
          },
        },
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 1,
          },
        },
      ],
    });
  });
}

export { selfProductPageSlider };
