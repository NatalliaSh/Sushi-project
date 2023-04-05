import { getDOMElement } from '../../modules/getDOMElement.js';
import { getArrOfCardsForRender } from './getArrOfCardsForRender.js';
import { getCardForSaleSlider } from './getCardForSaleSlider.js';

function getSaleSlider(dataForSelectedLocation, allProductSpecificationData, imgPath) {
  const saleSliderWrapper = getDOMElement('div', {
    className: 'container__saleSlider--wrapper',
  });

  const saleSliderContainer = getDOMElement('div', {
    className: 'container__saleSlider',
  });
  saleSliderWrapper.appendChild(saleSliderContainer);

  const arrOfCardsOnSale = getArrOfCardsForRender(dataForSelectedLocation, allProductSpecificationData, '', 'sale').map((element) => getCardForSaleSlider(element, imgPath));
  saleSliderContainer.append(...arrOfCardsOnSale);

  return saleSliderWrapper;
}

export { getSaleSlider };
