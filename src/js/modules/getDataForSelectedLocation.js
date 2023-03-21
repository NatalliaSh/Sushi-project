function getDataForSelectedLocation(dataBase, city, address) {
  const dataOfCity = Object.values(dataBase[city]);
  const dataOfAdress = dataOfCity.filter((el) => el.address === address);

  return dataOfAdress[0];
}

export { getDataForSelectedLocation };
