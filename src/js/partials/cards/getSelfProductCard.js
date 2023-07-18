import { getDOMElement } from '../../modules/getDOMElement.js';
import { wantBtnNodeBlock } from './getProductCards.js';

function getSelfProductCard({ name, imgName, price, currency, description, ingridients, count, sale, newPrice, popular, news, id }, imgPath) {
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

  wantBtnNodeBlock(goodDescriptionContainer, { id, count });

  return cardContainer;
}

export { getSelfProductCard };
