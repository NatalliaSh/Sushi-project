function getDOMElement(tag, attributes) {
  const el = document.createElement(tag);
  Object.keys(attributes).forEach((attribute) => (el[attribute] = attributes[attribute]));

  return el;
}

export { getDOMElement };
