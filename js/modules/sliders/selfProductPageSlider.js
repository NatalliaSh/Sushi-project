function selfProductPageSlider() {
  new Swiper('.sliderContainer__allCards', {
    slidesPerView: 'auto',
    spaceBetween: 10,
    loop: true,
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },
    speed: 4000,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    //allowTouchMove: false,

    on: {
      init() {
        this.el.addEventListener('mouseenter', () => {
          this.autoplay.stop();
        });

        this.el.addEventListener('mouseleave', () => {
          this.autoplay.start();
        });
      },
    },
  });
}

export { selfProductPageSlider };
