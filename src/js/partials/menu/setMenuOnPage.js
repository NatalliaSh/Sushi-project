import { getLeftMenuCart } from '../cards/getLeftMenuCart.js';
import { getCentralMenuCards } from '../cards/getCentralMenuCards.js';
import { getDataForSelectedLocation } from '../../modules/getDataForSelectedLocation.js';
import { getSelectedOption } from '../../modules/getSelectedOption.js';

function setLeftMenuOnPage(dataBase, root) {
  const selectedCity = getSelectedOption('[name="city"]');
  const selectedAddress = getSelectedOption('[name="address"]');
  const dataForSelectedLocation = getDataForSelectedLocation(dataBase, selectedCity, selectedAddress);

  const menuLeft = getLeftMenuCart(dataForSelectedLocation, '../../../img/menuImg/menuLogo/');
  const rootLeft = document.querySelector(root);
  rootLeft.appendChild(menuLeft);
}

function setCentralMenuOnPage(dataBase, root) {
  const selectedCity = getSelectedOption('[name="city"]');
  const selectedAddress = getSelectedOption('[name="address"]');
  const dataForSelectedLocation = getDataForSelectedLocation(dataBase, selectedCity, selectedAddress);

  const menuCentral = getCentralMenuCards(dataForSelectedLocation, '../../../img/menuImg/menuPicture/');
  const rootCentral = document.querySelector(root);
  rootCentral.appendChild(menuCentral);
}

export { setLeftMenuOnPage };
export { setCentralMenuOnPage };
