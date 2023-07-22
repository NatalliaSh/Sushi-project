import { allContactsCart } from './allContactsCart.js';

function setAllContacts(dataBase, root) {
  const rootEl = document.querySelector(root);
  rootEl.append(...allContactsCart(dataBase));
}

export { setAllContacts };
