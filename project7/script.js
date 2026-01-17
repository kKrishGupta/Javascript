// 🟦 PART 1: Custom map() Implementation
// 🔹 What does map() do?

// map() har element pe callback chalata hai
// aur new array return karta hai

// Native Example
// const arr = [1, 2, 3];

// const result = arr.map(x => x * 2);
// // [2, 4, 6]
// console.log(result);
// Array.prototype.myMap = function (callback) {
//   const result = [];

//   for (let i = 0; i < this.length; i++) {
//     result.push(callback(this[i], i, this));
//     console.log(result);
//   }

//   return result;
// };

// const nums = [1, 2, 3];

// const doubled = nums.myMap((num) => num * 2);
// console.log(doubled);

// Array.prototype.myMap = function (callback) {
//   const result = [];

//   for (let i = 0; i < this.length; i++) {
//     if (i in this) {
//       result.push(callback(this[i], i, this));
//     }
//   }

//   return result;
// };

Array.prototype.myMap = function (callback, thisArg) {
  if (typeof callback !== "function") {
    throw new TypeError(callback + " is not a function");
  }

  const result = [];
  const arr = this;

  for (let i = 0; i < arr.length; i++) {
    if (i in arr) {
      result.push(callback.call(thisArg, arr[i], i, arr));
    }
  }

  return result;
};

Array.prototype.myFilter = function (callback, thisArg) {
  if (typeof callback !== "function") {
    throw new TypeError(callback + " is not a function");
  }

  const result = [];
  const arr = this;

  for (let i = 0; i < arr.length; i++) {
    if (i in arr && callback.call(thisArg, arr[i], i, arr)) {
      result.push(arr[i]);
    }
  }

  return result;
};


const arr = [1, , 3, 4];

console.log(arr.myMap(x => x * 2));    // [2, 6, 8]
console.log(arr.myFilter(x => x > 2)); // [3, 4]
