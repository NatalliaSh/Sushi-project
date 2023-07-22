import { getSelectedOption } from './getSelectedOption.js';

function getDataForSelectedLocation(dataBase) {
  const city = getSelectedOption('[name="city"]');
  const address = getSelectedOption('[name="address"]');
  const dataOfCity = Object.values(dataBase[city]);
  const dataOfAdress = dataOfCity.filter((el) => el.address === address);

  return dataOfAdress[0];
}

export { getDataForSelectedLocation };
