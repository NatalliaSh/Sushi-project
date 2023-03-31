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
    /*if (routes[path] === 'category') {
      const queryParams = window.location.search;
      if (queryParams.includes('&category')) {
        const queryParamsNew = queryParams.replace(queryParams.match(/&category=[^&]*/ /*gm), path);*/
    /*    history.pushState({}, '', '/' + queryParamsNew);
      } else {
        const queryParamsNew = queryParams + path;
        history.pushState({}, '', '/' + queryParamsNew);
      }
    } else {*/
    const queryParams = window.location.search;
    //const category = queryParams.match(/&category=[^&]*/gm);
    //const queryParamsNew = queryParams.replace(category, '');
    history.pushState({}, '', path + queryParams);
    //}
    eventBus.dispatch(ACTIONS.changeRoute, path);
  }
};

/*const withCheckChanges = (fn) => (e) => {
  const path = e.target.getAttribute('href');
  e.preventDefault();
  if (path === '/user') {
    showModal();
    fn(e);
  } else {
    fn(e);
  }
};*/
