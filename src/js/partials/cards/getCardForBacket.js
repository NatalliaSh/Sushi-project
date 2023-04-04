import { getDOMElement } from '../../modules/getDOMElement.js';
import { getPlusMinusBtnNumberInput } from '../buttons/getPlusMinusBtnNumberInput.js';

function getCardForBacket(productID, { name, imgName, price, currency, newPrice, sale, count }, amount, imgPath) {
  const cardContainer = getDOMElement('div', { className: ' productsSection__cardContainer' });
  cardContainer.setAttribute('data-productid', productID);

  const imgContainer = getDOMElement('div', { className: ' productsSection__cardContainer--img' });
  cardContainer.appendChild(imgContainer);
  imgContainer.appendChild(getDOMElement('img', { src: imgPath + imgName }));

  const substanceContainer = getDOMElement('div', { className: ' productsSection__cardContainer--substance substance' });
  cardContainer.appendChild(substanceContainer);

  substanceContainer.appendChild(getDOMElement('div', { className: 'substance__goodName text--s', innerText: name }));

  const amountPriceContainer = getDOMElement('div', { className: ' substance__amountPrice' });
  substanceContainer.appendChild(amountPriceContainer);

  amountPriceContainer.appendChild(getPlusMinusBtnNumberInput(count, amount, productID));

  const productPrice = getDOMElement('div', { className: 'substance__amountPrice--price text--bold text--s' });

  productPrice.innerText = sale ? `${(newPrice * amount).toFixed(2)} ${currency}` : `${(price * amount).toFixed(2)} ${currency}`;

  amountPriceContainer.appendChild(productPrice);

  return cardContainer;
}

export { getCardForBacket };
