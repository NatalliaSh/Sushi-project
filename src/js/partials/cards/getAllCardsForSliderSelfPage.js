import { getCardForSliderSelfPage } from './getCardForSliderSelfPage.js';
import { getDOMElement } from '../../modules/getDOMElement.js';

function getAllCardForSliderSelfPage(arrOfcategories, dataForSelectedLocation, productSpecificationData, imgPath) {
  const container = getDOMElement('div', { className: ' sliderContainer__allCards swiper' });
  const swiperWrapper = getDOMElement('div', { className: 'swiper-wrapper' });
  container.appendChild(swiperWrapper);

  arrOfcategories.forEach((category) => {
    const arrOfProducts = dataForSelectedLocation.products[category];

    arrOfProducts.forEach((product) => {
      const productCard = getCardForSliderSelfPage(productSpecificationData[product], imgPath);
      swiperWrapper.appendChild(productCard);
    });
  });

  container.appendChild(getDOMElement('div', { className: 'swiper-button-prev' }));
  container.appendChild(getDOMElement('div', { className: 'swiper-button-next' }));

  return container;
}

export { getAllCardForSliderSelfPage };
