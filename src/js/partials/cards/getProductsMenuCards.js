import { getDOMElement } from '../../modules/getDOMElement.js';

function filterIDByCategories(dataForSelectedLocation, category = 'All') {
  const arrOfProductIDForSelectLocation = [];
  const allProducts = dataForSelectedLocation.products;
  const productsByCategori = allProducts[category];

  if (category === 'All' || !productsByCategori) {
    Object.values(allProducts).forEach((item) => arrOfProductIDForSelectLocation.push(item));
  } else {
    arrOfProductIDForSelectLocation.push(productsByCategori);
  }

  return arrOfProductIDForSelectLocation.flat();
}

function filterProductDataByParam(productSpecificationData, parametr) {
  let newData = {};

  for (let key in productSpecificationData) {
    if (productSpecificationData[key][parametr]) {
      newData[key] = productSpecificationData[key];
    }
  }

  return newData;
}

function getArrOfCardsForRender(dataForSelectedLocation, allProductSpecificationData, category, parametr) {
  let cardArr = [];
  const arrOfProductID = filterIDByCategories(dataForSelectedLocation, category);

  let productSpecificationData;

  if (parametr) {
    productSpecificationData = filterProductDataByParam(allProductSpecificationData, parametr);
  } else {
    productSpecificationData = allProductSpecificationData;
  }

  arrOfProductID.forEach((item) => {
    if (item in productSpecificationData) {
      productSpecificationData[item].id = item;
      cardArr.push(productSpecificationData[item]);
    }
  });

  return cardArr;
}

function getProductCardForMenuList({ name, imgName, price, currency, description, sale, newPrice, id, popular, news }, imgPath) {
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
  cardContainer.appendChild(imgContainer);
  imgContainer.appendChild(getDOMElement('img', { src: imgPath + imgName }));

  const goodDescriptionContainer = getDOMElement('div', {
    className: 'container__card__goodDescription',
  });
  cardContainer.appendChild(goodDescriptionContainer);

  const goodNameContainer = getDOMElement('div', {
    className: 'container__card__goodDescription__goodName text--semi-bold',
  });
  goodDescriptionContainer.appendChild(goodNameContainer);
  goodNameContainer.appendChild(getDOMElement('a', { innerText: name, href: '/' + id, title: 'Посмотреть карточку товара' }));
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

function getProductsMenuCards(dataForSelectedLocation, allProductSpecificationData, imgPath, category, parametr) {
  const cardsArr = getArrOfCardsForRender(dataForSelectedLocation, allProductSpecificationData, category, parametr).map((element) => getProductCardForMenuList(element, imgPath));

  return cardsArr;
}

export { getProductsMenuCards };
