import { getLeftMenuCart } from '../cards/getLeftMenuCart.js';
import { getCentralMenuCards } from '../cards/getCentralMenuCards.js';

function setLeftMenuOnPage(dataForSelectedLocation, root) {
  const menuLeft = getLeftMenuCart(dataForSelectedLocation, '../../../img/menuImg/menuLogo/');
  const rootLeft = document.querySelector(root);
  rootLeft.appendChild(menuLeft);
}

function getCentralMenuOnPage(dataForSelectedLocation) {
  const menuCentral = getCentralMenuCards(dataForSelectedLocation, '../../../img/menuImg/menuPicture/');

  return menuCentral;
}

export { setLeftMenuOnPage };
export { getCentralMenuOnPage };
