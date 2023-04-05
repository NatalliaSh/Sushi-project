import { setPhones } from '../partials/header/setPhones.js';
import { setLeftMenuOnPage, setMobileMenu } from '../partials/menu/setMenuOnPage.js';

function setLocationDataOnStaticParts(dataForSelectedLocation) {
  setPhones(dataForSelectedLocation, '.contacts', true);
  setLeftMenuOnPage(dataForSelectedLocation, '#menuRootLeft');
  setMobileMenu(dataForSelectedLocation, '#menuMobile');
}
export { setLocationDataOnStaticParts };
