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
import { getRoutesForSelfProductPage } from './router.js';
import { getProductsPage } from './pages/productsPage.js';
import { renderReplace } from './renderReplace.js';

import { getSelfProductPage } from './pages/selfProductPage.js';
import { selfProductPageSlider } from '../modules/sliders/selfProductPageSlider.js';
import { withCheckURL } from './withCheckURL.js';

async function start() {
  const dataBase = await getDataBase();
  const productSpecificationData = await getproductSpecificationData();
  const routesForSelfProductPage = getRoutesForSelfProductPage(productSpecificationData);

  addSelectFormOnPage(dataBase, '.location__city', '.location__address');
  setAllContacts(dataBase, '.footer__container__right');
  withCheckURL(dataBase, productSpecificationData, routesForSelfProductPage);

  const changeRouteHandler = (path) => {
    let page = '';
    let category = '';
    let parametr = '';
    const root = '#rootCentral';
    const dataForSelectedLocation = getDataForSelectedLocation(dataBase);

    if (path.includes('&category')) {
      if (path.includes(encodeURIComponent('Акции'))) {
        parametr = 'sale';
      } else {
        category = decodeURIComponent(path.split('=')[1]);
      }
      page = getProductsPage(dataForSelectedLocation, productSpecificationData, '../../img/menuImg/productsImg/', category, parametr);
      renderReplace(root, page);
    } else if (routesForSelfProductPage[path] === 'selfProductPage') {
      page = getSelfProductPage(productSpecificationData[path.slice(1)], '../../img/menuImg/productsImg/', path.match(/[^\/](\D)*[^\d]/i)[0], dataForSelectedLocation, productSpecificationData);
      renderReplace(root, page);
      selfProductPageSlider();
    }
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
