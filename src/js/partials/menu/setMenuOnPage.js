import { getLeftMenuCart } from '../cards/getLeftMenuCart.js';
import { getCentralMenuCards } from '../cards/getCentralMenuCards.js';
import { getDataForSelectedLocation } from '../../modules/getDataForSelectedLocation.js';

function setLeftMenuOnPage(dataBase, root) {
  const dataForSelectedLocation = getDataForSelectedLocation(dataBase);

  const menuLeft = getLeftMenuCart(dataForSelectedLocation, '../../../img/menuImg/menuLogo/');
  const rootLeft = document.querySelector(root);
  rootLeft.appendChild(menuLeft);
}

function setCentralMenuOnPage(dataBase, root) {
  const dataForSelectedLocation = getDataForSelectedLocation(dataBase);

  const menuCentral = getCentralMenuCards(dataForSelectedLocation, '../../../img/menuImg/menuPicture/');
  const rootCentral = document.querySelector(root);
  rootCentral.appendChild(menuCentral);
}

export { setLeftMenuOnPage };
export { setCentralMenuOnPage };
