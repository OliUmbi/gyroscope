interface Listener {
  name: string,
  callback: () => void
}

let listeners: Listener[] = [];

export const signal = {
  set(name: string, value: any) {
    localStorage.setItem(name, String(value))
    signal.update(name);
  },
  get(name: string) {
    return () => {
      return localStorage.getItem(name);
    }
  },
  subscribe(name: string) {
    return (callback: () => void) => {
      listeners.push({
        name: name,
        callback: callback
      })

      return () => {
        listeners = listeners.filter(listener => listener.callback !== callback);
      }
    }
  },
  update(name: string) {
    for (let listener of listeners) {
      if (listener.name === name) {
        listener.callback()
      }
    }
  }
};
