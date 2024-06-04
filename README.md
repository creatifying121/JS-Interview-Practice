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
