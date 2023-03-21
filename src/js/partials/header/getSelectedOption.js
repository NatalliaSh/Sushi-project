function getSelectedOption(nameAttrOfSelectForm) {
  const selectCity = document.querySelector(nameAttrOfSelectForm);

  return selectCity.value;
}

export { getSelectedOption };
