const modal = document.querySelector('.modal');
const errorModalMessage = modal.querySelector('.modal__message');
const closerMessage = modal.querySelector('.modal__message--close');

closerMessage.addEventListener('click', () => {
  errorModalMessage.classList.remove('active');
});

const showErrorModalMessage = () => {
  errorModalMessage.classList.add('active');
};

const closeErrorModalMessage = () => {
  errorModalMessage.classList.remove('active');
};

const clearForm = (elements) => {
  elements.email.value = '';
  elements.password.value = '';

  if (elements.userName) {
    elements.userName.value = '';
  }
};

export { showErrorModalMessage, closeErrorModalMessage, clearForm };
