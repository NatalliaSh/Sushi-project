import { showModalAuth } from '../modal.js';

export const btnLoginCreateHandler = ({ target }) => {
  showModalAuth();
  let input = '';
  if (target.id === 'createAccountBtnToOpenModal') {
    input = document.querySelector('#tab-2');
  } else {
    input = document.querySelector('#tab-1');
  }
  input.checked = true;
};

const createBtn = document.querySelector('#createAccountBtnToOpenModal');
const loginBtn = document.querySelector('#loginBtnToOpenModal');

createBtn.addEventListener('click', btnLoginCreateHandler);
loginBtn.addEventListener('click', btnLoginCreateHandler);
