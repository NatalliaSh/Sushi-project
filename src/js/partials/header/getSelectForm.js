function getSelectForm(arrOfOptions, name) {
  const select = document.createElement('select');
  select.classList.add('text', 'text--s');
  select.setAttribute('name', name);

  for (let i = 0; i < arrOfOptions.length; i++) {
    const option = document.createElement('option');
    option.setAttribute('value', arrOfOptions[i]);
    option.innerText = arrOfOptions[i];

    if (i === 0) {
      option.setAttribute('selected', 'true');
    }
    select.appendChild(option);
  }

  return select;
}

export { getSelectForm };
