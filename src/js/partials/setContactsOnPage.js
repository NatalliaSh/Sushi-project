import { contactsDataBase } from '../modules/DataBase/contactsDataBase.js';
import { phoneNumberCart } from './header/phoneNumberCart.js';
import { addressCart } from './footer/addressCart.js';
import { renderReplace } from '../modules/renderReplace.js';

//set phone and address cart for selected city
const location = document.querySelector('.location');
const select = location.querySelector('select');
const selectedCity = select.value;
const arrOfphones = Object.values(contactsDataBase[selectedCity].телефон);
const arrOfaddresses = Object.values(contactsDataBase[selectedCity].адрес);
renderReplace('.contacts', phoneNumberCart(arrOfphones, true));
renderReplace('.footer__container__right__contacts', phoneNumberCart(arrOfphones));
renderReplace('.footer__container__right__address', addressCart(arrOfaddresses, selectedCity));

//callback for change city options
const changeSelectHandlerHeader = ({ target: { value: city } }) => {
  renderReplace('.contacts', phoneNumberCart(Object.values(contactsDataBase[city].телефон), true));
};
const changeSelectHandlerFooter = ({ target: { value: city } }) => {
  renderReplace('.footer__container__right__contacts', phoneNumberCart(Object.values(contactsDataBase[city].телефон)));

  renderReplace('.footer__container__right__address', addressCart(Object.values(contactsDataBase[city].адрес), city));
};

select.addEventListener('change', changeSelectHandlerHeader);
select.addEventListener('change', changeSelectHandlerFooter);
