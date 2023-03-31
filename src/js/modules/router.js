import { eventBus } from './eventBus.js';
import { ACTIONS } from './CONST.js';
import { ROUTS } from './CONST.js';
import { getProductsPage } from './pages/productsPage.js';

import { getDataForSelectedLocation } from './getDataForSelectedLocation.js';
import { dataBase } from './dataBase/dataBase.js';
import { productSpecificationData } from './dataBase/productSpecificationData.js';
import { renderReplace } from './renderReplace.js';

function getRoutes(productSpecificationData, dataForSelectedLocation) {
  const listOfSelfProduct = Object.keys(productSpecificationData);
  const listOfSelfProductPath = listOfSelfProduct.map((element) => '/' + element);

  const listOfCategories = dataForSelectedLocation.menuList;
  const listOfCategoriesPath = listOfCategories.map((element) => '/' + encodeURIComponent(element));

  const routes = {};
  listOfSelfProductPath.forEach((element) => (routes[element] = 'selfProductPage'));
  listOfCategoriesPath.forEach((element) => (routes[element] = 'category'));

  return routes;
}

//const dataForSelectedLocation = getDataForSelectedLocation(dataBase);
//const routes = getRoutes(dataForSelectedLocation, productSpecificationData);
//const root = document.querySelector('#rootCentral');

/*const changeRouteHandler = (path) => {
  if (routes[path] === 'productsPage') {
    const page = getProductsPage(dataForSelectedLocation, productSpecificationData, '../../img/menuImg/productsImg', path.slice(1));
  } /*else if (routes[path] === 'selfProductPage') {
    const page = getSelfProductsPage();
  } else {
    const page = getMainPage();
  }*/
/* renderReplace(root, page);
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

*/ export { getRoutes };
