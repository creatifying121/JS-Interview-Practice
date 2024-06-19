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

// ============================== setTimeout + Closures ===============================
// =====================================================================================
