import { ACTIONS } from '../CONST.js';
import { eventBus } from '../eventBus.js';
import { windowEventHandler } from './windowEventHandler.js';
import { showModalAuth } from '../modal.js';
import { logout } from '../authFirebase.js';

const menuRoot = document.querySelector('.container__left');
const backetRoot = document.querySelector('.container__right');

const btnMobileMenuHandler = ({ currentTarget }) => {
  let root = '';
  if (currentTarget.id === 'openMenuButton') {
    root = menuRoot;
    backetRoot.classList.remove('active');
  } else if (currentTarget.id === 'openBacketButton') {
    root = backetRoot;
    menuRoot.classList.remove('active');
  }
  document.body.classList.remove('lock');
  root.classList.toggle('active');

  if (root.classList.contains('active')) {
    document.body.classList.add('lock');
  }
};

const closeMenuMobile = () => {
  menuRoot.classList.remove('active');
  backetRoot.classList.remove('active');
  document.body.classList.remove('lock');
};

export const setActiveClassesInLogButtonMobile = (isUser) => {
  const loginButn = document.querySelector('#loginButtonMobileMenu');
  const logoutButn = document.querySelector('#logoutButtonMobileMenu');

  if (isUser) {
    loginButn.classList.remove('active');
    logoutButn.classList.add('active');
  } else {
    logoutButn.classList.remove('active');
    loginButn.classList.add('active');
  }
};

const logButtonMobileMenuHandler = (eo) => {
  if (eo.target.id === 'loginButtonMobileMenu' || eo.target.classList.contains('fa-arrow-right-to-bracket')) {
    showModalAuth();
  } else {
    logout();
  }
};

const openMenuButton = document.querySelector('#openMenuButton');
const openBacketButton = document.querySelector('#openBacketButton');
openMenuButton.addEventListener('click', btnMobileMenuHandler);
openBacketButton.addEventListener('click', btnMobileMenuHandler);

const logButton = document.querySelector('#logButtonMobileMenu');
logButton.addEventListener('click', logButtonMobileMenuHandler);

eventBus.subscribe(ACTIONS.changeRoute, closeMenuMobile);
windowEventHandler.register(closeMenuMobile, 'closeMobileMenu', 'click');
windowEventHandler.register(closeMenuMobile, 'submitOrder', 'click');
windowEventHandler.register(closeMenuMobile, 'closeMobileBacket', 'click');
