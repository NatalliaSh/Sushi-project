import { getDOMElement } from '../getDOMElement.js';
import { getBreadcrumbs } from '../../partials/breadcrumbs/getBreadcrumbs.js';
import { getReviews } from '../../modules/ajaxRequests.js';

function getReviewCard({ name, text, date }) {
  const reviewContainer = getDOMElement('div', { className: 'reviewsContainer__review review' });

  const reviewTitle = getDOMElement('div', { className: 'review__title title' });
  reviewTitle.appendChild(getDOMElement('div', { className: 'title__name text--semi-bold', innerText: name }));
  reviewTitle.appendChild(getDOMElement('div', { className: 'title__name text--grey text--s', innerText: date }));
  reviewContainer.appendChild(reviewTitle);

  reviewContainer.appendChild(getDOMElement('div', { className: 'review__text text--s', innerText: text }));

  return reviewContainer;
}

async function getReviewPage() {
  const container = getDOMElement('div', { className: 'reviewPage reviewPage__container  text' });

  container.appendChild(getBreadcrumbs());

  const titleContainer = getDOMElement('div', { className: 'reviewPage__title title' });
  titleContainer.appendChild(getDOMElement('div', { className: 'title__text text--m text--semi-bold', innerText: 'Отзывы' }));
  titleContainer.appendChild(getDOMElement('button', { id: 'addReviewBtn', className: 'title__addButton text--xs', innerText: '+ Добавить отзыв' }));

  container.appendChild(titleContainer);

  const reviewsContainer = getDOMElement('div', { className: 'reviewPage__reviewsContainer reviewsContainer' });
  container.appendChild(reviewsContainer);

  const allReviewsArr = await getReviews();

  if (!(allReviewsArr instanceof Error)) {
    allReviewsArr.forEach((element) => {
      reviewsContainer.appendChild(getReviewCard(element));
    });
  } else {
    reviewsContainer.appendChild(getDOMElement('div', { className: 'reviewsContainer__error', innerText: 'Извините, при загрузке отзывов произошла ошибка. \n Пожалуйста, попробуйте позже!' }));
  }

  return container;
}

export { getReviewPage };
