import { getDOMElement } from '../../modules/getDOMElement.js';

function getProductCard({ name, imgName, price, currency, description, sale, newPrice, id, popular, news }, imgPath) {
  const cardContainer = getDOMElement('div', { className: 'container__card text' });

  if (sale || popular || news) {
    const lableContainer = getDOMElement('div', { className: 'container__card__label' });
    cardContainer.appendChild(lableContainer);
    if (sale) {
      lableContainer.appendChild(getDOMElement('img', { title: 'sale', src: imgPath + 'saleIcon.png' }));
    }
    if (popular) {
      lableContainer.appendChild(getDOMElement('img', { title: 'popular', src: imgPath + 'popularIcon.png' }));
    }
    if (news) {
      lableContainer.appendChild(getDOMElement('img', { title: 'new', src: imgPath + 'newIcon.png' }));
    }
  }

  const imgContainer = getDOMElement('a', { className: 'container__card__img', href: '/' + id });
  imgContainer.setAttribute('data-link', 'internal');
  cardContainer.appendChild(imgContainer);
  const img = getDOMElement('img', { src: imgPath + imgName });
  img.setAttribute('data-link', 'internal');
  img.setAttribute('href', '/' + id);
  imgContainer.appendChild(img);

  const goodDescriptionContainer = getDOMElement('div', {
    className: 'container__card__goodDescription',
  });
  cardContainer.appendChild(goodDescriptionContainer);

  const goodNameContainer = getDOMElement('div', {
    className: 'container__card__goodDescription__goodName text--semi-bold',
  });
  goodDescriptionContainer.appendChild(goodNameContainer);

  const linkName = getDOMElement('a', { innerText: name, href: '/' + id, title: 'Посмотреть карточку товара' });
  linkName.setAttribute('data-link', 'internal');
  goodNameContainer.appendChild(linkName);

  goodDescriptionContainer.appendChild(
    getDOMElement('div', {
      className: 'container__card__goodDescription__description text--grey text--s',
      innerText: description,
    }),
  );

  const orderContainer = getDOMElement('div', { className: 'container__card__goodDescription__order' });
  goodDescriptionContainer.appendChild(orderContainer);

  if (sale) {
    orderContainer.appendChild(getDOMElement('p', { innerText: `${price} ${currency}`, className: 'price--old text--semi-bold text--s' }));

    orderContainer.appendChild(getDOMElement('p', { innerText: `${newPrice} ${currency}`, className: 'price--new text--bold text--red' }));
  } else {
    orderContainer.appendChild(getDOMElement('p', { innerText: `${price} ${currency}`, className: 'price text--bold' }));
  }

  orderContainer.appendChild(getDOMElement('button', { innerText: 'Хочу!', type: 'button', className: 'text text--semi-bold text--white ' }));

  return cardContainer;
}

export { getProductCard };
