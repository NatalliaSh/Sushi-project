import { phoneNumberCart } from './phoneNumberCart.js';
import { renderReplace } from '../../modules/renderReplace.js';
import { getSelectedOption } from '../../modules/getSelectedOption.js';
import { getDataForSelectedLocation } from '../../modules/getDataForSelectedLocation.js';

function setPhones(dataBase, root, ifOnHeader) {
  const selectedCity = getSelectedOption('[name="city"]');
  const selectedAddress = getSelectedOption('[name="address"]');
  const data = getDataForSelectedLocation(dataBase, selectedCity, selectedAddress);

  const dataOfphones = data.phones;
  renderReplace(root, phoneNumberCart(dataOfphones, ifOnHeader));
}

export { setPhones };
