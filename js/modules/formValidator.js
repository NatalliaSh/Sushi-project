import { withEmptyValueCheck, withEmailValueCheck, withPasswordLengthCheck } from './validators.js';

const setWarning = (el, warning) => {
  el.parentElement.classList.add('invalid');
  el.parentElement.dataset.error = warning;
};

const emailValidators = [withEmptyValueCheck, withEmailValueCheck];
const passwordValidators = [withEmptyValueCheck, withPasswordLengthCheck];
const userNameValidators = [withEmptyValueCheck];
const reviewValidator = [withEmptyValueCheck];

const checkValidity = (validators, value) => validators.reduce((acc, fn) => fn(acc), value);

export const formValidator = (elements) => {
  const validators = elements.review
    ? { review: reviewValidator }
    : {
        email: emailValidators,
        password: passwordValidators,
      };

  if (elements.userName) {
    validators.userName = userNameValidators;
  }

  let formError = false;

  Object.keys(validators).forEach((field) => {
    const { error } = checkValidity(validators[field], elements[field].value);

    if (error) {
      setWarning(elements[field], error);
      formError = true;
    }
  });

  return formError;
};

export const onFieldChangeHandler = ({ target }) => {
  target.parentElement.classList.remove('invalid');
  target.parentElement.dataset.error = '';
};
