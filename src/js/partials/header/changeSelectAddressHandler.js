import { getSelectedOption } from '../../modules/getSelectedOption.js';
import { getDataForSelectedLocation } from '../../modules/getDataForSelectedLocation.js';
import { renderReplace } from '../../modules/renderReplace.js';
import { phoneNumberCart } from './phoneNumberCart.js';
import { getLeftMenuCart } from '../../modules/menuContent/getLeftMenuCart.js';

export const changeSelectAddressHandlerHeader = (address, dataBase) => {
  const city = getSelectedOption('[name="city"]');
  const selectedAddress = address || getSelectedOption('[name="address"]');
  const data = getDataForSelectedLocation(dataBase, city, selectedAddress);
  const dataOfphones = data.phones;
  const menu = getLeftMenuCart(data, '../../../img/menuImg/menuLogo/');

  renderReplace('.contacts', phoneNumberCart(dataOfphones, true), true);
  renderReplace('#menuRoot', menu);
};
