function windowEventHandler(e) {
  this.handlers.forEach(({ callback, id, type }) => {
    if (e.target.id === id && e.type === type) {
      callback(e);
    }
  });
}

windowEventHandler.register = function (fn, id, type) {
  if (this.handlers) {
    this.handlers.push({ callback: fn, id, type });
  } else {
    this.handlers = [{ callback: fn, id, type }];
  }
};

window.addEventListener('click', windowEventHandler.bind(windowEventHandler));
window.addEventListener('change', windowEventHandler.bind(windowEventHandler));

export { windowEventHandler };
