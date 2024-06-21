# JS-Interview-Practice

## The Scope Chain, Scope and Lexical Environment

### Scope

Scope means, where we can access a particular variable or function in our code. There are two aspects to see what a Scope is:

1. Where we can access a particular variable? (What is the scope of a particular variable)
2. Whether a particular variable can be accessed in a particular scope or not? (Can I access a particular variable in a particular scope)

**Scope is directly dependent on the Lexical Environment**

### Lexical Environment

Whenever an Execution Context is created, a Lexical Environment is also created. "Lexical Environment is the local memory along with the Lexical Environment of its parent"

#### Meaning of Lexical:

Lexical means hierarchy or in a sequence. Below is an example:

```javascript
function a() {
  var b = 10;
  c();
  function c() {
    console.log(b);
  }
}
a();
```

So, in the above example, this function c() is lexically inside the function a(). So, c() will get access to its parent's lexical environment, because of which, it is able to fetch the value of b, and output of above code will be the value of b i.e., 10.

## let & const in JavaScript and the Temporal Dead Zone

### let & const

let and const are types of variable declarations that were introduced in ES6. These declarations are hoisted, but in a very different manner than var declaration.

We can say, that let and const are in Temporal Dead Zone for the time being.

```javascript
console.log(a); // ReferenceError: a cannot be used before initialization
let a = 10;
var b = 100;
```

We are aware that hoisting means that the variables are allocated some memory and we have the capability of accessing the variables and functions even before they are even initialized.

And we said that let and const are hoisted. So, why this error comes when we try to access variable whose declaration is done using let.

But, when we access variable after its initialization (after some value is put into it) then it gives the expected output. Let's see what happens behind the scene of this:

```javascript
let a = 10;
var b = 100;
console.log(a); // 10
```

When the above code is executed, both variables a and b are allocated some memory and during the memory creation phase both have "undefined" into them. But, the variable with var declaration is attached to the global scope while the variable with let declaration is in some other scope, which we cannot access. Thus whenever we try to access variable with let and const declaration, we get an error. And hence, it is necessary to first initialize those variables and then use it.

### Temporal Dead Zone

Temporal Dead Zone is the time since when this let variable was hoisted and till it is initialized some value. The time between these two events is called Temporal Dead Zone.

Whenever we try to access a variable inside a temporal dead zone, it gives us a ReferenceError.

### ReferenceError

The ReferenceError object represents an error when a variable that doesn't exist (or hasn't yet been initialized) in the current scope is referenced.

```javascript
// 1.
console.log(x); // ReferenceError: x is not defined

// 2.
console.log(a); // ReferenceError: a cannot be used before initialization
let a = 10;
```

### Relation of global object and variable declarations of different types

As we know that var declarations are attached to the global scope but let & const are not. So when we try to access declarations of let & const using window object, we get undefined. It treats those declarations as if the variable is not there.

```javascript
// 1.
let a = 10;
var b = 20;
const c = 30;

// Inside the browser console
window.a; // undefined
window.b; // 20
window.c; // undefined
window.x; // undefined
```

### Redeclaration of let and const variables

We cannot redeclare let and const variables. While the same thing is possible when using var declarations.

```javascript
let a = 10;
let a = 20; // SyntaxError: identifier 'a' has already been declared
```

Even if we try to log some statement before, then too we are not able to do that, it will simply throw error and will not execute a single line of code in case of syntax error.

```javascript
console.log("hi");
let a = 10;
let a = 20; // SyntaxError: identifier 'a' has already been declared
```

Similarly, we cannot use same variable name, see example below:

```javascript
let a = 10;
var a = "hello"; // SyntaxError: identifier 'a' has already been declared
```

But redeclarations are possible in var, as below:

```javascript
var a = 10;
var a = 20;
console.log(a); // 20
```

#### what happens in case of const

1. const is also put into scope other than the global scope, hence cannot be used before initialization.
2. It is even more stricter than let, as we can declare let variable before and can initialize it later in the code. But we cannot do that in case of const.

```javascript
let a;
a = 10; // this works perfectly fine

const a; // SyntaxError: missing initializer in const declaration.

const b = 10; // this is the correct way
```

3. This also has the Temporal Dead Zone.
4. const cannot be redeclared. It is constant, as the name suggests.

### TypeError

TypeError represents an error when an operation could not be performed.

Let's say, we try to assign value to const declaration after it has already been initialized.

```javascript
const x = 10;
x = 100; // TypeError: Assignmnet to a constant variable
```

### Difference between var, let and const

1.

### Which variable declaration is better?

We should try to use const where ever possible, when we are sure that the value will not be changed later or we do not have to assign something to the same variable, we should go with const. Through this we will not run into unexpected errors.

Otherwise, we should try to use let declaration.

Usage of var is not recommended. If we need to use it, then it should be done very consciously.

### How to avoid temporal dead zone?

Temporal Dead Zone can create a huge mess, it can lead to a lot of unexpected
errors. To avoid this TDZ, we should always keep our declarations and initializations on the top of the scope, so that as soon as code runs, it hits the initialization part first then we go with logics.

This phenomena of avoiding TDZ is called, shrinking the Temporal Dead Zone to zero.

## Block, Scope and Shadowing in JS

### Block

Block is also called "Compound Statement". It is used to combine multiple statements into a group.

```javascript
{
}
```

Above is a perfectly valid JS code. These curly braces represent a block.

### Need of Blocks

We need these blocks, so that we can use multiple statements in a place where JS expects only one statement. Let's see below example:

```javascript
if (true) console.log("hello"); // here if the condition is evaluated to true, then hello will be logged on the console.
```

But, what if we want to execute some more code whenever the condition is evaluated to true. So, when we write that more code below the first statement, it will not be treated as the code written in if statement.

```javascript
if (true) console.log("hello");
let sum = 10 + 10; // this will not be considered to be a part of if statement. it is independent loc
```

In this scenario, block comes into the picture. It will bind or combine multiple statements so that they can be executed.

```javascript
if (true) {
  let sum = 9 + 19;
  console.log("Hello, sum is ", sum); // Hello, sum is 28
}
```

### What is a block scope?

Block scope in JavaScript refers to the visibility of variables declared within a block of code, such as within curly braces `{}`. These variables are only accessible within that specific block and are not visible outside of it.

```javascript
{
  // what all variables and functions we can access inside this block, is the block scope
}
```

Let's understand it better with following example:

```javascript
{
  var a = 10;
  let b = 20;
  const c = 30;

  console.log(a); // 10
  console.log(b); // 20
  console.log(c); // 30
}
console.log(a); // 10
console.log(b); // ReferenceError: b is not defined
console.log(c);
```

Explanation: all three variables a, b and c are hoisted but in a different manner. a is hoisted in global scope as it has var declaration, while b and c are hoisted in a separate block scope. Hence, when we tried accessing them outside the block, we were able to access only a and not b and c.

### Shadowing

Shadowing in JavaScript occurs when a variable declared within a certain scope has the same name as a variable in a higher scope. When you reference that variable name within the inner scope, it "shadows" or hides the variable from the outer scope.

Imagine you have two boxes, one big and one small, with the same label on them. When you look inside the small box, you only see what's in it, not what's in the big box with the same label. Similarly, in JavaScript, if you have a variable declared inside a smaller scope (like a function), it "shadows" or covers up a variable with the same name in a bigger scope (like the global scope). So, when you refer to that variable inside the smaller scope, JavaScript only sees the one inside that scope, not the bigger one outside.

Examples:

```javascript Example 1
var a = 10;
{
  var a = 100;
  let b = 20;
  const c = 30;

  console.log(a); // 100
  console.log(b); // 20
  console.log(c); // 30
}

console.log(a); // 100 (this variable got shadowed and since it was created using var declaration, shadowing happened in global scope itself)
```

```javascript Example 2
let b = 10;
{
  var a = 100;
  let b = 20;
  const c = 30;

  console.log(a); // 100
  console.log(b); // 20
  console.log(c); // 30
}

console.log(b); // 10 (this variable got shadowed and since it was created using let declaration, shadowing happened in block scope, while the variable in outer scope was in the Script, hence the value did not change)
```

Similar to the example 2, same happens in case of using const declaration.

**In case of functions also, the shadowing concept takes place**
Example:

```javascript
const c = 100;
function x() {
  const c = 30;
  console.log(c);
}

x(); // 30
console.log(c); // 100
```

### Illegal Shadowing

**let with var cannot be shadowed but vice-versa is possible**

Examples:

```javascript Example 1
let a = 10;
{
  var a = 10; // SyntaxError: Identifier 'a' has already been declared
}
```

```javascript Example 2
var a = 10;
{
  let a = 10; // no issues
}
```

```javascript Example 3
var a = 10;
{
  var a = 10; // no issues
}
```

**If a variable is shadowing something, it should not cross the boundary of its scope**

## Closures

Closure means, a function bind together with its lexical environment.

```javascript
function x() {
  var a = 21;
  function y() {
    console.log(a); // here the closure is formed, this function y is bundled together with its lexical environment (the variable from function x)
  }
  y();
}
x();
```

## setTimeout + Closures

`setTimeout()` method sets a timer which executes a function or specified piece of code once the timer expires.

`setTimeout()` is an asynchronous function, meaning that the timer function will not pause execution of other functions in the functions stack. In other words, you cannot use `setTimeout()` to create a "pause" before the next function in the function stack fires.

`setTimeout()` takes a callback function as parameter. Following is the syntax:

```javascript
setTimeout(function () {
  console.log("I am a setTimeout function");
}, 1000); // here 1000 is 1 second timer.
```

### Interview Question: Print 1 to 5, such that 1 is printed after 1 second, 2 after 2 seconds .... 5 after 5 seconds.

```javascript
for (let i = 1; i <= 5; i++) {
  setTimeout(function () {
    console.log(i);
  }, i * 1000);
}
```

#### Without using let

As we can see the previous solution, it is working because `let` is block scoped and hence in every iteration, a new copy of `i` is created, whereas, if we use `var` in above code, it will print `6` every time, because JavaScript will not wait, it will run the loop till the end and after that `setTimeout` will start executing.

So, basically we need such a solution where, in every iteration, a new copy of `i` is provided to the `setTimeout` method. So, we can use the concept of Closures, and when we will wrap `setTimeout` in a function so that the callback function creates a closure with the lexical environment of function `close()` then in each iteration, a new value of `i` is passed as parameter into that function, and thus below code will work just fine.

```javascript
for (var i = 1; i <= 5; i++) {
  function close(i) {
    setTimeout(function () {
      console.log(i);
    }, i * 1000);
  }
  close(i);
}
```

## Diving deep into the Functions - The Jargon Mystery

### Function Statement
