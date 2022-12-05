// Array Indexing
// Just like strings, arrays have zero-based indexes. This means that the first element in the array is at index 0, then 1, then 2:

// Array Indexing

// We can retrieve an element in an array by putting an index in square brackets []:

// const element = array[0];
// This makes it quite easy to loop over an array using an index starting from 0 and moving to the array's length:

// const arr = ['h','a','p','p','y'];
// for(let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }
// This will log h, a, p, p, y as the index i moves from 0 to 4.

//  Similar to strings, arrays also have a length method on the array prototype. This method returns a count of the number of items within the array.

//  Your Goal: Complete the Function hasOne
// Complete the function hasOne which takes in an array of numbers. Return true if any of the numbers in the array are 1. Return false if not.

// console.log( hasOne([1,2,3]) ); // true
// console.log( hasOne([1,1,1]) ); // true
// console.log( hasOne([4,5,6]) ); // false

function hasOne(array) {
  let x = array.sort();
  if (x[0] == 1) {
    return true;
  } else return false;
}

module.exports = hasOne;
