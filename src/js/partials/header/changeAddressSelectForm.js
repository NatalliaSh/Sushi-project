import { getAddressesForSelectedCity } from './getAddressesForSelectedCity.js';
import { getSelectForm } from './getSelectForm.js';

function changeAddressSelectForm(dataBase, selectedCity) {
  const addresses = getAddressesForSelectedCity(dataBase, selectedCity);
  const newSelectAdressForm = getSelectForm(addresses, 'address');
  const rootForSelectAddress = document.querySelector('.location__address');
  const oldSelectAdressForm = rootForSelectAddress.querySelector('select');
  rootForSelectAddress.replaceChild(newSelectAdressForm, oldSelectAdressForm);
}

export { changeAddressSelectForm };
