import { addNewReview } from '../../modules/ajaxRequests.js';
import { getUser } from '../authFirebase.js';
import { closeModalMessage, showModalMessage } from '../modal.js';
import { closeModalAddReview } from '../modal.js';
import { formValidator } from '../formValidator.js';

async function addReviewHandler(e) {
  e.preventDefault();
  const {
    target: { elements },
  } = e;

  if (formValidator(elements)) {
    return;
  }

  const currentUser = await getUser();
  const modal = document.querySelector('#modalMessage');
  const modalMessage = modal.querySelector('.modal__content--message');

  if (currentUser) {
    const resp = await addNewReview(elements.review.value, currentUser.uid, currentUser.displayName);
    closeModalAddReview();
    modalMessage.innerText = resp instanceof Error ? 'Извините, что-то пошло не так. \n Пожалуйста, попробуйте позже. \n Мы очень ценим Ваше мнение!' : 'Спасибо за отзыв! \n Нам очень важно Ваше мнение!';
  } else {
    modalMessage.innerText = 'Пожалуйста, войдите в свой аккаунт или зарегистрируйтесь, чтобы иметь возможность оставить отзыв';
    closeModalAddReview();
  }
  showModalMessage();
  setTimeout(() => {
    modalMessage.innerText = '';
    closeModalMessage();
  }, 5000);
}

export { addReviewHandler };
