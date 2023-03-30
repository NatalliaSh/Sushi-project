import { getSelectedOption } from './getSelectedOption.js';

function setQueryParam(category) {
  const city = getSelectedOption('[name="city"]');
  const address = getSelectedOption('[name="address"]');

  if (category) {
    history.replaceState(history.state, '', `?city=${encodeURIComponent(city)}&str=${encodeURIComponent(address)}&category=${encodeURIComponent(category)}`);
  } else {
    history.replaceState(history.state, '', `?city=${encodeURIComponent(city)}&str=${encodeURIComponent(address)}`);
  }
}

export { setQueryParam };
