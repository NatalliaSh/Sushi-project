import { getLeftMenuCart } from './getLeftMenuCart.js';
import { getCentralMenuCards } from '../../partials/cards/getCentralMenuCards.js';
import { getDataForSelectedLocation } from '../getDataForSelectedLocation.js';
import { getSelectedOption } from '../getSelectedOption.js';
import { dataBase } from '../DataBase/dataBase.js';

const selectedCity = getSelectedOption('[name="city"]');
const selectedAddress = getSelectedOption('[name="address"]');
const dataForSelectedLocation = getDataForSelectedLocation(dataBase, selectedCity, selectedAddress);

//console.log(dataForSelectedLocation);

const menuLeft = getLeftMenuCart(dataForSelectedLocation, '../../../img/menuImg/menuLogo/');
const rootLeft = document.querySelector('#menuRootLeft');
rootLeft.appendChild(menuLeft);

const menuCentral = getCentralMenuCards(dataForSelectedLocation, '../../../img/menuImg/menuPicture/');
const rootCentral = document.querySelector('#rootCentral');
rootCentral.appendChild(menuCentral);
