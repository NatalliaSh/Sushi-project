import { getDOMElement } from '../getDOMElement.js';

export const btnAddToBacketHandler = ({ target }) => {
  const mainContainer = target.offsetParent;
  const wantBtn = mainContainer.querySelector('#wantBtn');
  const addToBacketBtn = mainContainer.querySelector('#addToBacketBtn');
  const addToBacketCont = mainContainer.querySelector('.orderButtonsContainer');
  const input = mainContainer.querySelector('input');
  const span = addToBacketCont.querySelector('span');

  if (input.value === '0') {
    addToBacketCont.classList.remove('active');
    wantBtn.classList.add('active');
    addToBacketBtn.classList.remove('green');
    span.innerText = '';
  } else {
    span.innerText = `х${input.value}`;
    addToBacketBtn.classList.add('green');
  }
};
