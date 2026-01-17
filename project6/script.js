// 🔹 What is Throttle? (Simple Words)

// Throttle ensures that a function executes at most once in a given time interval, no matter how many times the event fires.

// 📌 “Har interval me sirf ek baar”

// window.addEventListener("scroll", () => {
//   console.log("Scrolling...");
// });

function throttle(fn, limit) {
  let isThrottled = false;

  return function (...args) {
    if (isThrottled){ console.log("yes excuted1");
      return;}

    fn.apply(this, args);
    console.log("yes excuted 2");
    isThrottled = true;

    setTimeout(() => {
      isThrottled = false;
      console.log("yes excuted");
    }, limit);
  };
}

function handleScroll() {
  console.log("Scroll handled at", new Date().toLocaleTimeString());
}

window.addEventListener(
  "scroll",
  throttle(handleScroll, 1000)
);

