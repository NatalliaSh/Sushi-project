import { getCardForBacket } from '../../partials/cards/getCardForBacket.js';
import { renderReplace } from '../renderReplace.js';
import { countTotalPrice } from '../countTotalPrice.js';
import { changeActiveClassesInBacket, clearBacket } from '../backet.js';

function renderBacketItemsHandler(userBacket, productSpecificationData, root) {
  if (!(Object.keys(userBacket).length === 0)) {
    changeActiveClassesInBacket(false);

    const arrOfProductsID = Object.keys(userBacket);
    const cardsArr = arrOfProductsID.map((productID) => {
      return getCardForBacket(productID, productSpecificationData[productID], userBacket[productID], '../../../img/menuImg/productsImg/');
    });
    const containerForcards = document.createElement('div');
    containerForcards.append(...cardsArr);
    renderReplace(root, containerForcards);

    countTotalPrice(productSpecificationData[arrOfProductsID[0]].currency);
  } else {
    clearBacket();
  }
}

export { renderBacketItemsHandler, countTotalPrice };
