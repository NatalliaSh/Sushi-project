import { getDOMElement } from '../../modules/getDOMElement.js';

function getProductsMenuCard({ name, imgPath, price, currency = 'COM', description, count }) {
  const cardContainer = getDOMElement('div', { className: 'card_container' });
  const imgContainer = getDOMElement('div', { className: 'card_img_container' });
  cardContainer.appendChild(imgContainer);
  imgContainer.appendChild(getDOMElement('img', { src: imgPath }));

  const goodDescriptionContainer = getDOMElement('div', {
    className: 'good_description_container',
  });
  cardContainer.appendChild(goodDescriptionContainer);

  const goodNameContainer = getDOMElement('div', {
    className: 'good_name_container',
  });
  goodDescriptionContainer.appendChild(goodNameContainer);
  goodNameContainer.appendChild(getDOMElement('p', { innerText: name }));
  goodDescriptionContainer.appendChild(
    getDOMElement('div', {
      className: 'good_description',
      innerText: description,
    }),
  );

  const orderContainer = getDOMElement('div', { className: 'order_container' });
  goodDescriptionContainer.appendChild(orderContainer);

  orderContainer.appendChild(getDOMElement('p', { innerText: `${price} ${currency}` }));
  orderContainer.appendChild(getDOMElement('button', { innerText: 'Хочу!', type: 'button' }));

  return cardContainer;
}

export { getProductsMenuCard };
