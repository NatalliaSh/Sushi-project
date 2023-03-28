import { getCardForSliderSelfPage } from './getCardForSliderSelfPage.js';
import { getDOMElement } from '../../modules/getDOMElement.js';

function getAllCardForSliderSelfPage(arrOfcategories, dataForSelectedLocation, productSpecificationData, imgPath) {
  const container = getDOMElement('div', { className: ' sliderContainer__allCards' });
  arrOfcategories.forEach((category) => {
    const arrOfProducts = dataForSelectedLocation.products[category];

    arrOfProducts.forEach((product) => {
      const productCard = getCardForSliderSelfPage(productSpecificationData[product], imgPath);
      container.appendChild(productCard);
    });
  });

  return container;
}

export { getAllCardForSliderSelfPage };
