import { getLeftMenuCart } from '../../partials/cards/getLeftMenuCart.js';
import { getCentralMenuCards } from '../../partials/cards/getCentralMenuCards.js';
import { getDataForSelectedLocation } from '../getDataForSelectedLocation.js';
import { getSelectedOption } from '../getSelectedOption.js';
import { dataBase } from '../dataBase/dataBase.js';
import { getProductsPage } from '../pages/getProductsPage.js';
import { productSpecificationData } from '../dataBase/productSpecificationData.js';

const selectedCity = getSelectedOption('[name="city"]');
const selectedAddress = getSelectedOption('[name="address"]');
const dataForSelectedLocation = getDataForSelectedLocation(dataBase, selectedCity, selectedAddress);

const menuLeft = getLeftMenuCart(dataForSelectedLocation, '../../../img/menuImg/menuLogo/');
const rootLeft = document.querySelector('#menuRootLeft');
rootLeft.appendChild(menuLeft);

const menuCentral = getCentralMenuCards(dataForSelectedLocation, '../../../img/menuImg/menuPicture/');
const rootCentral = document.querySelector('#rootCentral');
rootCentral.appendChild(menuCentral);

/*const cards = getProductsPage(dataForSelectedLocation, productSpecificationData, '../../../img/menuImg/productsImg/', 'WOK', '');

document.body.append(cards);*/
