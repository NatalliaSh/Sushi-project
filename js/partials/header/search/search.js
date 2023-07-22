const searchForm = document.querySelector('.search__form');
const searchImg = searchForm.querySelector('i');
searchImg.addEventListener('click', () => searchForm.classList.toggle('search__form--active'));
