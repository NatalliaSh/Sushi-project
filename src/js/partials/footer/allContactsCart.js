import { phoneNumberCart } from '../header/phoneNumberCart.js';

function allContactsCart(dataBase) {
  let nodeArr = [];
  const arrOfCities = Object.keys(dataBase);

  arrOfCities.forEach((city) => {
    const googleMapLink = 'https://www.google.com/maps/place/';
    const addressList = document.createElement('div');
    addressList.classList.add('contactsList');

    const dataOfCity = Object.values(dataBase[city]);
    dataOfCity.forEach((element) => {
      const cityfield = document.createElement('p');
      cityfield.classList.add('contactsList__city');
      cityfield.innerText = city;
      addressList.appendChild(cityfield);

      const addressfield = document.createElement('p');
      const span = document.createElement('span');
      span.innerText = 'Адрес: ';
      addressfield.appendChild(span);
      const addressLink = document.createElement('a');
      addressLink.setAttribute('href', `${googleMapLink}${city}+${element.address.split(' ').join('+')}`);
      addressLink.setAttribute('target', 'addressOnMap');
      addressLink.setAttribute('title', 'Посмотреть на карте');
      addressLink.innerText = element.address;
      addressfield.appendChild(addressLink);
      addressList.appendChild(addressfield);

      const phonesArr = Object.values(element.phones);
      addressList.appendChild(phoneNumberCart(phonesArr));
    });

    nodeArr.push(addressList);
  });

  return nodeArr;
}

export { allContactsCart };
