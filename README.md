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

So, in the above example, this function c() is lexically inside the function a()
