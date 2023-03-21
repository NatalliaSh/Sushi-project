import { dataBase } from '../../modules/DataBase/dataBase.js';
import { allContactsCart } from './allContactsCart.js';

const root = document.querySelector('.footer__container__right');
root.append(...allContactsCart(dataBase));
