import { ACTIONS } from '../CONST.js';
import { eventBus } from '../eventBus.js';
import { windowEventHandler } from '../handlers/windowEventHandler.js';

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

/*const logButtonHandler = ({ currentTarget }) => {
  if (currentTarget.id === 'login') {
    eventBus.dispatch(ACTIONS.login)
  } else if (currentTarget.id === 'openBacketButton') {
    root = backetRoot;
    menuRoot.classList.remove('active');
  }
  document.body.classList.remove('lock');
  root.classList.toggle('active');

  if (root.classList.contains('active')) {
    document.body.classList.add('lock');
  }
};*/

const openMenuButton = document.querySelector('#openMenuButton');
const openBacketButton = document.querySelector('#openBacketButton');
openMenuButton.addEventListener('click', btnMobileMenuHandler);
openBacketButton.addEventListener('click', btnMobileMenuHandler);

eventBus.subscribe(ACTIONS.changeRoute, closeMenuMobile);
windowEventHandler.register(closeMenuMobile, 'closeMobileMenu', 'click');
windowEventHandler.register(closeMenuMobile, 'submitOrder', 'click');
windowEventHandler.register(closeMenuMobile, 'closeMobileBacket', 'click');
