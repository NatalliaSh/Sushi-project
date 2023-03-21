import { getAddressesForSelectedCity } from './getAddressesForSelectedCity.js';
import { getSelectForm } from './getSelectForm.js';
import { getDataForSelectedLocation } from '../../modules/getDataForSelectedLocation.js';
import { getSelectedOption } from '../../modules/getSelectedOption.js';
import { renderReplace } from '../../modules/renderReplace.js';
import { phoneNumberCart } from './phoneNumberCart.js';
import { getLeftMenuCart } from '../../modules/menuContent/getLeftMenuCart.js';

export const changeSelectCityHandlerHeader = (city, dataBase) => {
  const address = getAddressesForSelectedCity(dataBase, city);

  const newSelectAdressForm = getSelectForm(address, 'address');
  const root = document.querySelector('.location__address');
  const oldSelectAdressForm = root.querySelector('select');
  root.replaceChild(newSelectAdressForm, oldSelectAdressForm);

  const data = getDataForSelectedLocation(dataBase, city, getSelectedOption('[name="address"]'));
  const dataOfphones = data.phones;
  const menu = getLeftMenuCart(data, '../../../img/menuImg/menuLogo/');

  renderReplace('.contacts', phoneNumberCart(dataOfphones, true), true);
  renderReplace('#menuRoot', menu);
};
