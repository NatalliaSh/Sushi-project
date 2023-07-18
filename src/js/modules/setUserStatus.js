import { hideBacket, showBacket } from './backet.js';
import { setActiveClassesInLogButtonMobile } from '../modules/handlers/MobileMenuHandlers.js';

export const setUserStatus = (user) => {
  const userName = document.querySelector('.backet__user--userName');
  const submitBtn = document.querySelector('#submitOrder');

  if (user) {
    userName.innerText = user.displayName;
    submitBtn.setAttribute('data-userId', user.uid);
    showBacket(user);
  } else {
    userName.innerText = '';
    hideBacket();
  }
  setActiveClassesInLogButtonMobile(user);
};
