import { dataBase } from '../../modules/dataBase/dataBase.js';
import { phoneNumberCart } from './phoneNumberCart.js';
import { renderReplace } from '../../modules/renderReplace.js';
import { getSelectedOption } from './getSelectedOption.js';

import { getDataForSelectedLocation } from './getDataForSelectedLocation.js';

//set phone cart for selected city/address by default
const selectedCity = getSelectedOption('[name="city"]');
const selectedAddress = getSelectedOption('[name="address"]');
const data = getDataForSelectedLocation(dataBase, selectedCity, selectedAddress);
const dataOfphones = data.phones;
renderReplace('.contacts', phoneNumberCart(dataOfphones, true));
