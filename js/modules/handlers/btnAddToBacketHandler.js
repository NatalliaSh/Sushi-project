import { ACTIONS } from '../CONST.js';
import { eventBus } from '../eventBus.js';
import { getUser } from '../authFirebase.js';
import { closeModalMessage, showModalMessage } from '../modal.js';

export const btnAddToBacketHandler = async ({ target }) => {
  const ifUser = await getUser();
  const mainContainer = target.offsetParent;
  const wantBtn = mainContainer.querySelector('#wantBtn');
  const addToBacketBtn = mainContainer.querySelector('#addToBacketBtn');
  const addToBacketCont = mainContainer.querySelector('.orderButtonsContainer');
  const input = mainContainer.querySelector('input');
  const span = addToBacketCont.querySelector('span');

  if (ifUser) {
    if (input.value === '0') {
      addToBacketCont.classList.remove('active');
      wantBtn.classList.add('active');
      addToBacketBtn.classList.remove('green');
      span.innerText = '';
      const producid = target.dataset.producid;
      eventBus.dispatch(ACTIONS.removeFromBacket, producid);
    } else {
      const amount = input.value;
      span.innerText = `х${amount}`;
      addToBacketBtn.classList.add('green');
      const producid = target.dataset.producid;
      const payload = { [producid]: amount };
      eventBus.dispatch(ACTIONS.addToBacket, payload);
    }
  } else {
    const modal = document.querySelector('#modalMessage');
    const modalMessage = modal.querySelector('.modal__content--message');
    modalMessage.innerText = 'Пожалуйста, войдите в свой аккаунт или зарегистрируйтесь, чтобы иметь возможность добавить товары в корзину';
    showModalMessage();

    setTimeout(() => {
      modalMessage.innerText = '';
      closeModalMessage();
    }, 5000);

    input.value = 1;
    addToBacketCont.classList.remove('active');
    wantBtn.classList.add('active');
  }
};
