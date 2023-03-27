import { getAddressesForSelectedCity } from '../../partials/header/getAddressesForSelectedCity.js';
import { getSelectForm } from '../../partials/header/getSelectForm.js';
import { getDataForSelectedLocation } from '../../modules/getDataForSelectedLocation.js';
import { renderReplace } from '../../modules/renderReplace.js';
import { phoneNumberCart } from '../../partials/header/phoneNumberCart.js';
import { getLeftMenuCart } from '../../partials/cards/getLeftMenuCart.js';
import { getCentralMenuCards } from '../../partials/cards/getCentralMenuCards.js';
import { changeSelectAddressHandlerHeader } from './changeSelectAddressHandler.js';
import { setQueryParam } from '../setQueryParam.js';

export const changeSelectCityHandlerHeader = (city, dataBase) => {
  const address = getAddressesForSelectedCity(dataBase, city);

  const newSelectAdressForm = getSelectForm(address, 'address');
  const root = document.querySelector('.location__address');
  const oldSelectAdressForm = root.querySelector('select');
  root.replaceChild(newSelectAdressForm, oldSelectAdressForm);

  setQueryParam();

  const data = getDataForSelectedLocation(dataBase);
  const dataOfphones = data.phones;
  const menuLeft = getLeftMenuCart(data, '../../../img/menuImg/menuLogo/');
  const menuCentral = getCentralMenuCards(data, '../../../img/menuImg/menuPicture/');

  renderReplace('.contacts', phoneNumberCart(dataOfphones, true), true);
  renderReplace('#menuRootLeft', menuLeft);
  renderReplace('#rootCentral', menuCentral);

  //Refresh listener on select address form
  const selectAddress = document.querySelector('[name="address"]');
  selectAddress.addEventListener('change', () => changeSelectAddressHandlerHeader(dataBase));
};
