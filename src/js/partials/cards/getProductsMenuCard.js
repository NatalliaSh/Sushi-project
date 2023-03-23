import { getDOMElement } from '../../modules/getDOMElement.js';

function getProductsDataForSelectedLocation (dataForSelectedLocation) {
  return dataForSelectedLocation.products;
}

cardArr.forEach((element) => document.body.appendChild(getCard(element)));
const cards = cardArr.map((element) => getCard(element));
document.body.append(...cards);
{
  name: 'Сет "4 Филадельфии"',
  imgPath: './img/setImages/set4.png',
  price: '1559',
  description: '1100 грамм 32 кусочек',
  count: 100,
},

function getArrOfCardsForRender (dataOfFilteredProducts) {
  let cardArr = [];

  return cardArr;
}

function filterCategories (productsDataForSelectedLocation, category) {
  return productsDataForSelectedLocation.category;
}

function filterOnSale (productsDataForSelectedLocation, category) {
  return productsDataForSelectedLocation.category;
}

function getProductsMenuCard({ name, imgPath, price, currency = 'руб', description, count }) {
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
