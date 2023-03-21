import { getSelectedOption } from './getSelectedOption.js';
import { getDataForSelectedLocation } from './getDataForSelectedLocation.js';
import { dataBase } from '../../modules/dataBase/dataBase.js';
import { renderReplace } from '../../modules/renderReplace.js';
import { phoneNumberCart } from './phoneNumberCart.js';

export const changeSelectAddressHandlerHeader = ({ target: { value: address } }) => {
  const city = getSelectedOption('[name="city"]');
  const selectedAddress = address || getSelectedOption('[name="address"]');
  const data = getDataForSelectedLocation(dataBase, city, selectedAddress);
  const dataOfphones = data.phones;

  renderReplace('.contacts', phoneNumberCart(dataOfphones, true), true);
};
