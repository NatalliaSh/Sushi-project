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
    const path = e.target.getAttribute('href') ? `/Sushi-project${e.target.getAttribute('href')}` : `/Sushi-project${e.target.parentNode.getAttribute('href')}`;

    if (path === '/Sushi-project/back') {
      history.back();
    } else {
      const queryParams = window.location.search;
      history.pushState({}, '', path + queryParams);
      eventBus.dispatch(ACTIONS.changeRoute, path);
    }
  }
};

/*'?p=/%D0%A1%D1%83%D1%88%D0%B8&q=city=%D0%9C%D0%B8%D0%BD%D1%81%D0%BA~and~str=%D0%9F%D1%80%D0%B8%D1%82%D1%8B%D1%86%D0%BA%D0%BE%D0%B3%D0%BE%20100'

"?city=%D0%9C%D0%B8%D0%BD%D1%81%D0%BA&str=%D0%9F%D1%80%D0%B8%D1%82%D1%8B%D1%86%D0%BA%D0%BE%D0%B3%D0%BE%20"*/
