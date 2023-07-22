import { getDOMElement } from '../../modules/getDOMElement.js';
import { getArrOfCardsForRender } from './getArrOfCardsForRender.js';
import { getProductCard } from './getProductCards.js';

function getNewPopularSlider(dataForSelectedLocation, allProductSpecificationData, imgPath) {
  const container = getDOMElement('div', {
    className: 'container__newPopularSlider',
  });

  const choiceContainer = getDOMElement('div', {
    className: 'container__newPopularSlider--choice button__choice',
  });
  container.append(choiceContainer);

  choiceContainer.appendChild(
    getDOMElement('button', {
      type: 'button',
      className: 'button__choice--new text text--semi-bold active',
      innerText: 'Новинки',
      id: 'newChoiseBtn',
    }),
  );
  choiceContainer.appendChild(
    getDOMElement('button', {
      type: 'button',
      className: 'button__choice--popular text text--semi-bold',
      innerText: 'Популярное',
      id: 'popularChoiseBtn',
    }),
  );

  const sliderContainer = getDOMElement('div', {
    className: 'container__newPopularSlider--slider swiper',
  });
  container.append(sliderContainer);

  const sliderContainerNew = getDOMElement('div', {
    className: 'slider slider--new swiper-wrapper active',
  });
  sliderContainer.append(sliderContainerNew);

  const arrOfCardsNew = getArrOfCardsForRender(dataForSelectedLocation, allProductSpecificationData, '', 'news').map((element) => getProductCard(element, imgPath));
  sliderContainerNew.append(...arrOfCardsNew);

  const sliderContainerPopular = getDOMElement('div', {
    className: 'slider slider--popular',
  });
  sliderContainer.append(sliderContainerPopular);

  sliderContainer.append(getDOMElement('div', { className: 'swiper-button-next' }));
  sliderContainer.append(getDOMElement('div', { className: 'swiper-button-prev' }));

  const arrOfCardsPopular = getArrOfCardsForRender(dataForSelectedLocation, allProductSpecificationData, '', 'popular').map((element) => getProductCard(element, imgPath));
  sliderContainerPopular.append(...arrOfCardsPopular);

  return container;
}
export { getNewPopularSlider };
