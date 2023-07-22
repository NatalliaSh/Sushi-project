import { logoMenuImgNames } from '../../modules/CONST.js';
import { getDOMElement } from '../../modules/getDOMElement.js';

function getLeftMenuCart(dataForSelectedLocation, imgPath) {
  const list = document.createElement('ul');
  list.classList.add('menuList');

  //closer for menu in middle and mobile size
  list.appendChild(
    getDOMElement('li', {
      classList: 'closer',
      id: 'closeMobileMenu',
      innerText: 'X',
    }),
  );

  const arrOfMenuList = dataForSelectedLocation.menuList;

  arrOfMenuList.forEach((element) => {
    const li = document.createElement('li');
    const a = document.createElement('a');

    let href = '/' + encodeURIComponent(element);
    a.setAttribute('href', href);
    a.setAttribute('data-link', 'internal');

    const img = document.createElement('img');
    img.setAttribute('src', imgPath + logoMenuImgNames[element]);
    img.setAttribute('alt', 'Product logotype');
    a.appendChild(img);
    img.setAttribute('data-link', 'internal');
    img.setAttribute('href', href);

    const name = document.createElement('span');
    name.innerText = element;
    name.setAttribute('data-link', 'internal');
    name.setAttribute('href', href);
    a.appendChild(name);

    li.appendChild(a);
    list.appendChild(li);
  });

  return list;
}

export { getLeftMenuCart };
