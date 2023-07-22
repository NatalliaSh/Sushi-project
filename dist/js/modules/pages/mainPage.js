import { getCentralMenuOnPage } from '../../partials/menu/setMenuOnPage.js';
import { getDOMElement } from '../getDOMElement.js';
import { getSaleSlider } from '../../partials/cards/getSaleSlider.js';
import { getNewPopularSlider } from '../../partials/cards/getNewPopularSlider.js';

function getMainPage(dataForSelectedLocation, allProductSpecificationData, imgPath) {
  const container = getDOMElement('div', { className: 'container__mainPage text' });

  container.appendChild(getSaleSlider(dataForSelectedLocation, allProductSpecificationData, imgPath));

  container.appendChild(getCentralMenuOnPage(dataForSelectedLocation));

  container.appendChild(getNewPopularSlider(dataForSelectedLocation, allProductSpecificationData, imgPath));

  return container;
}

export { getMainPage };
