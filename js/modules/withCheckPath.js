import { renderReplace } from './renderReplace.js';
import { getMainPage } from './pages/mainPage.js';
import { getSelfProductPage } from './pages/selfProductPage.js';
import { getProductsPage } from './pages/productsPage.js';
import { mainPageSlider } from './sliders/mainPageSlider.js';
import { selfProductPageSlider } from './sliders/selfProductPageSlider.js';
import { getRoutes } from './router.js';
import { getDOMElement } from './getDOMElement.js';
import { ACTIONS, MESSAGE } from './CONST.js';
import { eventBus } from './eventBus.js';
import { setStatusBtnAddToBacket } from '../modules/setStatusBtnAddToBacket.js';
import { getReviewPage } from './pages/review.js';

function isProductInSelectedLocation(dataForSelectedLocation, path, routes) {
  let is = false;
  const arrOfAllCategories = dataForSelectedLocation.menuList;

  if (routes[path] === 'category') {
    is = arrOfAllCategories.includes(decodeURIComponent(path.slice(1)));
  } else if (routes[path] === 'selfProductPage') {
    let arrOfAllProducts = [];
    arrOfAllCategories.forEach((element) => {
      arrOfAllProducts = arrOfAllProducts.concat(dataForSelectedLocation.products[element]);
    });

    is = arrOfAllProducts.includes(decodeURIComponent(path.slice(1)));
  }

  return is;
}

async function withCheckPath(path, root, dataForSelectedLocation, productSpecificationData) {
  let page = '';
  let category = '';
  let parametr = '';
  const routes = getRoutes(productSpecificationData, dataForSelectedLocation);
  if (path === '/' || path === '' || path === '/Sushi-project/') {
    page = getMainPage(dataForSelectedLocation, productSpecificationData, './img/menuImg/productsImg/');
    renderReplace(root, page);
    setStatusBtnAddToBacket();
    mainPageSlider();
  } else if ((routes[path] === 'category' || routes[path] === 'selfProductPage') && isProductInSelectedLocation(dataForSelectedLocation, path, routes)) {
    if (routes[path] === 'category') {
      if (path.includes(encodeURIComponent('Акции'))) {
        parametr = 'sale';
      } else {
        category = decodeURIComponent(path.slice(1));
      }
      page = getProductsPage(dataForSelectedLocation, productSpecificationData, './img/menuImg/productsImg/', category, parametr);
      renderReplace(root, page);
    } else {
      page = getSelfProductPage(productSpecificationData[path.slice(1)], './img/menuImg/productsImg/', path.match(/[^\/](\D)*[^\d]/i)[0], dataForSelectedLocation, productSpecificationData);
      renderReplace(root, page);
      selfProductPageSlider();
    }
    eventBus.dispatch(ACTIONS.newPage, '');
  } else if (path === 'Sushi-project/reviews') {
    page = await getReviewPage();
    renderReplace(root, page);
  } else {
    page = getDOMElement('div', {
      class: 'Error massage text text--bold',
      innerText: MESSAGE,
    });
    renderReplace(root, page);
  }
  window.scroll(top);
}

export { withCheckPath };
