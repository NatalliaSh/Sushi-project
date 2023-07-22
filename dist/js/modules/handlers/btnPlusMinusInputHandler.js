import { ACTIONS } from '../CONST.js';
import { eventBus } from '../eventBus.js';

export const btnPlusMinusInputHandler = ({ target }) => {
  if (target.id === 'minusBtn') {
    target.nextElementSibling.stepDown();
  } else {
    target.previousElementSibling.stepUp();
  }

  if (target.dataset.productid) {
    eventBus.dispatch(ACTIONS.changesInBacket, target.dataset.productid);
  }
};
