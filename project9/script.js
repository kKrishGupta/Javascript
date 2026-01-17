// class AsyncQueue {
//   constructor() {
//     this.queue = Promise.resolve();
//   }

//   add(task) {
//     this.queue = this.queue.then(() => task());
//     return this.queue;
//   }
// }
// function createTask(name, time) {
//   return () =>
//     new Promise(resolve => {
//       setTimeout(() => {
//         console.log(`Task ${name} done`);
//         resolve();
//       }, time);
//     });
// }

// const queue = new AsyncQueue();

// queue.add(createTask("A", 1000));
// queue.add(createTask("B", 500));
// queue.add(createTask("C", 800));

// 🔥 PART 2: Async Queue with Error Handling
// ❓ Problem:

// Agar ek task fail ho jaaye to queue break ho jaati hai ❌

// class AsyncQueue {
//   constructor() {
//     this.queue = Promise.resolve();
//   }

//   add(task) {
//     this.queue = this.queue
//       .then(() => task())
//       .catch(err => {
//         console.error("Task failed:", err);
//       });

//     return this.queue;
//   }
// }

// 🟡 PART 3: Async Queue with Concurrency (ADVANCED ⭐)
// Goal:

// 👉 Ek time me N tasks parallel, baaki wait karein

// ✅ Async Queue with Concurrency Limit
class AsyncQueue {
  constructor(limit = 2) {
    this.limit = limit;
    this.running = 0;
    this.queue = [];
  }

  add(task) {
    return new Promise(resolve => {
      this.queue.push(() => task().then(resolve));
      this.run();
    });
  }

  run() {
    if (this.running >= this.limit || this.queue.length === 0) return;

    const task = this.queue.shift();
    this.running++;

    task().finally(() => {
      this.running--;
      this.run();
    });
  }
}

function task(name, time) {
  return () =>
    new Promise(resolve => {
      console.log(`Start ${name}`);
      setTimeout(() => {
        console.log(`End ${name}`);
        resolve();
      }, time);
    });
}

const queue = new AsyncQueue(2);

queue.add(task("A", 1000));
queue.add(task("B", 500));
queue.add(task("C", 800));
queue.add(task("D", 600));
