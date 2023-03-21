import { getSelectedOption } from '../../modules/getSelectedOption.js';
import { getDataForSelectedLocation } from '../../modules/getDataForSelectedLocation.js';
import { renderReplace } from '../../modules/renderReplace.js';
import { phoneNumberCart } from './phoneNumberCart.js';
import { getMenuCart } from '../../modules/menuContent/getMenuCart.js';

export const changeSelectAddressHandlerHeader = (address, dataBase) => {
  const city = getSelectedOption('[name="city"]');
  const selectedAddress = address || getSelectedOption('[name="address"]');
  const data = getDataForSelectedLocation(dataBase, city, selectedAddress);
  const dataOfphones = data.phones;
  const menu = getMenuCart(data, '../../../img/menuImg/menuLogo/');

  renderReplace('.contacts', phoneNumberCart(dataOfphones, true), true);
  renderReplace('#menuRoot', menu);
};
