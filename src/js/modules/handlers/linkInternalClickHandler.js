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
    if (path.includes('&')) {
      const query = window.location.search.split('&category')[0];
      history.pushState({}, '', query + path);
    } else {
      history.pushState({}, '', path);
    }
    eventBus.dispatch(ACTIONS.changeRoute, path);
  }
};

const withCheckChanges = (fn) => (e) => {
  const path = e.target.getAttribute('href');
  e.preventDefault();
  if (path === '/user') {
    showModal();
    fn(e);
  } else {
    fn(e);
  }
};
