import { getSelectedOption } from './getSelectedOption.js';

function setQueryParam() {
  const city = getSelectedOption('[name="city"]');
  const address = getSelectedOption('[name="address"]');

  history.pushState({}, '', `?city=${encodeURIComponent(city)}&str=${encodeURIComponent(address)}`);
}

export { setQueryParam };
