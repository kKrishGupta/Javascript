// 🧠 MEMOIZATION FUNCTION — COMPLETE PROJECT

// Memoization ek optimization technique hai jisme hum function ke pehle se calculate kiye hue result ko store kar lete hain, taaki same input pe dubara calculation na karni pade.

// 📌 “Result yaad rakhna” = Memoization
// function slowSquare(n) {
//   console.log("Calculating...");
//   return n * n;
// }

// slowSquare(5);
// slowSquare(5);

// 1️⃣ Basic Memoization Function
function memoize(fn){
  const cache = {}; // private memory (closure)

return function (n){
  if(cache[n] !== undefined){
     console.log("From Cache");
      return cache[n];
  }
  console.log("Calculating...");
    const result = fn(n);
    cache[n] = result;
    return result;
};
}

function square(n){
  return n*n;
}
const memoSquare = memoize(square);
console.log(memoSquare(5)); // Calculating... → 25
console.log(memoSquare(5)); // From Cache → 25
console.log(memoSquare(6)); // Calculating... → 36


// 🎯 INTERVIEW PERFECT ANSWER

// Memoization is an optimization technique where function results are cached based on input parameters. It improves performance by avoiding repeated computations, and closures are commonly used to store cache privately.

// 🧠 ONE-LINE SUMMARY

// Memoization = cache + closure + performance boost