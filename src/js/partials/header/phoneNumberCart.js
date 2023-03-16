function phoneNumberCart(arrOfphones) {
  const phoneList = document.createElement('ul');
  const caption = document.createElement('li');
  caption.innerText = 'Наш телефон';
  phoneList.appendChild(caption);

  for (let i = 0; i < arrOfphones.length; i++) {
    const phonefield = document.createElement('li');
    phonefield.classList.add('text--orange');
    const phoneLink = document.createElement('a');
    phonefield.appendChild(phoneLink);

    phoneLink.setAttribute('href', 'tel:' + arrOfphones[i].split(' ').join(''));
    phoneLink.innerText = arrOfphones[i];

    phoneList.appendChild(phonefield);
  }

  return phoneList;
}

export { phoneNumberCart };
