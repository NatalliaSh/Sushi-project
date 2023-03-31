import { changeAddressSelectForm } from '../../partials/header/changeAddressSelectForm.js';
import { getDataForSelectedLocation } from '../../modules/getDataForSelectedLocation.js';
import { setQueryParam } from '../setQueryParam.js';
import { withCheckPath } from '../withCheckPath.js';
import { setLocationDataOnStaticParts } from '../setLocationDataOnStaticParts.js';

export const changeSelectCityHandlerHeader = (city, dataBase, productSpecificationData) => {
  changeAddressSelectForm(dataBase, city);
  setQueryParam();

  const data = getDataForSelectedLocation(dataBase);
  setLocationDataOnStaticParts(data);

  const path = window.location.pathname;
  withCheckPath(path, '#rootCentral', data, productSpecificationData);
};
