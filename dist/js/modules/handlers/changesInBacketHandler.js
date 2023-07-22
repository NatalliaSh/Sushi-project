import { eventBus } from '../eventBus.js';
import { ACTIONS } from '../CONST.js';

export const changesInBacketHandler = (id) => {
  const cardContainer = document.querySelector(`.productsSection__cardContainer[data-productid=${id}]`);
  const input = cardContainer.querySelector('input');
  const amount = parseInt(input.value);

  if (amount === 0) {
    eventBus.dispatch(ACTIONS.removeFromBacket, id);
  } else {
    eventBus.dispatch(ACTIONS.addToBacket, { [id]: amount });
  }
};
