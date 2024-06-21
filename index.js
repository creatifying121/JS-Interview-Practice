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
function x(y) {
  console.log("x");
  y();
}
x(function y() {
  console.log("y");
});
// =====================================================================================
