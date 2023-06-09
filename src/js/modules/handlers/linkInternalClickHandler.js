import { eventBus } from '../eventBus.js';
import { ACTIONS } from '../CONST.js';

export const linkInternalClickHandler = (e) => {
  const {
    target: {
      dataset: { link },
    },
  } = e;

  if (link === 'internal') {
    e.preventDefault();
    const path = e.target.getAttribute('href');
    const queryParams = window.location.search;

    history.pushState({}, '', path + queryParams);

    eventBus.dispatch(ACTIONS.changeRoute, path);
  }
};
