import { renderReplace } from './renderReplace.js';
import { getMainPage } from './pages/mainPage.js';
import { getSelfProductPage } from './pages/selfProductPage.js';
import { getProductsPage } from './pages/productsPage.js';
import { mainPageSlider } from './sliders/mainPageSlider.js';
import { selfProductPageSlider } from './sliders/selfProductPageSlider.js';
import { getRoutes } from './router.js';

function withCheckPath(path, root, dataForSelectedLocation, productSpecificationData) {
  let page = '';
  let category = '';
  let parametr = '';
  const routes = getRoutes(productSpecificationData, dataForSelectedLocation);
  if (path === '/' || path === '') {
    page = getMainPage(dataForSelectedLocation, productSpecificationData, '../../img/menuImg/productsImg/');
    renderReplace(root, page);
    mainPageSlider();
  } else if (routes[path] === 'category') {
    if (path.includes(encodeURIComponent('Акции'))) {
      parametr = 'sale';
    } else {
      category = decodeURIComponent(path.slice(1));
    }
    page = getProductsPage(dataForSelectedLocation, productSpecificationData, '../../img/menuImg/productsImg/', category, parametr);
    renderReplace(root, page);
  } else if (routes[path] === 'selfProductPage') {
    page = getSelfProductPage(productSpecificationData[path.slice(1)], '../../img/menuImg/productsImg/', path.match(/[^\/](\D)*[^\d]/i)[0], dataForSelectedLocation, productSpecificationData);
    renderReplace(root, page);
    selfProductPageSlider();
  }
}

export { withCheckPath };
