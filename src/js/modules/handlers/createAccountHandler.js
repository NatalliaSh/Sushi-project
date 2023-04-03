import { eventBus } from '../eventBus.js';
import { ACTIONS } from '../CONST.js';
import { createAccount } from '../authFirebase.js';
import { showModalMessage, closeModalMessage, clearForm } from './closeModalMessage.js';
import { closeModal } from '../modal.js';
import { formValidator, onFieldChangeHandler } from '../formValidator.js';

const createAccountHandler = (e) => {
  e.preventDefault();
  const {
    target: { elements },
  } = e;

  if (formValidator(elements)) {
    return;
  }

  createAccount(elements.email.value, elements.password.value, elements.userName.value)
    .then(() => {
      showModalMessage();
      const messageContext = document.querySelector('.modal__message--context');
      messageContext.innerText = 'На указанный e-mail отправлена ссылка для верификации. Пожалуйста, перейдите по ней, чтобы активировать аккаунт';
      setTimeout(() => {
        closeModalMessage();
        clearForm(elements);
        closeModal();
      }, 4000);
    })
    .catch((e) => {
      showModalMessage();
      const messageContext = document.querySelector('.modal__message--context');
      messageContext.innerText = 'Error: ' + e.message.match(/(?:auth\/)(\D*)(\))/)[1];
      setTimeout(() => {
        closeModalMessage();
        clearForm(elements);
      }, 3000);
    });
};

const createAccountForm = document.querySelector('#create');
const emailField = createAccountForm.querySelector('input[name="email"]');
const passwordField = createAccountForm.querySelector('input[name="password"]');
const userNameField = createAccountForm.querySelector('input[name="userName"]');

emailField.addEventListener('input', onFieldChangeHandler);
passwordField.addEventListener('input', onFieldChangeHandler);
userNameField.addEventListener('input', onFieldChangeHandler);

createAccountForm.addEventListener('submit', createAccountHandler);
