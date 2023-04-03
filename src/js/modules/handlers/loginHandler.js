import { eventBus } from '../eventBus.js';
import { ACTIONS } from '../CONST.js';
import { login } from '../authFirebase.js';
import { showModalMessage, closeModalMessage, clearForm } from './closeModalMessage.js';
import { formValidator, onFieldChangeHandler } from '../formValidator.js';

const loginHandler = (e) => {
  e.preventDefault();
  const {
    target: { elements },
  } = e;

  if (formValidator(elements)) {
    return;
  }

  login(elements.email.value, elements.password.value)
    .then(({ user }) => {
      eventBus.dispatch(ACTIONS.login, user);
    })
    .catch((e) => {
      console.log(e);
      showModalMessage();
      const messageContext = document.querySelector('.modal__message--context');
      messageContext.innerText = 'Неверный e-mail или пароль';
      setTimeout(() => {
        closeModalMessage();
        clearForm(elements);
      }, 4000);
    });
};

const loginForm = document.querySelector('#login');
const emailField = loginForm.querySelector('input[name="email"]');
const passwordField = loginForm.querySelector('input[name="password"]');

emailField.addEventListener('input', onFieldChangeHandler);
passwordField.addEventListener('input', onFieldChangeHandler);
loginForm.addEventListener('submit', loginHandler);
