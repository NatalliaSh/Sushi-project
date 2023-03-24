import { getDataBase, getproductSpecificationData } from './getDataBase.js';
import '../partials/header/search/search.js';
import { addSelectFormOnPage } from '../partials/header/addSelectFormOnPage.js';
import { setPhones } from '../partials/header/setPhones.js';
import '../partials/about/about.js';
import { setAllContacts } from '../partials/footer/setAllContacts.js';
import { setLeftMenuOnPage } from '../partials/menu/setMenuOnPage.js';
import { setCentralMenuOnPage } from '../partials/menu/setMenuOnPage.js';
import { changeSelectAddressHandlerHeader } from './handlers/changeSelectAddressHandler.js';
import { changeSelectCityHandlerHeader } from './handlers/changeSelectCityHandler.js';

async function start() {
  const dataBase = await getDataBase();
  const productSpecificationData = await getproductSpecificationData();

  addSelectFormOnPage(dataBase, '.location__city', '.location__address');
  setPhones(dataBase, '.contacts', true);
  setAllContacts(dataBase, '.footer__container__right');
  setLeftMenuOnPage(dataBase, '#menuRootLeft');
  setCentralMenuOnPage(dataBase, '#rootCentral');

  //Add listeners on select forms
  const selectCity = document.querySelector('[name="city"]');
  selectCity.addEventListener('change', ({ target: { value: city } }) => changeSelectCityHandlerHeader(city, dataBase));

  const selectAddress = document.querySelector('[name="address"]');
  selectAddress.addEventListener('change', ({ target: { value: address } }) => changeSelectAddressHandlerHeader(address, dataBase));
}

export { start };
