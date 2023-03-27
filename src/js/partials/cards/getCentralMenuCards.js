import { getDOMElement } from '../../modules/getDOMElement.js';
import { menuPictureNames } from '../../modules/CONST.js';
import { bigItemName } from '../../modules/CONST.js';

function getCentralMenuCards(dataForSelectedLocation, imgPath) {
  const container = getDOMElement('div', { className: 'container__menu' });

  const arrOfMenuList = dataForSelectedLocation.menuList;

  arrOfMenuList.forEach((element) => {
    const item = getDOMElement('div', { className: 'container__menu__item', style: `background-image: url("${imgPath + menuPictureNames[element]}");` });

    bigItemName.forEach((el) => {
      if (el === element) {
        item.classList.add('container__menu__item--big');
      }
    });

    let ref = `&category=${encodeURIComponent(element)}`;
    const a = getDOMElement('a', {
      className: 'container__menu__item__link',
      href: ref,
      innerText: element,
    });
    a.setAttribute('data-link', 'internal');

    item.appendChild(a);
    container.appendChild(item);
  });

  return container;
}

export { getCentralMenuCards };
