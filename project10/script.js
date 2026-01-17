// 🟢 PART 1: Basic Rate Limiter (Time Window Based)
// Rule:

// 👉 1 second me sirf N calls allowed

// function rateLimiter(fn, limit, interval) {
//   let count = 0;
//   let startTime = Date.now();

//   return function (...args) {
//     const now = Date.now();

//     if (now - startTime >= interval) {
//       count = 0;
//       startTime = now;
//     }

//     if (count < limit) {
//       count++;
//       fn.apply(this, args);
//     } else {
//       console.log("❌ Rate limit exceeded");
//     }
//   };
// }

// function apiCall() {
//   console.log("API called at", new Date().toLocaleTimeString());
// }

// const limitedApi = rateLimiter(apiCall, 2, 1000);

// setInterval(() => {
//   limitedApi();
// }, 300);
//xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

// ✅ Rate Limiter with Queue
// function rateLimiterWithQueue(fn, limit, interval) {
//   let queue = [];
//   let active = 0;

//   setInterval(() => {
//     active = 0;
//     while (queue.length && active < limit) {
//       const task = queue.shift();
//       task();
//       active++;
//     }
//   }, interval);

//   return function (...args) {
//     queue.push(() => fn.apply(this, args));
//   };
// }
// function apiCall() {
//   console.log("API called at", new Date().toLocaleTimeString());
// }


// const limitedApi = rateLimiterWithQueue(apiCall, 2, 1000);

// setInterval(() => {
//   limitedApi();
// }, 300);

// *********************************

class TokenBucket{
  constructor(capacity, refillRate){
    this.capacity = capacity;
    this.tokens = capacity;
    this.refillRate = refillRate; // tokens per second
    this.lastRefill = Date.now();
  }
  allow(){
    const now = Date.now();
    const elapsed = (now - this.lastRefill)/1000;
    this.tokens = Math.min(this.capacity,
    this.tokens + elapsed * this.refillRate 
    );
    this.lastRefill = now;
    if (this.tokens >= 1) {
      this.tokens--;
      return true;
    }
    return false;
  }
}
const bucket = new TokenBucket(3, 1); // 3 max, 1/sec
setInterval(() => {
  if (bucket.allow()) {
    console.log("✅ API Allowed");
  } else {
    console.log("❌ Rate Limited");
  }
}, 300);
