import { getDataForSelectedLocation } from '../getDataForSelectedLocation.js';
import { renderReplace } from '../renderReplace.js';
import { phoneNumberCart } from '../../partials/header/phoneNumberCart.js';
import { getLeftMenuCart } from '../../partials/cards/getLeftMenuCart.js';
import { getCentralMenuCards } from '../../partials/cards/getCentralMenuCards.js';
import { setQueryParam } from '../setQueryParam.js';
import { getMainPage } from '../pages/mainPage.js';
import { mainPageSlider } from '../sliders/mainPageSlider.js';

export const changeSelectAddressHandlerHeader = (dataBase, productSpecificationData) => {
  setQueryParam();
  const data = getDataForSelectedLocation(dataBase);
  const dataOfphones = data.phones;
  const menuLeft = getLeftMenuCart(data, '../../../img/menuImg/menuLogo/');
  const mainPage = getMainPage(data, productSpecificationData, '../../img/menuImg/productsImg/');
  renderReplace('.contacts', phoneNumberCart(dataOfphones, true), true);
  renderReplace('#menuRootLeft', menuLeft);
  renderReplace('#rootCentral', mainPage);
  mainPageSlider();
};
