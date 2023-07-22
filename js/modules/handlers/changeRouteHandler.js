import { getDataForSelectedLocation } from '../getDataForSelectedLocation.js';
import { withCheckPath } from '../withCheckPath.js';
import { getParameterFromURL } from '../getParameterFromURL.js';
import { getSelectedOption } from '../getSelectedOption.js';
import { changeAddressSelectForm } from '../../partials/header/changeAddressSelectForm.js';
import { setLocationDataOnStaticParts } from '../setLocationDataOnStaticParts.js';

const changeRouteHandler = (path, dataBase, productSpecificationData) => {
  const root = '#rootCentral';
  const cityFromURL = getParameterFromURL('city') || '';
  const addressFromURL = getParameterFromURL('str') || '';
  let dataForSelectedLocation = {};

  const citySelectedInForm = getSelectedOption('[name="city"]');
  let addressSelectedInForm = getSelectedOption('[name="address"]');

  if (cityFromURL !== citySelectedInForm || addressFromURL !== addressSelectedInForm) {
    if (cityFromURL !== citySelectedInForm) {
      const selectCity = document.querySelector('[name=city]');
      selectCity.value = cityFromURL;
      changeAddressSelectForm(dataBase, cityFromURL);
    }

    addressSelectedInForm = getSelectedOption('[name="address"]');

    if (addressFromURL !== addressSelectedInForm) {
      const selectAddress = document.querySelector('[name=address]');
      selectAddress.value = addressFromURL;
    }

    dataForSelectedLocation = getDataForSelectedLocation(dataBase);
    setLocationDataOnStaticParts(dataForSelectedLocation);
  } else {
    dataForSelectedLocation = getDataForSelectedLocation(dataBase);
  }
  withCheckPath(path, root, dataForSelectedLocation, productSpecificationData);
};

export { changeRouteHandler };
