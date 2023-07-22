import { getDOMElement } from '../../modules/getDOMElement.js';

function getPlusMinusBtnNumberInput(amountOfProduct, amountSetInInput, productIdIfForBacket) {
  const counterContainer = getDOMElement('div', { className: 'number text text--bold' });

  const numberMinus = getDOMElement('button', { type: 'button', className: 'number__button number__button--minus text text--bold', id: 'minusBtn' });
  counterContainer.appendChild(numberMinus);
  const counter = getDOMElement('input', { type: 'number', min: 0, max: amountOfProduct, className: 'number__input text text--bold' });

  if (amountSetInInput) {
    counter.setAttribute('value', amountSetInInput);
  } else {
    counter.setAttribute('value', '1');
  }

  counterContainer.appendChild(counter);
  const numberPlus = getDOMElement('button', { type: 'button', className: 'number__button number__button--plus text text--bold', id: 'plusBtn' });

  if (productIdIfForBacket) {
    numberMinus.setAttribute('data-productid', productIdIfForBacket);
    numberPlus.setAttribute('data-productid', productIdIfForBacket);
  }

  counterContainer.appendChild(numberPlus);

  return counterContainer;
}

export { getPlusMinusBtnNumberInput };
