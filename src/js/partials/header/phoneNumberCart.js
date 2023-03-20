function phoneNumberCart(arrOfphones, ifHeader) {
  const phoneList = document.createElement('ul');

  if (ifHeader) {
    const caption = document.createElement('li');
    caption.innerText = 'Наш телефон';
    phoneList.appendChild(caption);
  }

  for (let i = 0; i < arrOfphones.length; i++) {
    const phonefield = document.createElement('li');

    if (!ifHeader) {
      const span = document.createElement('span');
      span.innerText = 'Тел: ';
      phonefield.appendChild(span);
    }

    const phoneLink = document.createElement('a');
    phoneLink.setAttribute('href', 'tel:' + arrOfphones[i].split(' ').join(''));
    phoneLink.setAttribute('title', 'Позвонить нам');
    phoneLink.innerText = arrOfphones[i];
    phonefield.appendChild(phoneLink);

    phoneList.appendChild(phonefield);
  }

  return phoneList;
}

export { phoneNumberCart };
