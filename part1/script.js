// var x =10;
// function foo() {
// var y =20;
// }
// var ne = foo();
// console.log(ne);

// function one() {
//   two();
// }
// function two() {
//   three();
// }
// function three() {
//   console.log("Hello");
// }
// one();

// function bankAccount() {
//   let balance = 1000;

//   return {
//     deposit(amount) {
//       balance += amount;
//       console.log(balance);
//     },
//     withdraw(amount) {
//       balance -= amount;
//       console.log(balance);
//     }
//   };
// }

// const acc = bankAccount();
// acc.deposit(500);   // 1500
// acc.withdraw(300);  // 1200

// function counter() {
//   let count = 0;
//   return function () {
//     return ++count;
//   };
// }

// const c = counter();
// c(); // 1
// c(); // 2
// console.log(c);

// console.log(this);
// function show() {
//   console.log(this);
// }
// show();

// const user = {
//   name :'krish',
//   greet(){
//     console.log(this.name);
//   }
// };

// user.greet();

// const obj = {
//   name: "JS",
//   show: () => {
//     console.log(this.name);
//   }
// };

// obj.show();

// function Person(name) {
//   this.name = name;
// }

// const p1 = new Person("Krish");
// console.log(p1.name);

// function greet(city) {
//   console.log(this.name, city);
// }

// const user = { name: "Krish" };

// // greet.call(user, "Delhi");
// // greet.apply(user, ["Mumbai"]);
// const boundFn = greet.bind(user, "Pune");
// boundFn();

// button.addEventListener("click", function () {
//   console.log(this);
// });

// class User {
//   constructor(name) {
//     this.name = name;
//   }

//   greet() {
//     console.log(this.name);
//   }
// }

// const u = new User("Krish");
// u.greet();

// const obj = {
//   name: "JS",
//   show() {
//     return () => {
//       console.log(this.name);
//     };
//   }
// };

// obj.show()();
