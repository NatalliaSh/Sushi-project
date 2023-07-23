import { setQueryParam } from './setQueryParam.js';
import { setLocationDataOnStaticParts } from './setLocationDataOnStaticParts.js';
import { getDataForSelectedLocation } from './getDataForSelectedLocation.js';
import { withCheckPath } from './withCheckPath.js';
import { getParameterFromURL } from './getParameterFromURL.js';
import { changeAddressSelectForm } from '../partials/header/changeAddressSelectForm.js';

function withCheckURL(dataBase, productSpecificationData) {
  const initialQuery = window.location.search;

  const queryParam = initialQuery.includes('?p=') ? initialQuery.replace(/.*q=0&/, '?') : initialQuery;
  const b = 'test0';
  const path = initialQuery.includes('?p=') ? '/Sushi-project' + initialQuery.match(/(?:\?p=)(.*)(?:&q=)/)[1] : window.location.pathname;
  const root = '#rootCentral';

  if (!queryParam) {
    setQueryParam();
  } else {
    const city = getParameterFromURL('city');
    const address = getParameterFromURL('str');
    const selectCity = document.querySelector('[name=city]');
    selectCity.value = city;

    changeAddressSelectForm(dataBase, city);
    const selectAddress = document.querySelector('[name=address]');
    selectAddress.value = address;
  }
  const dataForSelectedLocation = getDataForSelectedLocation(dataBase);

  setLocationDataOnStaticParts(dataForSelectedLocation);

  withCheckPath(path, root, dataForSelectedLocation, productSpecificationData);
}

export { withCheckURL };
