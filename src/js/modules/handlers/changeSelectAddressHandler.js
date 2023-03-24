import { getDataForSelectedLocation } from '../getDataForSelectedLocation.js';
import { renderReplace } from '../renderReplace.js';
import { phoneNumberCart } from '../../partials/header/phoneNumberCart.js';
import { getLeftMenuCart } from '../../partials/cards/getLeftMenuCart.js';
import { getCentralMenuCards } from '../../partials/cards/getCentralMenuCards.js';

export const changeSelectAddressHandlerHeader = (address, dataBase) => {
  const data = getDataForSelectedLocation(dataBase);
  const dataOfphones = data.phones;
  const menuLeft = getLeftMenuCart(data, '../../../img/menuImg/menuLogo/');
  const menuCentral = getCentralMenuCards(data, '../../../img/menuImg/menuPicture/');

  renderReplace('.contacts', phoneNumberCart(dataOfphones, true), true);
  renderReplace('#menuRootLeft', menuLeft);
  renderReplace('#rootCentral', menuCentral);
};
