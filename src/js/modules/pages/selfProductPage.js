import { getSelfProductCard } from '../../partials/cards/getSelfProductCard.js';
import { getDOMElement } from '../getDOMElement.js';

function getSelfProductPage(productData, imgPath) {
  const container = getDOMElement('div', {
    className: 'container',
  });

  container.appendChild(getSelfProductCard(productData, imgPath));

  return container;
}

export { getSelfProductPage };
