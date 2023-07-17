import { getDataForSelectedLocation } from '../getDataForSelectedLocation.js';
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
