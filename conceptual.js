// Implement a function clamp(number, lower, upper) to restrict a number within the inclusive lower and upper bounds.
// function clamp(num, lower, upper) {
//   if (num >= lower && num <= upper) {
//     return num;
//   }
//   if (num <= lower) {
//     return lower;
//   }
//   if (num >= upper) {
//     return upper;
//   }
//   return -1;
// }
// Within the bounds, return as-is.
// console.log(clamp(3, 0, 5)); // => 3

// // Smaller than the lower bound.
// console.log(clamp(-10, -3, 5)); // => -3

// // Bigger than the upper bound.
// console.log(clamp(10, -5, 5)); // => 5

// function makeCounter(val) {
//   let count = val ? val - 1 : -1;

//   console.log(arguments.length);

//   return function () {
//     //closure formed
//     ++count;
//     return count;
//   };
// }
// const counter = makeCounter(1, 2, 3, 4, "ab", "c", undefined);
// console.log(counter()); // 0
// console.log(counter()); // 0
// console.log(counter()); // 0
// counter(); // 1
// counter(); // 2

//returning the number of parameters

// let arr = [1, 2, 3, [4, 5, 6, [7, 8, 9]]];
// function flatten(arr) {
//   let output = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (Array.isArray(arr[i])) {
//       const out = flatten(arr[i]);
//       output.push(...out);
//     } else {
//       output.push(arr[i]);
//     }
//   }

//   return output;
// }
// console.log(flatten(arr));

let arr = [1, 2, 3, 4, 5];
//map => tumne data diya, mai arr ke elements ko modify krunga condition ke hisab se
// const double = arr.map((currVal, index) => {
//   return currVal * 2;
// });
// console.log(double);

//filter
// const filterVal = arr.filter((currVal, index) => {
//   return currVal > 3; // boolean value is returned always
// });
// console.log(filterVal);

// //reduce
// const reduceVal = arr.reduce((currVal, accumulative, index) => {
//   return currVal + accumulative;
// }, 0);
// console.log(reduceVal);

const reduceValll = arr.reduce((accumulative, currVal, index) => {
  //   console.log(accumulative + "HIIIIII" + currVal);
  if (currVal < 4) {
    accumulative.push(currVal * 2);
  }
  return accumulative;
}, []); // i want to return an array this time
console.log(reduceValll);

//some => return boolean : to check if a particular thing/element exists in an array or not

//every => return boolean : to check if a particular thing/element exists in an array or not , but it checks every element

// promises
function myFun(val) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      if (val < 5) {
        res("success"); // any data type param can be passed
      } else {
        rej("404");
      }
    }, 3000);
  });
}
myFun(5)
  .then((res) => {
    console.log(res + "1");
    // return myFun(3);
  })
  .catch((error) => {
    console.log(error + "1");
    // return myFun(5);
  })
  .then((res) => {
    console.log(res + "2");
  })
  .catch((error) => {
    console.log(error + "2");
  });
