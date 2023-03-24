import { phoneNumberCart } from './phoneNumberCart.js';
import { renderReplace } from '../../modules/renderReplace.js';
import { getDataForSelectedLocation } from '../../modules/getDataForSelectedLocation.js';

function setPhones(dataBase, root, ifOnHeader) {
  const data = getDataForSelectedLocation(dataBase);

  const dataOfphones = data.phones;
  renderReplace(root, phoneNumberCart(dataOfphones, ifOnHeader));
}

export { setPhones };
