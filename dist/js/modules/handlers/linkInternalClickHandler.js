import { eventBus } from '../eventBus.js';
import { ACTIONS } from '../CONST.js';

export const linkInternalClickHandler = (e) => {
  /*const {
    target: {
      dataset: { link },
    },
  } = e;*/
  let link;
  try {
    link = e.target.dataset.link || e.target.parentNode.dataset.link;
  } catch (error) {
    console.log(error);
    link = null;
  }

  if (link === 'internal') {
    e.preventDefault();
    const path = e.target.getAttribute('href') || e.target.parentNode.getAttribute('href');
    if (path === 'back') {
      history.back();
    } else {
      const queryParams = window.location.search;
      history.pushState({}, '', path + queryParams);
      eventBus.dispatch(ACTIONS.changeRoute, path);
    }
  }
};
