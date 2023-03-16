import { contactsDataBase } from './contactsDataBase.js';
import { phoneNumberCart } from './phoneNumberCart.js';
import { renderReplace } from '../../modules/renderReplace.js';

//set phone cart for selected city
const location = document.querySelector('.location');
const select = location.querySelector('select');
const selectedCity = select.value;
const arrOfphones = Object.values(contactsDataBase[selectedCity]);
renderReplace('.contacts', phoneNumberCart(arrOfphones));

//callback for change city options
const changeSelectHandler = ({ target: { value: city } }) => {
  renderReplace('.contacts', phoneNumberCart(Object.values(contactsDataBase[city])));
};

select.addEventListener('change', changeSelectHandler);
