import { getDOMElement } from '../../modules/getDOMElement.js';

function getBreadcrumbs(isOnlyOnMainPage) {
  const breadcrumbs = getDOMElement('div', { className: 'breadcrumbs text--light text--xs text--grey', innerHTML: '&larr; ' });

  const breadcrumbsMainPage = getDOMElement('a', { href: '/', className: 'breadcrumbs__toMainPage', innerText: `На главную` });
  breadcrumbsMainPage.setAttribute('data-link', 'internal');
  const breadcrumbsBack = getDOMElement('a', { href: 'back', className: 'breadcrumbs__goBack', innerText: `Назад` });
  breadcrumbsBack.setAttribute('data-link', 'internal');

  breadcrumbs.appendChild(breadcrumbsMainPage);

  if (!isOnlyOnMainPage) {
    breadcrumbs.appendChild(getDOMElement('span', { innerText: ' - ' }));
    breadcrumbs.appendChild(breadcrumbsBack);
  }

  return breadcrumbs;
}

export { getBreadcrumbs };
