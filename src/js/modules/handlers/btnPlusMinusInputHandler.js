export const btnPlusMinusInputHandler = ({ target }) => {
  if (target.id === 'minusBtn') {
    target.nextElementSibling.stepDown();
  } else {
    target.previousElementSibling.stepUp();
  }
};
