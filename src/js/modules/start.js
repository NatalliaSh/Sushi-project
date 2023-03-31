import { getDataBase, getproductSpecificationData } from './getDataBase.js';
import '../partials/header/search/search.js';
import { addSelectFormOnPage } from '../partials/header/addSelectFormOnPage.js';
import '../partials/about/about.js';
import { setAllContacts } from '../partials/footer/setAllContacts.js';
import { changeSelectAddressHandlerHeader } from './handlers/changeSelectAddressHandler.js';
import { changeSelectCityHandlerHeader } from './handlers/changeSelectCityHandler.js';
import { linkInternalClickHandler } from './handlers/linkInternalClickHandler.js';
import { getDataForSelectedLocation } from './getDataForSelectedLocation.js';
import { eventBus } from './eventBus.js';
import { ACTIONS } from './CONST.js';
import { withCheckPath } from './withCheckPath.js';
import { withCheckURL } from './withCheckURL.js';
import { getParameterFromURL } from './getParameterFromURL.js';
import { getSelectedOption } from './getSelectedOption.js';
import { changeAddressSelectForm } from '../partials/header/changeAddressSelectForm.js';
import { setLocationDataOnStaticParts } from './setLocationDataOnStaticParts.js';

async function start() {
  const dataBase = await getDataBase();
  const productSpecificationData = await getproductSpecificationData();

  addSelectFormOnPage(dataBase, '.location__city', '.location__address');
  setAllContacts(dataBase, '.footer__container__right');

  withCheckURL(dataBase, productSpecificationData);

  const changeRouteHandler = (path) => {
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

  const windowPopState = (e) => {
    const {
      target: {
        location: { pathname },
      },
    } = e;

    eventBus.dispatch(ACTIONS.changeRoute, pathname);
  };

  window.onpopstate = windowPopState;

  eventBus.subscribe(ACTIONS.changeRoute, changeRouteHandler);

  //Add listeners on select forms
  const selectCity = document.querySelector('[name="city"]');
  const selectAddress = document.querySelector('[name="address"]');

  selectCity.addEventListener('change', ({ target: { value: city } }) => changeSelectCityHandlerHeader(city, dataBase, productSpecificationData));

  selectAddress.addEventListener('change', () => changeSelectAddressHandlerHeader(dataBase, productSpecificationData));

  window.addEventListener('click', linkInternalClickHandler);
}

export { start };
