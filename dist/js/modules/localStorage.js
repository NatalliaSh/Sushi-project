import { getUser } from './authFirebase.js';

const LSUserIDKey = 'uid';
const LSOrder = 'orders';

export const sendOrderToLS = (order, userId) => {
  return new Promise((res) => {
    const orderId = Date.now();
    const orderInLocalStorage = JSON.parse(localStorage.getItem(LSOrder) || '[]');
    const data = { [orderId]: { userId, order } };
    orderInLocalStorage.push(data);
    localStorage.setItem(LSOrder, JSON.stringify(orderInLocalStorage));

    res(`Спасибо за заказ!\n\nНомер Вашего заказа: ${orderId}`);
  });
};

export const localStorageHandler = (user) => {
  const userID = user.uid;
  const users = JSON.parse(localStorage.getItem(LSUserIDKey) || '[]');
  const isUnique = !users.some((uid) => {
    const id = Object.keys(uid)[0];
    return id === userID;
  });
  if (isUnique) {
    const user = { [userID]: { backet: {} } };
    users.push(user);
  }
  localStorage.setItem(LSUserIDKey, JSON.stringify(users));
};

export const getUserBacket = (userId) => {
  return new Promise((res) => {
    const localStorageData = JSON.parse(localStorage.getItem(LSUserIDKey));
    const userData = localStorageData.find((item) => Object.keys(item)[0] === userId);

    res(userData[userId].backet);
  });
};

async function addProductToLocalStorage(data) {
  const currentUser = await getUser();
  const users = JSON.parse(localStorage.getItem(LSUserIDKey));
  const newData = users.map((item) => {
    if (Object.keys(item)[0] === currentUser.uid) {
      const userID = Object.keys(item)[0];
      const key = Object.keys(data)[0];
      if (!item[userID].backet) {
        item[userID].backet = {};
      }
      item[userID].backet[key] = data[key];
    }
    return item;
  });

  localStorage.setItem(LSUserIDKey, JSON.stringify(newData));
}

async function removeProductFromLocalStorage(producid) {
  const currentUser = await getUser();
  const users = JSON.parse(localStorage.getItem(LSUserIDKey));
  const newData = users.map((item) => {
    if (Object.keys(item)[0] === currentUser.uid) {
      const userID = Object.keys(item)[0];
      delete item[userID].backet[producid];
    }
    return item;
  });

  localStorage.setItem(LSUserIDKey, JSON.stringify(newData));
}

function removeAllProductsFromBacketInLocalStorage(userId) {
  const users = JSON.parse(localStorage.getItem(LSUserIDKey));
  const newData = users.map((item) => {
    if (Object.keys(item)[0] === userId) {
      item[userId].backet = {};
    }
    return item;
  });
  localStorage.setItem(LSUserIDKey, JSON.stringify(newData));
}

export { addProductToLocalStorage };
export { removeProductFromLocalStorage };
export { removeAllProductsFromBacketInLocalStorage };
