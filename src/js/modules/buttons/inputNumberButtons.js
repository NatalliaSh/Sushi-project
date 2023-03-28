function numberBtnMinusHandler() {
  this.nextElementSibling.stepDown();
  this.nextElementSibling.change();
}

function numberBtnPlusHandler() {
  this.previousElementSibling.stepUp();
  this.previousElementSibling.change();
}

/*const btnMinus = document.querySelector('.number__button--minus');
const btnPlus = document.querySelector('.number__button--plus');
//const input = document.querySelector('.number__input');
btnMinus.addEventListener('click', numberBtnMinusHandler);
btnPlus.addEventListener('click', numberBtnPlusHandler);*/

export { numberBtnMinusHandler };
export { numberBtnPlusHandler };
