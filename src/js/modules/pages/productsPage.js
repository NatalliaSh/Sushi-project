import { logoMenuImgNames } from '../CONST.js';
import { getDOMElement } from '../getDOMElement.js';
import { getArrOfCardsForRender } from '../../partials/cards/getArrOfCardsForRender.js';
import { getProductCard } from '../../partials/cards/getProductCards.js';

function getProductsPage(dataForSelectedLocation, allProductSpecificationData, imgPath, category, parametr) {
  const container = getDOMElement('div', { className: 'container__productsPage text' });

  const titleContainer = getDOMElement('div', { className: 'container__productsPage__title' });
  const titleLeft = getDOMElement('div', { className: 'container__productsPage__title__left' });

  const title = getDOMElement('div', { className: 'container__productsPage__title__left__category text--l', innerText: category || parametr.toUpperCase() || 'Всё меню' });

  if (category || parametr) {
    const indexForSlice = imgPath.slice(0, imgPath.length - 1).lastIndexOf('/');
    const imgLogoPath = imgPath.slice(0, indexForSlice) + '/menuLogo/';
    const img = getDOMElement('img', { src: imgLogoPath + logoMenuImgNames[category || parametr] });
    titleLeft.appendChild(img);
  }

  titleLeft.appendChild(title);
  titleContainer.appendChild(titleLeft);

  const containerForCards = getDOMElement('div', { className: 'container__productsPage__cardsContainer' });
  const cardsArr = getArrOfCardsForRender(dataForSelectedLocation, allProductSpecificationData, category, parametr).map((element) => getProductCard(element, imgPath));
  containerForCards.append(...cardsArr);

  container.appendChild(titleContainer);
  container.appendChild(containerForCards);

  return container;
}

export { getProductsPage };
