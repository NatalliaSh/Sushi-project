import { getLeftMenuCart } from './getLeftMenuCart.js';
import { getDataForSelectedLocation } from '../getDataForSelectedLocation.js';
import { getSelectedOption } from '../getSelectedOption.js';
import { dataBase } from '../DataBase/dataBase.js';

const selectedCity = getSelectedOption('[name="city"]');
const selectedAddress = getSelectedOption('[name="address"]');
const dataForSelectedLocation = getDataForSelectedLocation(dataBase, selectedCity, selectedAddress);

//console.log(dataForSelectedLocation);

const menu = getLeftMenuCart(dataForSelectedLocation, '../../../img/menuImg/menuLogo/');
const root = document.querySelector('#menuRoot');
root.appendChild(menu);
