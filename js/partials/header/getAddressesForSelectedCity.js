function getAddressesForSelectedCity(dataBase, city) {
  const dataOfCity = Object.values(dataBase[city]);
  let cityArr = [];
  dataOfCity.forEach((el) => {
    cityArr.push(el.address);
  });

  return cityArr;
}

export { getAddressesForSelectedCity };
