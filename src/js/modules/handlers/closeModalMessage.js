const modal = document.querySelector('.modal');
const modalMessage = modal.querySelector('.modal__message');
const closerMessage = modal.querySelector('.modal__message--close');

closerMessage.addEventListener('click', () => {
  modalMessage.classList.remove('active');
});

const showModalMessage = () => {
  modalMessage.classList.add('active');
};

const closeModalMessage = () => {
  modalMessage.classList.remove('active');
};

const clearForm = (elements) => {
  elements.email.value = '';
  elements.password.value = '';

  if (elements.userName) {
    elements.userName.value = '';
  }
};

export { showModalMessage, closeModalMessage, clearForm };
