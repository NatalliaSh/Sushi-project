import { eventBus } from './eventBus.js';
import { ACTIONS } from './CONST.js';

const modalAuth = document.querySelector('#modalAuth');
const closerAuth = modalAuth.querySelector('.modal__close');
const modalMessage = document.querySelector('#modalMessage');
const closerMessage = modalMessage.querySelector('.modal__close');

closerAuth.addEventListener('click', () => {
  modalAuth.classList.remove('active');
});

closerMessage.addEventListener('click', () => {
  modalMessage.classList.remove('active');
});

const showModalAuth = () => {
  modalAuth.classList.add('active');
};

const closeModalAuth = () => {
  modalAuth.classList.remove('active');
};

const showModalMessage = () => {
  modalMessage.classList.add('active');
};

const closeModalMessage = () => {
  modalMessage.classList.remove('active');
};

eventBus.subscribe(ACTIONS.login, closeModalAuth);

export { showModalAuth, closeModalAuth, showModalMessage, closeModalMessage };
