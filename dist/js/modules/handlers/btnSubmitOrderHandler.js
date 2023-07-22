import { getUserBacket } from '../localStorage.js';
import { sendOrderToLS } from '../../modules/localStorage.js';
import { removeAllProductsFromBacketInLocalStorage } from '../localStorage.js';
import { clearBacket } from '../backet.js';
import { closeModalMessage, showModalMessage } from '../modal.js';
import { setStatusBtnAddToBacket } from '../setStatusBtnAddToBacket.js';

async function btnSubmitOrderHandler({ target }) {
  const userId = target.dataset.userid;
  const order = await getUserBacket(userId);
  const message = await sendOrderToLS(order, userId);
  removeAllProductsFromBacketInLocalStorage(userId);
  clearBacket();
  setStatusBtnAddToBacket();

  const modal = document.querySelector('#modalMessage');
  const modalMessage = modal.querySelector('.modal__content--message');
  modalMessage.innerText = message;
  showModalMessage();

  setTimeout(() => {
    modalMessage.innerText = '';
    closeModalMessage();
  }, 5000);
}

export { btnSubmitOrderHandler };
