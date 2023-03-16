function renderReplace(root, children) {
  const element = document.querySelector(root);
  element.replaceChildren(children);
}

export { renderReplace };
