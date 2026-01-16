// fundamentals of javascript
// arrays and objects
// function return 
//  async js coding 

var arr = [1,2,3,4,5,6,7,8,9];
// for each map filter find indexOf 
// arr.forEach(function(val) {
//  console.log(val+ " hello");
// });

// var newArr = arr.map((val) =>{
// return val;
// });

// console.log(newArr);

// arr.filter(function(val){
//   if(val>3){
//     console.log("true");
//   }else{console.log(false);}
// })

// arr.find((val)=>{
//   if(val=== 5){
//     console.log(true);
//   }
// })

// var ans = arr.indexOf(2);
// console.log(ans);

// var obj = {
//   name :"harsh",
//   age:25,
//   kuchbhi :kuchbhi
// };

// var obj = {
//   name : "krish",
//   age : 12
// };
// // Object.freeze(obj);
// obj.age = 25;
// // obj['name']


// function is object in javascript

// var arr= [1,2,3,4,5,6];
// function abcd(a,b,c){
// return "the world";
// }


// console.log(abcd());

// async javascript coding
// async function getUser() {
//   const blob = await fetch("https://randomuser.me/api/");
//   const res = await blob.json();
//   console.log(res);
// }

getUser();
//  line by line code chale synchronous
// jo bhhi code async nature ka ho usey side stack mein bhej do and agle ko chalao jo bhi sync nature ka ho and sync code chl jaaye and 

async function abcd(){
  // ----
  var blob = await  fetch(`https://randomuser.me/api/`);
  var ans = blob.json();
  console.log(ans.resu);
  // --------

}