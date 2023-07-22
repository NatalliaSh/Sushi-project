import { setQueryParam } from './setQueryParam.js';
import { setLocationDataOnStaticParts } from './setLocationDataOnStaticParts.js';
import { getDataForSelectedLocation } from './getDataForSelectedLocation.js';
import { withCheckPath } from './withCheckPath.js';
import { getParameterFromURL } from './getParameterFromURL.js';
import { changeAddressSelectForm } from '../partials/header/changeAddressSelectForm.js';

function withCheckURL(dataBase, productSpecificationData) {
  const initialQuery = window.location.search;

  const queryParam = initialQuery.includes('?p=') ? initialQuery.replace(/.*q=/, '?') : initialQuery;
  const path = initialQuery.includes('?p=') ? match(/(?:\?p=)(.*)(?=&q=)/)[1] : window.location.pathname;
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

/*'?p=/%D0%A1%D1%83%D1%88%D0%B8&q=city=%D0%9C%D0%B8%D0%BD%D1%81%D0%BA~and~str=%D0%9F%D1%80%D0%B8%D1%82%D1%8B%D1%86%D0%BA%D0%BE%D0%B3%D0%BE%20100'

"?city=%D0%9C%D0%B8%D0%BD%D1%81%D0%BA&str=%D0%9F%D1%80%D0%B8%D1%82%D1%8B%D1%86%D0%BA%D0%BE%D0%B3%D0%BE%20"

(?:q=)(.*)*/
