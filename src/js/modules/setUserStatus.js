import { hideBacket, showBacket } from './backet.js';

export const setUserStatus = (user) => {
  const userName = document.querySelector('.backet__user--userName');
  if (user) {
    userName.innerText = user.displayName;
    showBacket();
  } else {
    userName.innerText = '';
    hideBacket();
  }
};
