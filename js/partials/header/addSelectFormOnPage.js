import { getSelectForm } from './getSelectForm.js';
import { getAddressesForSelectedCity } from './getAddressesForSelectedCity.js';
import { getSelectedOption } from '../../modules/getSelectedOption.js';

//Add select forms on page
function addSelectFormOnPage(dataBase, rootForCity, rootForAddress) {
  const rootForCitySelect = document.querySelector(rootForCity);
  rootForCitySelect.appendChild(getSelectForm(Object.keys(dataBase), 'city'));

  const rootForAddressSelect = document.querySelector(rootForAddress);
  const selectedCity = getSelectedOption('[name="city"]');
  rootForAddressSelect.appendChild(getSelectForm(getAddressesForSelectedCity(dataBase, selectedCity), 'address'));
}

export { addSelectFormOnPage };
