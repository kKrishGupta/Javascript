// ⏳ Promise-Based Delay — COMPLETE PROJECT EXPLANATION
// 1️⃣ Problem: setTimeout Alone Kyun Enough Nahi?
// ❌ Normal setTimeout
// setTimeout(() => {
//   console.log("After 2 sec");
// }, 2000);

// Basic Promise-Based Delay Function
// function delay(ms) {
//   return new Promise(resolve => {
//     setTimeout(resolve, ms);
//   });
// }

// delay(2000).then(() => {
//   console.log("2 seconds passed");
// });

// async function run() {
//   console.log("Start");

//   await delay(2000);
//   console.log("After 2 sec");

//   await delay(1000);
//   console.log("After 3 sec");
// }

// run();

// async function loadData() {
//   console.log("Loading...");

//   await delay(3000);

//   console.log("Data Loaded");
// }

// loadData();

// async function fetchData() {
//   throw "API Failed";
// }

// async function retry(fn, retries = 3) {
//   try {
//     return await fn();
//   } catch (err) {
//     if (retries === 0) throw err;

//     console.log("Retrying...");
//     await delay(1000);
//     return retry(fn, retries - 1);
//   }
// }

// retry(fetchData);
function delay(ms) {
  return new Promise(resolve => {
    setTimeout(resolve, ms);
  });
}


// // 🔥 Project 3: Animation / Step Execution
// async function animate() {
//   console.log("Step 1");
//   await delay(1000);

//   console.log("Step 2");
//   await delay(1000);

//   console.log("Step 3");
// }

// animate();


// 🔥 Project 4: Toast Notification Auto-Hide
async function showToast() {
  console.log("Toast shown");

  await delay(2000);

  console.log("Toast hidden");
}

showToast();
