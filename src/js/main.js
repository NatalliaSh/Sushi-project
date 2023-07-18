import { start } from './modules/start.js';
import './modules/handlers/windowPopState.js';
import { windowEventHandler } from './modules/handlers/windowEventHandler.js';
import { btnChoiceHandler } from './modules/handlers/btnChoiceHandler.js';
import { btnPlusMinusInputHandler } from './modules/handlers/btnPlusMinusInputHandler.js';
import { btnWantHandler } from './modules/handlers/btnWantHandler.js';
import { btnAddToBacketHandler } from './modules/handlers/btnAddToBacketHandler.js';
import { eventBus } from './modules/eventBus.js';
import { ACTIONS } from './modules/CONST.js';
import { getUser, logout } from './modules/authFirebase.js';
import './modules/handlers/btnLoginCreateHandler.js';
import './modules/handlers/loginHandler.js';
import './modules/handlers/createAccountHandler.js';
import { setUserStatus } from './modules/setUserStatus.js';
import { localStorageHandler, addProductToLocalStorage, removeProductFromLocalStorage } from './modules/localStorage.js';
import { removeProductFromBacket } from './modules/backet.js';
import { changesInBacketHandler } from './modules/handlers/changesInBacketHandler.js';
import { btnSubmitOrderHandler } from './modules/handlers/btnSubmitOrderHandler.js';
import { setStatusBtnAddToBacket, changeBtnAddToBacketIFRemoveFromBacket } from './modules/setStatusBtnAddToBacket.js';

import './modules/handlers/MobileMenuHandlers.js';

start();

async function initialize() {
  const currentUser = await getUser();
  await setUserStatus(currentUser);
  setStatusBtnAddToBacket();
}

initialize();

eventBus.subscribe(ACTIONS.login, setUserStatus);
eventBus.subscribe(ACTIONS.login, localStorageHandler);
//eventBus.subscribe(ACTIONS.login, setStatusBtnAddToBacket);
eventBus.subscribe(ACTIONS.logout, setUserStatus);
//eventBus.subscribe(ACTIONS.logout, setStatusBtnAddToBacket);
eventBus.subscribe(ACTIONS.addToBacket, addProductToLocalStorage);
eventBus.subscribe(ACTIONS.removeFromBacket, removeProductFromLocalStorage);
eventBus.subscribe(ACTIONS.removeFromBacket, (producid) => removeProductFromBacket(producid));
eventBus.subscribe(ACTIONS.removeFromBacket, (producid) => changeBtnAddToBacketIFRemoveFromBacket(producid));
eventBus.subscribe(ACTIONS.changesInBacket, changesInBacketHandler);
eventBus.subscribe(ACTIONS.changesInBacket, setStatusBtnAddToBacket);
eventBus.subscribe(ACTIONS.newPage, setStatusBtnAddToBacket);

windowEventHandler.register(btnChoiceHandler, 'newChoiseBtn', 'click');
windowEventHandler.register(btnChoiceHandler, 'popularChoiseBtn', 'click');

windowEventHandler.register(btnPlusMinusInputHandler, 'minusBtn', 'click');
windowEventHandler.register(btnPlusMinusInputHandler, 'plusBtn', 'click');

windowEventHandler.register(logout, 'logoutBtn', 'click');

windowEventHandler.register(btnWantHandler, 'wantBtn', 'click');
windowEventHandler.register(btnAddToBacketHandler, 'addToBacketBtn', 'click');
windowEventHandler.register(btnSubmitOrderHandler, 'submitOrder', 'click');
