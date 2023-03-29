import { setCentralMenuOnPage } from '../../partials/menu/setMenuOnPage.js';
import { getDOMElement } from '../getDOMElement.js';
import { getSaleSlider } from '../../partials/cards/getSaleSlider.js';
import { getNewPopularSlider } from '../../partials/cards/getNewPopularSlider.js';

function getMainPage(dataForSelectedLocation, allProductSpecificationData, imgPath, root) {
  const container = document.querySelector(root);

  container.appendChild(getSaleSlider(dataForSelectedLocation, allProductSpecificationData, imgPath));

  setCentralMenuOnPage(dataForSelectedLocation, root);

  container.appendChild(getNewPopularSlider(dataForSelectedLocation, allProductSpecificationData, imgPath));
}

export { getMainPage };
