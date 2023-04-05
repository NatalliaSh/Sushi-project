import { ACTIONS } from '../CONST.js';
import { eventBus } from '../eventBus.js';
import { windowEventHandler } from '../handlers/windowEventHandler.js';

const menuMobile = document.querySelector('#menuMobile');

const closeMenuMobile = () => {
  menuMobile.classList.remove('active');
};

eventBus.subscribe(ACTIONS.changeRoute, closeMenuMobile);
windowEventHandler.register(closeMenuMobile, 'closeMobileMenu', 'click');
windowEventHandler.register(
  () => {
    menuMobile.classList.toggle('active');
  },
  'openMenuButton',
  'click',
);
