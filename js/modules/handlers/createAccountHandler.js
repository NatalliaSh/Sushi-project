import { createAccount } from '../authFirebase.js';
import { showErrorModalMessage, closeErrorModalMessage, clearForm } from './errorModalMessageHandlers.js';
import { closeModalAuth } from '../modal.js';
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
      showErrorModalMessage();
      const messageContext = document.querySelector('.modal__message--context');
      messageContext.innerText = 'На указанный e-mail отправлена ссылка для верификации. Пожалуйста, перейдите по ней, чтобы активировать аккаунт';
      setTimeout(() => {
        closeErrorModalMessage();
        clearForm(elements);
        closeModalAuth();
      }, 4000);
    })
    .catch((e) => {
      showErrorModalMessage();
      const messageContext = document.querySelector('.modal__message--context');
      messageContext.innerText = 'Error: ' + e.message.match(/(?:auth\/)(\D*)(\))/)[1];
      setTimeout(() => {
        closeErrorModalMessage();
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
