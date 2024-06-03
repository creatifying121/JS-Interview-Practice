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
