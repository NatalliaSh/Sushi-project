import { getDataForSelectedLocation } from '../getDataForSelectedLocation.js';
import { renderReplace } from '../renderReplace.js';
import { phoneNumberCart } from '../../partials/header/phoneNumberCart.js';
import { getLeftMenuCart } from '../../partials/cards/getLeftMenuCart.js';
import { setQueryParam } from '../setQueryParam.js';
import { withCheckPath } from '../withCheckPath.js';

export const changeSelectAddressHandlerHeader = (dataBase, productSpecificationData) => {
  setQueryParam();
  const data = getDataForSelectedLocation(dataBase);
  const dataOfphones = data.phones;
  const menuLeft = getLeftMenuCart(data, '../../../img/menuImg/menuLogo/');
  renderReplace('.contacts', phoneNumberCart(dataOfphones, true), true);
  renderReplace('#menuRootLeft', menuLeft);

  const path = window.location.pathname;
  withCheckPath(path, '#rootCentral', data, productSpecificationData);
};
