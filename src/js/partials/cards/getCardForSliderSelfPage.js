import { getDOMElement } from '../../modules/getDOMElement.js';

function getCardForSliderSelfPage({ name, imgName, price, currency, newPrice, sale, id }, imgPath) {
  const cardContainer = getDOMElement('a', { href: `/${encodeURIComponent(id)}`, className: ' sliderContainer__allCards--card cardContainer text' });
  cardContainer.setAttribute('data-link', 'internal');

  cardContainer.appendChild(getDOMElement('img', { src: imgPath + imgName, className: 'cardContainer__img' }));

  cardContainer.appendChild(getDOMElement('div', { className: 'cardContainer__goodName text--s text--semi-bold', innerText: name }));

  if (sale) {
    cardContainer.appendChild(getDOMElement('div', { innerText: `${price} ${currency}`, className: 'cardContainer__price cardContainer__price--old text--semi-bold text--s' }));

    cardContainer.appendChild(getDOMElement('div', { innerText: `${newPrice} ${currency}`, className: 'cardContainer__price cardContainer__price--new text--bold text--red' }));
  } else {
    cardContainer.appendChild(getDOMElement('div', { innerText: `${price} ${currency}`, className: 'cardContainer__price cardContainer__price--regular text--bold' }));
  }

  return cardContainer;
}

export { getCardForSliderSelfPage };
