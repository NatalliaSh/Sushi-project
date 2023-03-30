import { setQueryParam } from './setQueryParam.js';
import { setLocationDataOnStaticParts } from './setLocationDataOnStaticParts.js';
import { getDataForSelectedLocation } from './getDataForSelectedLocation.js';
import { getMainPage } from './pages/mainPage.js';
import { getProductsPage } from './pages/productsPage.js';
import { getSelfProductPage } from './pages/selfProductPage.js';
import { getParameterFromURL } from './getParameterFromURL.js';
import { changeAddressSelectForm } from '../partials/header/changeAddressSelectForm.js';
import { renderReplace } from './renderReplace.js';
import { mainPageSlider } from './sliders/mainPageSlider.js';
import { selfProductPageSlider } from './sliders/selfProductPageSlider.js';

function withCheckURL(dataBase, productSpecificationData, routesForSelfProductPage) {
  const queryParam = window.location.search;
  const path = window.location.pathname;
  const root = '#rootCentral';
  let page = '';
  let category = '';
  let parametr = '';

  //the first start page
  if (!queryParam) {
    setQueryParam();
    const dataForSelectedLocation = getDataForSelectedLocation(dataBase);
    setLocationDataOnStaticParts(dataForSelectedLocation);

    if (path === '/' || path === '') {
      page = getMainPage(dataForSelectedLocation, productSpecificationData, '../../img/menuImg/productsImg/');
      renderReplace(root, page);
      mainPageSlider();
    } else if (routesForSelfProductPage[path] === 'selfProductPage') {
      page = getSelfProductPage(productSpecificationData[path.slice(1)], '../../img/menuImg/productsImg/', path.match(/[^\/](\D)*[^\d]/i)[0], dataForSelectedLocation, productSpecificationData);
      renderReplace(root, page);
      selfProductPageSlider();
    }
  }

  if (queryParam) {
    const city = getParameterFromURL('city');
    const address = getParameterFromURL('str');
    const categoryFromURL = getParameterFromURL('category');
    const selectCity = document.querySelector('[name=city]');
    selectCity.value = city;

    changeAddressSelectForm(dataBase, city);
    const selectAddress = document.querySelector('[name=address]');
    selectAddress.value = address;

    const data = getDataForSelectedLocation(dataBase);
    setLocationDataOnStaticParts(data);

    if (path === '/' || path === '') {
      if (categoryFromURL) {
        if (categoryFromURL === 'Акции') {
          parametr = 'sale';
        } else {
          category = categoryFromURL;
        }
        page = getProductsPage(data, productSpecificationData, '../../img/menuImg/productsImg/', category, parametr);
        renderReplace(root, page);
      } else {
        page = getMainPage(data, productSpecificationData, '../../img/menuImg/productsImg/');
        renderReplace(root, page);
        mainPageSlider();
      }
    } else if (routesForSelfProductPage[path] === 'selfProductPage') {
      page = getSelfProductPage(productSpecificationData[path.slice(1)], '../../img/menuImg/productsImg/', path.match(/[^\/](\D)*[^\d]/i)[0], data, productSpecificationData);
      renderReplace(root, page);
      selfProductPageSlider();
    }
  }
}

export { withCheckURL };
