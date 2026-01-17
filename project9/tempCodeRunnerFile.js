class AsyncQueue {
  constructor() {
    this.queue = Promise.resolve();
  }

  add(task) {
    this.queue = this.queue.then(() => task());
    return this.queue;
  }
}