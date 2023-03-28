import { getDOMElement } from '../../modules/getDOMElement.js';

function getSelfProductCard({ name, imgName, price, currency, description, ingridients, count, sale, newPrice, popular, news }, imgPath) {
  const cardContainer = getDOMElement('div', { className: 'container__selfProductPage--selfCard selfCardContainer text' });

  const imgContainer = getDOMElement('div', { className: 'selfCardContainer__img' });
  cardContainer.appendChild(imgContainer);
  imgContainer.appendChild(getDOMElement('img', { src: imgPath + imgName }));
  if (sale || popular || news) {
    const lableContainer = getDOMElement('div', { className: 'selfCardContainer__img--label' });
    imgContainer.appendChild(lableContainer);
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

  const goodDescriptionContainer = getDOMElement('div', {
    className: 'selfCardContainer__goodDescription',
  });
  cardContainer.appendChild(goodDescriptionContainer);

  const goodNameContainer = getDOMElement('div', {
    className: 'selfCardContainer__goodDescription--goodName text--semi-bold text--xl',
    innerText: name,
  });
  goodDescriptionContainer.appendChild(goodNameContainer);

  goodDescriptionContainer.appendChild(
    getDOMElement('div', {
      className: 'selfCardContainer__goodDescription--description text--orange text--light text--s',
      innerText: description,
    }),
  );

  const orderContainer = getDOMElement('div', { className: 'selfCardContainer__goodDescription--order orderContainer' });
  goodDescriptionContainer.appendChild(orderContainer);

  const priceContainer = getDOMElement('div', { className: 'orderContainer__price' });
  orderContainer.appendChild(priceContainer);

  if (sale) {
    priceContainer.appendChild(getDOMElement('p', { innerText: `${price} ${currency}`, className: 'orderContainer__price--old text--semi-bold text--s' }));

    priceContainer.appendChild(getDOMElement('p', { innerText: `${newPrice} ${currency}`, className: 'orderContainer__price--new text--bold text--red' }));
  } else {
    priceContainer.appendChild(getDOMElement('p', { innerText: `${price} ${currency}`, className: 'orderContainer__price--regular text--bold' }));
  }

  const counterContainer = getDOMElement('div', { className: 'orderContainer__counter number text text--bold' });
  orderContainer.appendChild(counterContainer);
  const numberMinus = getDOMElement('button', { type: 'button', className: 'number__button number__button--minus text text--bold' });
  counterContainer.appendChild(numberMinus);
  const counter = getDOMElement('input', { type: 'number', min: 0, max: count, value: 1, className: 'number__input text text--bold' });
  counterContainer.appendChild(counter);
  const numberPlus = getDOMElement('button', { type: 'button', className: 'number__button number__button--plus text text--bold' });
  counterContainer.appendChild(numberPlus);

  const ingridientsContainer = getDOMElement('div', {
    className: 'selfCardContainer__goodDescription--ingridiensts text--s',
  });
  ingridientsContainer.appendChild(
    getDOMElement('p', {
      className: 'text--semi-bold ',
      innerText: 'Состав',
    }),
  );
  ingridientsContainer.appendChild(
    getDOMElement('p', {
      className: 'text--light',
      innerText: ingridients,
    }),
  );
  goodDescriptionContainer.appendChild(ingridientsContainer);

  goodDescriptionContainer.appendChild(getDOMElement('button', { innerText: 'Хочу!', type: 'button', className: 'selfCardContainer__goodDescription--submit text text--semi-bold text--white ' }));

  return cardContainer;
}

export { getSelfProductCard };
