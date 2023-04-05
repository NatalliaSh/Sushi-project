import { getLeftMenuCart } from '../cards/getLeftMenuCart.js';
import { getCentralMenuCards } from '../cards/getCentralMenuCards.js';
import { renderReplace } from '../../modules/renderReplace.js';

function setLeftMenuOnPage(dataForSelectedLocation, root) {
  const menuLeft = getLeftMenuCart(dataForSelectedLocation, '../../../img/menuImg/menuLogo/');
  renderReplace(root, menuLeft);
}

function setMobileMenu(dataForSelectedLocation, root) {
  const menuLeft = getLeftMenuCart(dataForSelectedLocation, '../../../img/menuImg/menuLogo/', true);
  renderReplace(root, menuLeft);
}

function getCentralMenuOnPage(dataForSelectedLocation) {
  const menuCentral = getCentralMenuCards(dataForSelectedLocation, '../../../img/menuImg/menuPicture/');

  return menuCentral;
}

export { setLeftMenuOnPage, setMobileMenu, getCentralMenuOnPage };
