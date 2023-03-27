import { getDOMElement } from '../../modules/getDOMElement.js';

function getSelfProductCard({ name, imgName, price, currency, description, ingridients, count, sale, newPrice, popular, news }, imgPath) {
  const cardContainer = getDOMElement('div', { className: 'container__selfCard text' });

  if (sale || popular || news) {
    const lableContainer = getDOMElement('div', { className: 'container__selfCard--label' });
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

  const imgContainer = getDOMElement('div', { className: 'container__selfCard--img' });
  cardContainer.appendChild(imgContainer);
  imgContainer.appendChild(getDOMElement('img', { src: imgPath + imgName }));

  const goodDescriptionContainer = getDOMElement('div', {
    className: 'container__selfCard--goodDescription goodDescription',
  });
  cardContainer.appendChild(goodDescriptionContainer);

  const goodNameContainer = getDOMElement('div', {
    className: 'goodDescription__goodName text--semi-bold text-xl',
    innerText: name,
  });
  goodDescriptionContainer.appendChild(goodNameContainer);

  goodDescriptionContainer.appendChild(
    getDOMElement('div', {
      className: 'goodDescription__description text--orange text--light text--s',
      innerText: description,
    }),
  );

  const orderContainer = getDOMElement('div', { className: 'goodDescription__order' });
  goodDescriptionContainer.appendChild(orderContainer);

  const priceContainer = getDOMElement('div', { className: 'goodDescription__order--price' });
  orderContainer.appendChild(priceContainer);

  if (sale) {
    priceContainer.appendChild(getDOMElement('p', { innerText: `${price} ${currency}`, className: 'price--old text--semi-bold text--s' }));

    priceContainer.appendChild(getDOMElement('p', { innerText: `${newPrice} ${currency}`, className: 'price--new text--bold text--red' }));
  } else {
    priceContainer.appendChild(getDOMElement('p', { innerText: `${price} ${currency}`, className: 'price text--bold' }));
  }

  const counter = getDOMElement('input', { type: 'number', min: 0, max: count, className: 'goodDescription__order--counter text text--bold' });
  orderContainer.appendChild(counter);

  const ingridientsContainer = getDOMElement('div', {
    className: 'goodDescription__order--ingridiensts text--s',
  });
  ingridientsContainer.appendChild(
    getDOMElement('p', {
      className: 'text--semi-bold',
      innerText: 'Состав',
    }),
  );
  ingridientsContainer.appendChild(
    getDOMElement('p', {
      className: 'text--light',
      innerText: ingridients,
    }),
  );
  orderContainer.appendChild(ingridientsContainer);

  orderContainer.appendChild(getDOMElement('button', { innerText: 'Хочу!', type: 'button', className: 'goodDescription__order--submit text text--semi-bold text--white ' }));

  return cardContainer;
}

export { getSelfProductCard };
