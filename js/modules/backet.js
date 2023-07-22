import { eventBus } from './eventBus.js';
import { ACTIONS } from './CONST.js';
import { getUserBacket } from './localStorage.js';
import { countTotalPrice } from './countTotalPrice.js';
import { getCardForBacket } from '../partials/cards/getCardForBacket.js';
import { renderReplace } from './renderReplace.js';

function changeActiveClassesInBacket(isFromFullToEmpty) {
  const messageEmpty = document.querySelector('.backet__message--empty');
  const messageFull = document.querySelector('.backet__message--full');
  const delivery = document.querySelector('.backet__deliveryPrice');
  const products = document.querySelector('.backet__products');

  if (isFromFullToEmpty) {
    if (messageFull.classList.contains('active')) {
      messageEmpty.classList.add('active');
      messageFull.classList.remove('active');
      delivery.classList.add('active');
      products.classList.remove('active');
    }
  } else {
    if (!messageFull.classList.contains('active')) {
      messageEmpty.classList.remove('active');
      messageFull.classList.add('active');
      delivery.classList.remove('active');
      products.classList.add('active');
    }
  }
}

function showBacket(user) {
  const loginBlock = document.querySelector('.loginLogout');
  const backetBlock = document.querySelector('.backet');
  loginBlock.classList.remove('active');
  backetBlock.classList.add('active');

  getUserBacket(user.uid).then((userBacket) => {
    eventBus.dispatch(ACTIONS.renderBacketItems, userBacket);
  });

  const backetMobileButton = document.querySelector('#openBacketButton');
  const spanWithAmountOfItemsInBacket = backetMobileButton.querySelector('span');
  spanWithAmountOfItemsInBacket.classList.add('active');
}

const hideBacket = () => {
  const loginBlock = document.querySelector('.loginLogout');
  const backetBlock = document.querySelector('.backet');
  backetBlock.classList.remove('active');
  loginBlock.classList.add('active');

  const backetMobileButton = document.querySelector('#openBacketButton');
  const spanWithAmountOfItemsInBacket = backetMobileButton.querySelector('span');
  spanWithAmountOfItemsInBacket.classList.remove('active');
};

function getNumWord(num, word1, word2, word5) {
  const dd = num % 100;
  if (dd >= 11 && dd <= 19) return word5;
  const d = num % 10;
  if (d == 1) return word1;
  if (d >= 2 && d <= 4) return word2;
  return word5;
}

function fillBacketTotalFields(currency = 'BYN') {
  const fieldForAmount = document.querySelector('#goodsAmount');
  const amountOfitemsInBacket = document.querySelectorAll('.productsSection__cardContainer').length;
  fieldForAmount.innerText = `${amountOfitemsInBacket} ${getNumWord(amountOfitemsInBacket, 'товар', 'товара', 'товаров')}`;

  const totalPrice = countTotalPrice();

  const totalPriceNode = document.querySelector('#totalPrice');
  totalPriceNode.innerText = `${totalPrice} ${currency}`;

  const deliveryPriceNode = document.querySelector('#deliveryPrice');
  deliveryPriceNode.innerText = totalPrice >= 30 ? `0 ${currency}` : `10 ${currency}`;

  const backetMobileButton = document.querySelector('#openBacketButton');
  const spanWithAmountOfItemsInBacket = backetMobileButton.querySelector('span');
  spanWithAmountOfItemsInBacket.innerText = amountOfitemsInBacket;
}

function addProductToBacket(data, productSpecificationData, root) {
  const key = Object.keys(data)[0];
  const productData = productSpecificationData[key];
  const isProductCardInBacket = document.querySelector(`[data-productid=${key}]`);

  if (isProductCardInBacket) {
    const amountPrice = isProductCardInBacket.querySelector('.substance__amountPrice');
    const input = amountPrice.querySelector('input');
    const priceNode = amountPrice.querySelector('.substance__amountPrice--price');
    const priceForOne = productData.sale ? productData.newPrice : productData.price;

    input.value = data[key];
    priceNode.innerText = (priceForOne * data[key]).toFixed(2) + ' ' + productData.currency;

    fillBacketTotalFields();
  } else {
    const rootNode = document.querySelector(root);
    rootNode.appendChild(getCardForBacket(key, productData, data[key], '../../img/menuImg/productsImg/'));
    fillBacketTotalFields();
    changeActiveClassesInBacket(false);
  }
}

function removeProductFromBacket(producid) {
  const productCard = document.querySelector(`[data-productid=${producid}]`);
  const rootNode = productCard.parentElement;
  rootNode.removeChild(productCard);
  fillBacketTotalFields();

  const backetRoot = document.querySelector('#backetRoot');
  const isProductsInBacket = backetRoot.querySelector('[data-productid]');
  if (!isProductsInBacket) {
    changeActiveClassesInBacket(true);
  }
}

function clearBacket() {
  const newChild = document.createElement('div');
  renderReplace('#backetRoot', newChild);
  const backetRoot = document.querySelector('#backetRoot');
  backetRoot.removeChild(newChild);
  changeActiveClassesInBacket(true);

  const backetMobileButton = document.querySelector('#openBacketButton');
  const spanWithAmountOfItemsInBacket = backetMobileButton.querySelector('span');
  spanWithAmountOfItemsInBacket.innerText = 0;
}

export { changeActiveClassesInBacket, showBacket, hideBacket, addProductToBacket, removeProductFromBacket, clearBacket, fillBacketTotalFields };
