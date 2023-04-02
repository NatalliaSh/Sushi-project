import { getDOMElement } from '../../modules/getDOMElement.js';

function getPlusMinusBtnNumberInput(amountOfProduct) {
  const counterContainer = getDOMElement('div', { className: 'number text text--bold' });

  const numberMinus = getDOMElement('button', { type: 'button', className: 'number__button number__button--minus text text--bold', id: 'minusBtn' });
  counterContainer.appendChild(numberMinus);
  const counter = getDOMElement('input', { type: 'number', min: 0, max: amountOfProduct, value: 1, className: 'number__input text text--bold' });
  counterContainer.appendChild(counter);
  const numberPlus = getDOMElement('button', { type: 'button', className: 'number__button number__button--plus text text--bold', id: 'plusBtn' });
  counterContainer.appendChild(numberPlus);

  return counterContainer;
}

export { getPlusMinusBtnNumberInput };
