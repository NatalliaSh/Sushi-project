import { phoneNumberCart } from './phoneNumberCart.js';
import { renderReplace } from '../../modules/renderReplace.js';

function setPhones(dataForSelectedLocation, root, ifOnHeader) {
  const dataOfphones = dataForSelectedLocation.phones;
  renderReplace(root, phoneNumberCart(dataOfphones, ifOnHeader));
}

export { setPhones };
