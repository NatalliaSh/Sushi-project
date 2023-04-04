import { getDataBase, getproductSpecificationData } from './getDataBase.js';
import '../partials/header/search/search.js';
import { addSelectFormOnPage } from '../partials/header/addSelectFormOnPage.js';
import '../partials/about/about.js';
import { setAllContacts } from '../partials/footer/setAllContacts.js';
import { changeSelectAddressHandlerHeader } from './handlers/changeSelectAddressHandler.js';
import { changeSelectCityHandlerHeader } from './handlers/changeSelectCityHandler.js';
import { linkInternalClickHandler } from './handlers/linkInternalClickHandler.js';
import { eventBus } from './eventBus.js';
import { ACTIONS } from './CONST.js';
import { withCheckURL } from './withCheckURL.js';
import { changeRouteHandler } from './handlers/changeRouteHandler.js';
import { windowEventHandler } from './handlers/windowEventHandler.js';
import { renderBacketItemsHandler } from './handlers/renderBacketItemsHandler.js';
import { addProductToBacket } from './backet.js';

async function start() {
  const dataBase = await getDataBase();
  const productSpecificationData = await getproductSpecificationData();

  addSelectFormOnPage(dataBase, '.location__city', '.location__address');
  setAllContacts(dataBase, '.footer__container__right');

  withCheckURL(dataBase, productSpecificationData);

  window.addEventListener('click', linkInternalClickHandler);
  eventBus.subscribe(ACTIONS.changeRoute, (pathname) => changeRouteHandler(pathname, dataBase, productSpecificationData));

  windowEventHandler.register(({ target: { value: city } }) => changeSelectCityHandlerHeader(city, dataBase, productSpecificationData), 'citySelect', 'change');

  windowEventHandler.register(() => changeSelectAddressHandlerHeader(dataBase, productSpecificationData), 'addressSelect', 'change');

  eventBus.subscribe(ACTIONS.renderBacketItems, (userBacket) => renderBacketItemsHandler(userBacket, productSpecificationData, '#backetRoot'));
  eventBus.subscribe(ACTIONS.addToBacket, (data) => addProductToBacket(data, productSpecificationData, '#backetRoot'));
}

export { start };
