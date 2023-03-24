import { eventBus } from './eventBus.js';
import { ACTIONS } from './CONST.js';
import { getProductsPage } from './pages/productsPage.js';
import { listOfRouts } from './menuContent/setMenuOnPage.js';

const root = document.querySelector('#root');
const ROUTS = {
  WOK: 'wok',
  Салаты: 'salads',
  Напитки: 'drinks',
  Акции: 'sale',
  Суши: 'sushi',
  Сеты: 'sets',
};

function getListOfRouts(dataForSelectedLocation, productSpecificationData) {
  let obj = {};
  const arrOfCaterories = dataForSelectedLocation.menuList;
  const arrOfRoutsForCategories = arrOfCaterories.map((element) => {
    return '/' + ROUTS[element];
  });
  obj.productsPage = arrOfRoutsForCategories;

  obj.selfProductPage = [];
  for (let key in productSpecificationData) {
    obj.selfProductPage.push('/' + key);
  }
}

// const routes = {

//   '/backet': productsPage, //на этот слеш отрендорить эту страницу
//   '/user': selfProductPage,
// };

listOfRouts.productsPage.forEach((element) => (routes[element] = productsPage));

listOfRouts.selfProductPage.forEach((element) => (routes[element] = selfProductPage));

console.log(routes);

const changeRouteHandler = (path) => {
  const page = ROUTS[path] || '';
  root.innerHTML = page;
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

export { getListOfRouts };
