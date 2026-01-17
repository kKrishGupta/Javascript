//  function search(query) {
//   console.log("API Call for:", query);
// }

// // simulate typing
// search("H");
// search("He");
// search("Hel");
// search("Hell");
// search("Hello");

function debounce(fn,delay){
  let timerId;
  return function(...args){
    clearTimeout(timerId);
    timerId = setTimeout(() =>{
      fn.apply(this, args);
    },delay);
  };
}

function searchApi(query) {
  console.log("Searching for:", query);
}

const debouncedSearch = debounce(searchApi, 500);

document.getElementById("search").addEventListener("input", (e) => {
  debouncedSearch(e.target.value);
});

window.addEventListener(
  "resize",
  debounce(() => {
    console.log("Resize handled");
  }, 300)
);

// 🎯 INTERVIEW PERFECT ANSWER

// Debounce is a technique that delays the execution of a function until a specified time has passed since the last event. It is commonly used to optimize performance for events like search input or resize.

// 🧠 ONE-LINE SUMMARY

// Debounce = “Wait until user stops”