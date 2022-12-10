// Mapping a Function
// In the last stage, we created an anonymous function to use in the map function.

// We can do the same thing with functions that we have previously defined:

// function addOne(x) {
//     return x + 1;
// }

// const result = [1,2,3].map(addOne);

// console.log(result); // [2,3,4]
// As well as built-in JavaScript functions:

// const absolutes = [-1, 1, -2, 2].map(Math.abs);

// console.log(absolutes); // [1,1,2,2]
// Here Math.abs returns the absolute value of each element in the array.

//  Be careful when passing a function to map. It will pass multiple arguments to your function which may cause it to behave unexpectedly!

//  Your Goal: Take the Square Root
// Using the squareRoot function, map each element in the array arr to its square root. Return the new array.

// const result = squareRoot([2,4,9]);

// console.log( result ); [1,2,3]
//  You can use the built-in function Math.sqrt which takes one single argument and returns the square root of that argument. Here is the documention of Math.sqrt.

function squareRoot(arr) {
    const root = arr.map(Math.sqrt);
    return root

}

module.exports = squareRoot;