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

// =====================================================================================
