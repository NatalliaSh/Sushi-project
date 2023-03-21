import { dataBase } from '../../modules/dataBase/dataBase.js';
import { getSelectForm } from './getSelectForm.js';
import { getAddressesForSelectedCity } from './getAddressesForSelectedCity.js';
import { getSelectedOption } from './getSelectedOption.js';
import { changeSelectCityHandlerHeader } from './changeSelectCityHandler.js';
import { changeSelectAddressHandlerHeader } from './changeSelectAddressHandler.js';

const rootForCitySelect = document.querySelector('.location__city');
rootForCitySelect.appendChild(getSelectForm(Object.keys(dataBase), 'city'));

const rootForAddressSelect = document.querySelector('.location__address');
const selectedCity = getSelectedOption('[name="city"]');
rootForAddressSelect.appendChild(getSelectForm(getAddressesForSelectedCity(dataBase, selectedCity), 'address'));

const selectCity = document.querySelector('[name="city"]');
selectCity.addEventListener('change', changeSelectCityHandlerHeader);
const selectAddress = document.querySelector('[name="address"]');
selectAddress.addEventListener('change', changeSelectAddressHandlerHeader);
