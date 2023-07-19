import { getDOMElement } from '../../modules/getDOMElement.js';

function getCardForSaleSlider({ name, imgName, price, currency, description, sale, newPrice, id }, imgPath) {
  const saleCardContainer = getDOMElement('div', {
    className: 'container__saleSlider--card cardContainer swiper-slide text',
    style: `background-image: url(${imgPath + imgName})`,
  });

  const goodNameContainer = getDOMElement('div', {
    className: 'cardContainer__goodName text--bold-italic text--xl',
    innerText: `"${name}"`,
  });
  saleCardContainer.appendChild(goodNameContainer);

  saleCardContainer.appendChild(
    getDOMElement('div', {
      className: 'cardContainer__description text--orange text--light text--s',
      innerText: description,
    }),
  );

  const priceContainer = getDOMElement('div', { className: 'cardContainer__price' });
  saleCardContainer.appendChild(priceContainer);

  if (sale) {
    priceContainer.appendChild(getDOMElement('p', { innerText: `${price} ${currency}`, className: 'cardContainer__price--old text--bold ' }));

    priceContainer.appendChild(getDOMElement('p', { innerText: `${newPrice} ${currency}`, className: 'cardContainer__price--new text--bold text--red text--l' }));
  } else {
    priceContainer.appendChild(getDOMElement('p', { innerText: `${price} ${currency}`, className: 'cardContainer__price--regular text--bold' }));
  }

  const getMoreInfButton = getDOMElement('a', { href: `/${encodeURIComponent(id)}`, innerText: 'Подробнее', className: 'cardContainer__submit text text--semi-bold text--l text--white ' });
  getMoreInfButton.setAttribute('data-link', 'internal');
  saleCardContainer.appendChild(getMoreInfButton);

  return saleCardContainer;
}

export { getCardForSaleSlider };
