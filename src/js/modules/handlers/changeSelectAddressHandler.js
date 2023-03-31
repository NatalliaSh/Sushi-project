import { getDataForSelectedLocation } from '../getDataForSelectedLocation.js';
import { renderReplace } from '../renderReplace.js';
import { phoneNumberCart } from '../../partials/header/phoneNumberCart.js';
import { getLeftMenuCart } from '../../partials/cards/getLeftMenuCart.js';
import { setQueryParam } from '../setQueryParam.js';
import { withCheckPath } from '../withCheckPath.js';
import { setLocationDataOnStaticParts } from '../setLocationDataOnStaticParts.js';

export const changeSelectAddressHandlerHeader = (dataBase, productSpecificationData) => {
  setQueryParam();
  const data = getDataForSelectedLocation(dataBase);
  setLocationDataOnStaticParts(data);

  const path = window.location.pathname;
  withCheckPath(path, '#rootCentral', data, productSpecificationData);
};
