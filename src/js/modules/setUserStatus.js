import { hideBacket, showBacket, clearBacket } from './backet.js';
import { setStatusBtnAddToBacket } from '../modules/setStatusBtnAddToBacket.js';
import { setActiveClassesInLogButtonMobile } from './handlers/mobileMenuHandlers.js';

export const setUserStatus = async (user) => {
  const userName = document.querySelector('.backet__user--userName');
  const submitBtn = document.querySelector('#submitOrder');

  if (user) {
    userName.innerText = user.displayName;
    submitBtn.setAttribute('data-userId', user.uid);
    await showBacket(user);
  } else {
    userName.innerText = '';
    clearBacket();
    hideBacket();
  }
  setActiveClassesInLogButtonMobile(user);
  setStatusBtnAddToBacket();
};
