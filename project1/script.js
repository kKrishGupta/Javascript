// counter using closure
// roblem Statement (Simple Words)

// Hume ek aisa counter chahiye:

// Jo bahar se directly modify na ho

// Jo apni value yaad rakhe

// Har call pe value increment kare
// 👉 Matlab private variable + persistent state
//   let count = 0;
// function counter(){
//   return function (){
//     count++;
//     console.log(count);
//     return count;
//   };
// }
// const inc = counter();
// console.log(inc());
// console.log(inc());
// console.log(inc());

// 1️⃣ Like Counter (Instagram / YouTube)
// function likeCounter() {
//   let likes = 0;

//   return function () {
//     likes++;
//     console.log(`Likes: ${likes}`);
//   };
// }

// const like = likeCounter();
// like(); // Likes: 1
// console.log(like());
// console.log(like());
// console.log(like());

// like(); // Likes: 2
// 2️⃣ Page View Counter
// function pageView(){
// let views= 0;
// return()=> ++views;
// }
// const view = pageView();
// console.log(view());
// console.log(view());
// console.log(view());
// console.log(view());

// 3️⃣ Button Click Counter (Browser)
function clickCounter() {
  let clicks = 0;

  return function () {
    clicks++;
    console.log("Clicked:", clicks);
  };
}

const btnCounter = clickCounter();
const button = document.getElementById("btn");
button.addEventListener("click", btnCounter);

