import { changeAddressSelectForm } from '../../partials/header/changeAddressSelectForm.js';
import { getDataForSelectedLocation } from '../../modules/getDataForSelectedLocation.js';
import { renderReplace } from '../../modules/renderReplace.js';
import { phoneNumberCart } from '../../partials/header/phoneNumberCart.js';
import { getLeftMenuCart } from '../../partials/cards/getLeftMenuCart.js';
import { setQueryParam } from '../setQueryParam.js';
import { withCheckPath } from '../withCheckPath.js';

export const changeSelectCityHandlerHeader = (city, dataBase, productSpecificationData) => {
  changeAddressSelectForm(dataBase, city);
  setQueryParam();

  const data = getDataForSelectedLocation(dataBase);
  const dataOfphones = data.phones;
  const menuLeft = getLeftMenuCart(data, '../../../img/menuImg/menuLogo/');
  renderReplace('.contacts', phoneNumberCart(dataOfphones, true), true);
  renderReplace('#menuRootLeft', menuLeft);

  const path = window.location.pathname;
  withCheckPath(path, '#rootCentral', data, productSpecificationData);
};
