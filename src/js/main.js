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
import { showBacket } from './modules/backet.js';
import './modules/handlers/btnLoginCreateHandler.js';
import './modules/handlers/loginHandler.js';
import './modules/handlers/createAccountHandler.js';
import { setUserStatus } from './modules/setUserStatus.js';
import { localStorageHandler } from './modules/localStorage.js';

start();

async function initialize() {
  const currentUser = await getUser();
  setUserStatus(currentUser);
}

initialize();

eventBus.subscribe(ACTIONS.login, setUserStatus);
eventBus.subscribe(ACTIONS.login, showBacket);
eventBus.subscribe(ACTIONS.login, localStorageHandler);
eventBus.subscribe(ACTIONS.logout, setUserStatus);

const logoutBtn = document.querySelector('#logoutBtn');
logoutBtn.addEventListener('click', () => {
  logout();
});

windowEventHandler.register(btnChoiceHandler, 'newChoiseBtn', 'click');
windowEventHandler.register(btnChoiceHandler, 'popularChoiseBtn', 'click');

windowEventHandler.register(btnPlusMinusInputHandler, 'minusBtn', 'click');
windowEventHandler.register(btnPlusMinusInputHandler, 'plusBtn', 'click');

windowEventHandler.register(btnWantHandler, 'wantBtn', 'click');
windowEventHandler.register(btnAddToBacketHandler, 'addToBacketBtn', 'click');
