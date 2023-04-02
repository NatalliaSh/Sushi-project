export const btnWantHandler = ({ target }) => {
  target.classList.remove('active');
  target.nextElementSibling.classList.add('active');
};
