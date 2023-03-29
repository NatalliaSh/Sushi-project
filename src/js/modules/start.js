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
import { ROUTS } from './CONST.js';
import { eventBus } from './eventBus.js';
import { ACTIONS } from './CONST.js';
import { getRoutes } from './router.js';
import { getProductsPage } from './pages/productsPage.js';
import { renderReplace } from './renderReplace.js';
import { getSelectedOption } from './getSelectedOption.js';
import { setQueryParam } from './setQueryParam.js';
import { getSelfProductPage } from './pages/selfProductPage.js';
import { getMainPage } from './pages/mainPage.js';
import { numberBtnMinusHandler } from './buttons/inputNumberButtons.js';
import { numberBtnPlusHandler } from './buttons/inputNumberButtons.js';

async function start() {
  const dataBase = await getDataBase();
  const productSpecificationData = await getproductSpecificationData();

  addSelectFormOnPage(dataBase, '.location__city', '.location__address');
  setQueryParam();
  setPhones(dataBase, '.contacts', true);
  setAllContacts(dataBase, '.footer__container__right');
  setLeftMenuOnPage(dataBase, '#menuRootLeft');

  //main page
  const dataForSelectedLocation = getDataForSelectedLocation(dataBase);
  getMainPage(dataForSelectedLocation, productSpecificationData, '../../img/menuImg/productsImg/', '#rootCentral');

  const routes = getRoutes(productSpecificationData);
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
      page = getProductsPage(dataForSelectedLocation, productSpecificationData, '../../img/menuImg/productsImg/', category, parametr);
    } else if (routes[path] === 'selfProductPage') {
      page = getSelfProductPage(productSpecificationData[path.slice(1)], '../../img/menuImg/productsImg/', path.slice(1, path.length - 1), dataForSelectedLocation, productSpecificationData);
    } /* else {
      const page = getMainPage();
    }*/

    renderReplace(root, page);
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

  selectCity.addEventListener('change', ({ target: { value: city } }) => changeSelectCityHandlerHeader(city, dataBase));

  selectAddress.addEventListener('change', () => changeSelectAddressHandlerHeader(dataBase));

  window.addEventListener('click', linkInternalClickHandler);
}

export { start };
