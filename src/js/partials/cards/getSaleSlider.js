import { getDOMElement } from '../../modules/getDOMElement.js';
import { getArrOfCardsForRender } from './getArrOfCardsForRender.js';
import { getCardForSaleSlider } from './getCardForSaleSlider.js';

function getSaleSlider(dataForSelectedLocation, allProductSpecificationData, imgPath) {
  const saleSliderContainer = getDOMElement('div', {
    className: 'container__saleSlider',
  });

  const arrOfCardsOnSale = getArrOfCardsForRender(dataForSelectedLocation, allProductSpecificationData, '', 'sale').map((element) => getCardForSaleSlider(element, imgPath));
  saleSliderContainer.append(...arrOfCardsOnSale);

  return saleSliderContainer;
}

export { getSaleSlider };
