import { getDataBase, getproductSpecificationData } from './getDataBase.js';
import '../partials/header/search/search.js';
import { addSelectFormOnPage } from '../partials/header/addSelectFormOnPage.js';
import { setPhones } from '../partials/header/setPhones.js';
import '../partials/about/about.js';
import { setAllContacts } from '../partials/footer/setAllContacts.js';
import { setLeftMenuOnPage } from '../partials/menu/setMenuOnPage.js';
import { changeSelectAddressHandlerHeader } from './handlers/changeSelectAddressHandler.js';
import { changeSelectCityHandlerHeader } from './handlers/changeSelectCityHandler.js';
import { linkInternalClickHandler } from './handlers/linkInternalClickHandler.js';
import { getDataForSelectedLocation } from './getDataForSelectedLocation.js';
import { eventBus } from './eventBus.js';
import { ACTIONS } from './CONST.js';
import { getRoutesForSelfProductPage } from './router.js';
import { getProductsPage } from './pages/productsPage.js';
import { renderReplace } from './renderReplace.js';

import { getSelfProductPage } from './pages/selfProductPage.js';
import { getMainPage } from './pages/mainPage.js';
import { selfProductPageSlider } from '../modules/sliders/selfProductPageSlider.js';
import { getParameterFromURL } from './getParameterFromURL.js';
import { getLeftMenuCart } from '../partials/cards/getLeftMenuCart.js';
import { phoneNumberCart } from '../partials/header/phoneNumberCart.js';
import { mainPageSlider } from './sliders/mainPageSlider.js';
import { getAddressesForSelectedCity } from '../partials/header/getAddressesForSelectedCity.js';
import { getSelectForm } from '../partials/header/getSelectForm.js';
import { withCheckURL } from './withCheckURL.js';
import { setQueryParam } from './setQueryParam.js';

async function start() {
  const dataBase = await getDataBase();
  const productSpecificationData = await getproductSpecificationData();
  const routesForSelfProductPage = getRoutesForSelfProductPage(productSpecificationData);

  addSelectFormOnPage(dataBase, '.location__city', '.location__address');
  setAllContacts(dataBase, '.footer__container__right');
  withCheckURL(dataBase, productSpecificationData, routesForSelfProductPage);

  const changeRouteHandler = (path) => {
    const root = '#rootCentral';
    let page = '';
    let category = '';
    let parametr = '';

    if (path.includes('&category')) {
      if (path.includes(encodeURIComponent('Акции'))) {
        parametr = 'sale';
      } else {
        category = decodeURIComponent(path.split('=')[1]);
      }
      const dataForSelectedLocation = getDataForSelectedLocation(dataBase);
      page = getProductsPage(dataForSelectedLocation, productSpecificationData, '../../img/menuImg/productsImg/', category, parametr);
    } else if (routesForSelfProductPage[path] === 'selfProductPage') {
      setQueryParam();
      page = getSelfProductPage(productSpecificationData[path.slice(1)], '../../img/menuImg/productsImg/', path.match(/[^\/](\D)*[^\d]/i)[0], dataForSelectedLocation, productSpecificationData);
    } else {
    }

    renderReplace(root, page);
    mainPageSlider();
    selfProductPageSlider();
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
