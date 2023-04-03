import { eventBus } from './eventBus.js';
import { ACTIONS } from './CONST.js';

const showBacket = () => {
  const loginBlock = document.querySelector('.loginLogout');
  const backetBlock = document.querySelector('.backet');
  loginBlock.classList.remove('active');
  backetBlock.classList.add('active');
};

const hideBacket = () => {
  const loginBlock = document.querySelector('.loginLogout');
  const backetBlock = document.querySelector('.backet');
  backetBlock.classList.remove('active');
  loginBlock.classList.add('active');
};

/*const backet = document.querySelector('.backet');

const setCount = () => {
  const backetItems = JSON.parse(localStorage.getItem('backet'));
  backet.setAttribute('data-count', backetItems.length);
};

const clear = () => {
  backet.removeAttribute('data-count');
};

eventBus.subscribe(ACTIONS.login, setCount);
eventBus.subscribe(ACTIONS.logout, clear);*/

export { showBacket, hideBacket /*setCount, clear */ };
