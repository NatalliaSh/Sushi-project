import { logoMenuImgNames } from '../../modules/CONST.js';

function getLeftMenuCart(dataForSelectedLocation, imgPath) {
  const list = document.createElement('ul');
  list.classList.add('menuList');

  const arrOfMenuList = dataForSelectedLocation.menuList;

  arrOfMenuList.forEach((element) => {
    const li = document.createElement('li');
    const a = document.createElement('a');

    let href = `&category=${encodeURIComponent(element)}`;
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
