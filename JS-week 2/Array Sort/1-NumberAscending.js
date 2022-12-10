// Array Sort
// Every array created in JavaScript has access to the sort method. This method takes an optional comparison function that will determine the resulting sort order of the elements.

//  Take a look at details to learn about the default behavior when a comparison function is not provided.

// Let's take a look at providing a comparison function to sort numbers in ascending order (1,2,3...):

// [3,2,4,1].sort(function comparison(a,b) {
//     if(a < b) {
//         // take a first
//         return -1;
//     }
//     if(b < a) {
//         // take b first
//         return 1;
//     }
//     // no change is needed
//     return 0;
// });
// The array will be sorted [1,2,3,4]. In this comparison function there are 3 possible return values:

// -1 indicates a should be placed in-front of b.
// 1 indicates b should be placed in-front of a.
// 0 indicates no change in order is needed.
// In fact, returning any negative value will have the same effect as returning -1 here. Any positive value will do the same as 1. This means we can shorten this function significantly:

// [3,2,4,1].sort(function comparison(a,b) {
//     return a - b;
// });
// Here, if a is less than b, the result of the subtraction will be negative (placing a first). If b is less than a the result will positive (placing b first).

//  Your Goal: Sort Numbers Ascending
// Given an array of numbers, sort the numbers ascending (1,2,3...) and return the sorted array.


function sortUp(array) {
    const sortedNumbers = array.sort((a, b) => a - b);
}

module.exports = sortUp;