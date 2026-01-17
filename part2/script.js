// function greet(name, callback) {
//   console.log("Hello " + name);
//   callback();
// }

// function bye() {
//   console.log("Bye!");
// }

// greet("Krish", bye);


// setTimeout(() => {
//   console.log("Async task done");
// }, 1000);

// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("Data received");
//   }, 1000);
// });

// promise.then(data => console.log(data));

// const p = new Promise((resolve, reject) => {
//   reject("Something went wrong");
// });

// p.catch(err => console.log(err));

// Promise.resolve(10)
//   .then(val => {
//     console.log(val);
//     throw new Error("Oops");
//   })
//   .then(val => {
//     console.log("Will not run");
//   })
//   .catch(err => {
//     console.log("Caught:", err.message);
//   });


// async function getUsers() {
//   try {
//     const res = await fetch("https://api.example.com/users");
//     const data = await res.json();
//     console.log(data);
//   } catch (err) {
//     console.log("Error:", err);
//   }
// }

console.log("Start");

setTimeout(() => {
  console.log("Timeout");
}, 0);

Promise.resolve().then(() => {
  console.log("Promise");
});

console.log("End");
