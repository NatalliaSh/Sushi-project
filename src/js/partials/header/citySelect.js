import { contactsDataBase } from './contactsDataBase.js';

const location = document.querySelector('.location');

const select = document.createElement('select');
select.classList.add('text', 'text--s');
const arrOfCities = Object.keys(contactsDataBase);

for (let i = 0; i < arrOfCities.length; i++) {
  const option = document.createElement('option');
  option.setAttribute('value', arrOfCities[i]);
  option.innerText = arrOfCities[i];

  if (i === 0) {
    option.setAttribute('selected', 'true');
  }
  select.appendChild(option);
}

location.appendChild(select);
