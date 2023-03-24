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
    history.pushState({}, '', path);
    eventBus.dispatch(ACTIONS.changeRoute, path);
  }
};

// const withCheckChanges = fn => e => {
//   e.preventDefault();
//   const path = e.target.getAttribute('href');
//   if (path === '/user') {
//       showModal();
//       fn(e);
//   } else {
//       fn(e);
//   }
// }

window.addEventListener('click', linkInternalClickHandler);
