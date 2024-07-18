/*
// ====================== Scope chain, Scope and Lexical Environment ===================
// 1.
function a() {
  console.log(b);
}
var b = 10;
a(); // 10 => value of b

// 2.
function a() {
  c(); // 10 => value of b
  function c() {
    console.log(b);
  }
}
var b = 10;
a();

// 3.
function a() {
  var b = 10;
  c();
  function c() {
    console.log(b); // 10 => value of b
  }
}
a();

// 4.
function a() {
  var b = 10;
  c();
  function c() {
    console.log(b); // 10 => value of b
  }
}
a();
console.log(b); // ReferenceError: b is not defined

// =====================================================================================
*/

/*
// ====================== let & const and Temporal Dead Zone in JS ===================
// 1.
console.log(b); // undefined (in case of var declaration)
let a = 10;
var b = 100;

// 2.
console.log(a); // ReferenceError: a cannot be used before initialization
let a = 10;
var b = 100;
// =====================================================================================
*/

// ========================= Block, Scope and Shadowing in JS ==========================
// Illegal Shadowing
// let a = 10;
// {
//   var a = 10; // SyntaxError: Identifier 'a' has already been declared
// }
// =====================================================================================

// ================================== Closures in JS ===================================
// function x() {
//   var a = 21;
//   function y() {
//     console.log(a); // here the closure is formed, this function y is bundled together with its lexical environment (the variable from function x)
//   }
//   y();
// }
// x();

// function z() {
//   var b = 900;
//   function x() {
//     var a = 21;
//     function y() {
//       console.log(a, b);
//     }
//     a = 100;
//     y();
//   }
//   x();
// }
// z(); // 100 900 : this is because function y has formed closures along with x and z, hence it holds reference to its lexical parent's variables thus the values printed are the values which were declared in its parent's lexical environments
// =====================================================================================

// ============================== setTimeout + Closures ================================
// function x() {
//   var a = 11;
//   setTimeout(function () {
//     console.log(a);
//   }, 3000); // value of a will be printed after 3 seconds.
// }

// function x() {
//   var a = 11;
//   setTimeout(function () {
//     console.log(a);
//   }, 3000); // value of a will be printed after 3 seconds.

//   console.log("Hey there!"); // first this statement will be printed, then program will wait for the timer to expire, and then, value of a will be printed.
// }

// function x() {
//   var a = 11;
//   setTimeout(function () {
//     console.log(a);
//   }, 3000); // value of a will be printed after 3 seconds.

//   for (let i = 0; i < 20; i++) {
//     console.log("hii"); // this for loop was completely executed, then only after 3 seconds the value of a was printed
//   }
// }
// x();

// function x() {
//   for (var i = 1; i <= 5; i++) {
//     setTimeout(function () {
//       console.log(i);
//     }, i * 1000);
//   }
// }
// x();

// Quick fix of the above problem
// function x() {
//   for (let i = 1; i <= 5; i++) {
//     setTimeout(function () {
//       console.log(i);
//     }, i * 1000);
//   }
// }
// x();

// but what if we are told to use "var" only and still it should work fine
// Explanation in Readme
// function x() {
//   for (let i = 1; i <= 5; i++) {
//     function close(i) {
//       setTimeout(function () {
//         console.log(i);
//       }, i * 1000);
//     }
//     close(i);
//   }
// }
// x();
// =====================================================================================

// ========================= Jargons in Functions: A Mystery ===========================
// function fun() {
//   return function xyz() {
//     console.log("Hey");
//   };
// }
// console.log(fun());
// =====================================================================================

// =============================== Callback Functions ==================================
// function x(y) {
//   console.log("x");
//   y();
// }
// x(function y() {
//   console.log("y");
// });
// =====================================================================================

// ============================= Higher order Functions ================================

// // a function that takes another function as an argument or returns any function from it, that is known as higher order function , below is a small example
// function x() {
//   console.log("hi");
// }
// function y(x) {
//   x();
// }
// // in the above example function y() is a higher order function as it takes function x() as an argument. and function x() is a callback function as it will get invoked only when function y() is invoked

// // let's understand this with another example

// // let's say we are given an array of radii of circle, and we need to calculate its area, so we will do something like below:
// const radius = [3, 1, 2, 4];
// const calculateArea = function (radius) {
//   const output = [];

//   for (let i = 0; i < radius.length; i++) {
//     output.push(Math.PI * radius[i] * radius[i]);
//   }

//   return output;
// };
// console.log(calculateArea(radius));

// // but now what if we are asked to calculate the circuference of these given radii, we would have done something like below:
// const calculateCircumference = function (radius) {
//   const output = [];

//   for (let i = 0; i < radius.length; i++) {
//     output.push(2 * Math.PI * radius[i]);
//   }

//   return output;
// };
// console.log(calculateCircumference(radius));

// // and now let's say we need to calculate diameter for the same radii given, we would have again went and done this same thing
// const calculateDiameter = function (radius) {
//   const output = [];

//   for (let i = 0; i < radius.length; i++) {
//     output.push(2 * radius[i]);
//   }

//   return output;
// };
// console.log(calculateDiameter(radius));

// // and now this is not a good way of doing code like this, we are continously repeating ourselves, copying and pasting the code again and again by changing name and logic into it. but that's not the case in real world programming.

// // in real world situations, we cannot copy paste, we need to follow the DRY principle that stands for don't repeat yourself. so we can optimize the above in the following way.

// // STEP 1: take out the logic (the dynamic part of the code)
// const area = function (radius) {
//   return Math.PI * radius * radius;
// };

// const circuference = function (radius) {
//   return 2 * Math.PI * radius;
// };

// const diameter = function (radius) {
//   return 2 * radius;
// };

// // // STEP 2: Make the repeated code generic and try to put the logic inside the function from outside, like earlier we were passing radius to all of the functions, let's just pass a logic this time
// // const calculate = function (radius, logic) {
// //   const output = [];

// //   for (let i = 0; i < radius.length; i++) {
// //     output.push(logic(radius[i]));
// //   }

// //   return output;
// // };

// // // STEP 3: Now call this calculate function along with the logic you wrote above
// // console.log("area using calculate function\n" + calculate(radius, area));
// // console.log(calculate(radius, circuference));
// // console.log(calculate(radius, diameter));

// // BEAUTY OF FUNCTIONAL PROGRAMMING
// // above is the beauty of the functional programming that it made old fashioned code a modular one.
// // if we see the above code, we can see that each and every function has its own unique task to perform area, circumference and diameter just need to apply the calculation logic and the function calculate has its own unique task of creating an array and pushing the calculated values in output array and return the output array

// // this is the beauty of functional programming that we think the larger chunk of code in small functional and reusable components rather than repeating code again and again!!

// // MAP POLYFILL
// // Above we can see that the calculate function is looking just like the map function. map is very common higher order function and it maps the whole array passed to it to some logic. Like if we call the area function using this map function, let's see what will happen:-
// // console.log("area using map function\n" + radius.map(area));

// // and we can see that we are getting same output. so we can say that we have written our implementation of map in the calculate function. or in other words we created a polyfill for the map function using our calculate function

// // but now we can have an argument that for the map function, we call it using array's reference like array.map(), but we are calling calculate as a normal function and passing the radius into it as an argument. so to achieve array.calculate() we can simply make the function as below:-

// Array.prototype.calculate = function (logic) {
//   const output = [];

//   for (let i = 0; i < this.length; i++) {
//     output.push(logic(this[i]));
//   }

//   return output;
// };

// // as soon as we add Array.prototype to the calculate function, it becomes available for all of the arrays! and now we can call it like below -
// console.log(radius.calculate(area));
// console.log(radius.calculate(circuference));
// console.log(radius.calculate(diameter));

// =====================================================================================

// ============================= map, filter and reduce ================================

// Basic ones are covered in the notes.

// Tricky examples -
// Tricky MAP() : let's say we have an array of objects containing user data, and we want a list of full names of the users
const users = [
  { firstName: "Shivani", lastName: "Raichandani", age: 24 },
  { firstName: "Pooja", lastName: "Vardani", age: 25 },
  { firstName: "Vanshika", lastName: "Puri", age: 23 },
  { firstName: "Shweta", lastName: "Tirthani", age: 22 },
  { firstName: "Luckysha", lastName: "Khubchandani", age: 24 },
];

const output = users.map((user) => user.firstName + " " + user.lastName);
console.log(output);

// Tricky REDUCE() : consider using the same array but this time you have to find out unique ages present in the objects and how many of them have same age, maintain a count of it. output should look like this - {24: 2, 25: 1, 23: 1, 22: 1}

// here what we did is called reduce function and the callback function in the reduce takes two parameters accumulator and current, so we gave {} (empty object) as the initial value of the accumulator in the second parameter of reduce function, and then we simply cheked that if the age is already been counted and is present in the accumulator, then we just incremented it otherwise we initiated it with 1 and we just returned the accumulator
const op = users.reduce(function (acc, curr) {
  if (acc[curr.age]) {
    acc[curr.age] = ++acc[curr.age];
  } else {
    acc[curr.age] = 1;
  }

  return acc;
}, {});
console.log(op);

// CHAINING MAP, FILTER and REDUCE
// considering the same array "users" we need to filter out the first names of all the people with age less than 24
const opChain = users
  .filter((user) => user.age < 24)
  .map((user) => user.firstName);

console.log(opChain);

// HOMEWORK: do the above filter + map thing using the reduce method
const opReduce = users.reduce(function (acc, curr) {
  if (curr.age < 24) {
    acc.push(curr.firstName);
  }
  return acc;
}, []);

console.log(opReduce);

// =====================================================================================

// ==================================== Promises =======================================

// 1. Before promise we used to depend on callback functions which would result in 1.) Callback Hell (Pyramid of doom) | 2.) Inversion of control
// 2. Inversion of control is overcome by using promise.
//   2.1) A promise is an object that represents eventual completion/failure of an asynchronous operation.
//   2.2) A promise has 3 states: pending | fulfilled | rejected.
//   2.3)  As soon as promise is fulfilled/rejected => It updates the empty object which is assigned undefined in pending state.
//   2.4) A promise resolves only once and it is immutable.
//   2.5) Using .then() we can control when we call the cb(callback) function.

// 3. To avoid callback hell (Pyramid of doom) => We use promise chaining. This way our code expands vertically instead of horizontally. Chaining is done using '.then()'
// 4. A very common mistake that developers do is not returning a value during chaining of promises. Always remember to return a value. This returned value will be used by the next .then()

// =====================================================================================
