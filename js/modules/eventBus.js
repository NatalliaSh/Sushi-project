class EventBus {
  #listeners = [];

  dispatch(actionType, payload) {
    this.#listeners.forEach((listener) => {
      if (listener.actionType === actionType) {
        listener.callback(payload);
      }
    });
  }

  subscribe(actionType, callback) {
    this.#listeners.push({
      actionType,
      callback,
    });
  }
}

const eventBus = new EventBus();

export { eventBus };
