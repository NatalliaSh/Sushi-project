const route = {
  Пицца: 'pizza',
  Салаты: 'salads',
  Напитки: 'drinks',
  Акции: 'sale',
  Суши: 'sushi',
  Сеты: 'sets',
  Роллы: 'rolls',
};

function getMenuCart(dataForSelectedLocation, imgPath) {
  const list = document.createElement('ul');
  list.classList.add('menuList');

  const arrOfMenuList = dataForSelectedLocation.menuList;

  arrOfMenuList.forEach((element) => {
    const li = document.createElement('li');

    let href = `/${element.name}`;
    for (let key in route) {
      if (key === element.name) {
        href = `/${route[key]}`;
      }
    }

    const a = document.createElement('a');
    a.setAttribute('href', href);
    const img = document.createElement('img');
    img.setAttribute('src', imgPath + element.imgName);
    img.setAttribute('alt', 'Product logotype');
    a.appendChild(img);

    const name = document.createElement('span');
    name.innerText = element.name;
    a.appendChild(name);

    li.appendChild(a);
    list.appendChild(li);
  });

  return list;
}

export { getMenuCart };
