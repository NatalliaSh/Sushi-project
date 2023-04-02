import { getDOMElement } from '../../modules/getDOMElement.js';

function getCardForSliderSelfPage({ name, imgName, price, currency, newPrice, sale }, imgPath) {
  const cardContainer = getDOMElement('div', { className: ' sliderContainer__allCards--card cardContainer text' });

  cardContainer.appendChild(getDOMElement('img', { src: imgPath + imgName, className: 'cardContainer__img' }));

  cardContainer.appendChild(getDOMElement('div', { className: 'cardContainer__goodName text--s text--semi-bold', innerText: name }));

  const orderContainer = getDOMElement('div', { className: 'cardContainer__order text--bold' });
  cardContainer.appendChild(orderContainer);

  const priceContainer = getDOMElement('div', { className: 'cardContainer__order--price' });
  orderContainer.appendChild(priceContainer);

  if (sale) {
    priceContainer.appendChild(getDOMElement('p', { innerText: `${price} ${currency}`, className: 'price--old text--semi-bold text--s' }));

    priceContainer.appendChild(getDOMElement('p', { innerText: `${newPrice} ${currency}`, className: 'price--new text--bold text--red' }));
  } else {
    priceContainer.appendChild(getDOMElement('p', { innerText: `${price} ${currency}`, className: 'price--regular text--bold' }));
  }

  orderContainer.appendChild(getDOMElement('button', { id: 'addToBacketBtn', type: 'button', className: 'cardContainer__order--button text--white addToBacket' }));

  return cardContainer;
}

export { getCardForSliderSelfPage };
