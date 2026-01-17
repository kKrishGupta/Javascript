// class EventEmitter {
//   constructor() {
//     this.events = {};
//   }

//   // register listener
//   on(eventName, listener) {
//     if (!this.events[eventName]) {
//       this.events[eventName] = [];
//     }
//     this.events[eventName].push(listener);
//   }

//   // emit event
//   emit(eventName, data) {
//     const listeners = this.events[eventName];
//     if (!listeners) return;

//     listeners.forEach(listener => {
//       listener(data);
//     });
//   }
// }

// const emitter = new EventEmitter();

// emitter.on("message", (data) => {
//   console.log("Listener 1:", data);
// });

// emitter.on("message", (data) => {
//   console.log("Listener 2:", data);
// });

// emitter.emit("message", "Hello World");

// off(eventName, listenerToRemove) {
//   const listeners = this.events[eventName];
//   if (!listeners) return;

//   this.events[eventName] = listeners.filter(
//     listener => listener !== listenerToRemove
//   );
// }

// once(eventName, listener) {
//   const wrapper = (data) => {
//     listener(data);
//     this.off(eventName, wrapper);
//   };

//   this.on(eventName, wrapper);
// }

class EventEmitter {
  constructor() {
    this.events = {};
  }

  on(event, listener) {
    (this.events[event] ||= []).push(listener);
  }

  emit(event, data) {
    (this.events[event] || []).forEach(fn => fn(data));
  }

  off(event, listenerToRemove) {
    this.events[event] =
      (this.events[event] || []).filter(fn => fn !== listenerToRemove);
  }

  once(event, listener) {
    const wrapper = (...args) => {
      listener(...args);
      this.off(event, wrapper);
    };
    this.on(event, wrapper);
  }
}
// 🧠 ONE-LINE SUMMARY

// Event Emitter = emit event → all listeners run