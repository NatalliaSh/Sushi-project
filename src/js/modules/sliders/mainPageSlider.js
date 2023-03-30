function mainPageSlider() {
  $(document).ready(function () {
    $('.container__saleSlider').slick({
      autoplay: true,
      speed: 3000,
      arrows: false,
      dots: true,
    });
  });

  $(document).ready(function () {
    $('.container__newPopularSlider--slider').slick({
      slidesToShow: 3,
      autoplay: true,
      autoplaySpeed: 1000,
      speed: 4000,
      arrows: true,
      dots: false,
      centerMode: true,
      focusOnSelect: true,
      responsive: [
        {
          breakpoint: 1400,
          settings: {
            slidesToShow: 2,
          },
        },
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 1,
            centerMode: true,
          },
        },
      ],
    });
  });
}

export { mainPageSlider };
