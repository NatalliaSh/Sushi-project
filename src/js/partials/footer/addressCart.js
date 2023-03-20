function addressCart(arrOfaddresses, city) {
  const googleMapLink = 'https://www.google.com/maps/place/';
  const addressList = document.createElement('ul');

  for (let i = 0; i < arrOfaddresses.length; i++) {
    const addressfield = document.createElement('li');
    if (i === 0) {
      const span = document.createElement('p');
      span.innerText = 'Адрес: ';
      addressfield.appendChild(span);
    }
    const addressLink = document.createElement('a');
    addressLink.setAttribute('href', `${googleMapLink}${city}+${arrOfaddresses[i].split(' ').join('+')}`);
    addressLink.setAttribute('target', 'addressOnMap');
    addressLink.setAttribute('title', 'Посмотреть на карте');
    addressLink.innerText = arrOfaddresses[i];

    addressfield.appendChild(addressLink);

    addressList.appendChild(addressfield);
  }

  return addressList;
}

export { addressCart };
