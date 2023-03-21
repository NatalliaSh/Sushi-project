import { dataBase } from '../../modules/dataBase/dataBase.js';
import { getSelectForm } from './getSelectForm.js';
import { getAddressesForSelectedCity } from './getAddressesForSelectedCity.js';
import { getSelectedOption } from '../../modules/getSelectedOption.js';
import { changeSelectCityHandlerHeader } from './changeSelectCityHandler.js';
import { changeSelectAddressHandlerHeader } from './changeSelectAddressHandler.js';

//Add select forms on page
const rootForCitySelect = document.querySelector('.location__city');
rootForCitySelect.appendChild(getSelectForm(Object.keys(dataBase), 'city'));

const rootForAddressSelect = document.querySelector('.location__address');
const selectedCity = getSelectedOption('[name="city"]');
rootForAddressSelect.appendChild(getSelectForm(getAddressesForSelectedCity(dataBase, selectedCity), 'address'));

//Add listeners on select forms
const selectCity = document.querySelector('[name="city"]');
selectCity.addEventListener('change', ({ target: { value: city } }) => changeSelectCityHandlerHeader(city, dataBase));

const selectAddress = document.querySelector('[name="address"]');
selectAddress.addEventListener('change', ({ target: { value: address } }) => changeSelectAddressHandlerHeader(address, dataBase));
