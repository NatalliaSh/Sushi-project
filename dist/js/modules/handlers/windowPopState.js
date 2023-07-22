import { eventBus } from '../eventBus.js';
import { ACTIONS } from '../CONST.js';

const windowPopState = (e) => {
  const {
    target: {
      location: { pathname },
    },
  } = e;

  eventBus.dispatch(ACTIONS.changeRoute, pathname);
};

window.onpopstate = windowPopState;
