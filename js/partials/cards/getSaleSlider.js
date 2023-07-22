import { getDOMElement } from '../../modules/getDOMElement.js';
import { getArrOfCardsForRender } from './getArrOfCardsForRender.js';
import { getCardForSaleSlider } from './getCardForSaleSlider.js';

function getSaleSlider(dataForSelectedLocation, allProductSpecificationData, imgPath) {
  const saleSliderWrapper = getDOMElement('div', {
    className: 'container__saleSlider--wrapper swiper',
  });

  const saleSliderContainer = getDOMElement('div', {
    className: 'container__saleSlider swiper-wrapper',
  });
  saleSliderWrapper.appendChild(saleSliderContainer);
  saleSliderWrapper.appendChild(getDOMElement('div', { className: 'swiper-pagination' }));

  const arrOfCardsOnSale = getArrOfCardsForRender(dataForSelectedLocation, allProductSpecificationData, '', 'sale').map((element) => getCardForSaleSlider(element, imgPath));
  saleSliderContainer.append(...arrOfCardsOnSale);

  return saleSliderWrapper;
}

export { getSaleSlider };
