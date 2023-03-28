import { getSelfProductCard } from '../../partials/cards/getSelfProductCard.js';
import { getDOMElement } from '../getDOMElement.js';
import { categoriesToRecomendation } from '../CONST.js';
import { getAllCardForSliderSelfPage } from '../../partials/cards/getAllCardsForSliderSelfPage.js';

function getSelfProductPage(productData, imgPath, categoryOfProduct, dataForSelectedLocation, productSpecificationData) {
  const container = getDOMElement('div', {
    className: 'container__selfProductPage',
  });

  container.appendChild(getSelfProductCard(productData, imgPath));

  const sliderContainer = getDOMElement('div', {
    className: 'container__selfProductPage--slider sliderContainer',
  });
  sliderContainer.appendChild(
    getDOMElement('div', {
      className: 'sliderContainer__title text--semi-bold',
      innerText: 'Рекомендуем к этому товару',
    }),
  );

  const arrOfcategories = categoriesToRecomendation[categoryOfProduct];
  sliderContainer.appendChild(getAllCardForSliderSelfPage(arrOfcategories, dataForSelectedLocation, productSpecificationData, imgPath));

  container.appendChild(sliderContainer);

  return container;
}

export { getSelfProductPage };
