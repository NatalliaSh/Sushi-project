import { setPhones } from '../partials/header/setPhones.js';
import { setLeftMenuOnPage } from '../partials/menu/setMenuOnPage.js';

function setLocationDataOnStaticParts(dataForSelectedLocation) {
  setPhones(dataForSelectedLocation, '.contacts', true);
  setLeftMenuOnPage(dataForSelectedLocation, '#menuRootLeft');
}
export { setLocationDataOnStaticParts };
