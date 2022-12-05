// Returning a New Array
// When writing a function to filter an array, we can create a new array and push the elements into that new array when they satisfy our condition.

// Let's say we want to want to filter an array to return only numbers greater than 5:

// function greaterThanFive(array) {
//     const newArray = [];
//     for(let i = 0; i < array.length; i++) {
//         const element = array[i];
//         // is this element greater than 5?
//         if(element > 5) {
//             // yes, push this element on our array
//             newArray.push(element);
//         }
//     }
//     return newArray;
// }
// In this case, we're creating a new array and then pushing elements from the array on to our newArray only if they are greater than 5. Lastly we return the new array.

//  The method push adds new elements into our array. You can find the documentation for the method on MDN.

//  Your Goal: Find Unique Elements
// Write a function that will take an array of numbers and return a new array that only contains unique numbers.

function unique(array) {
  var uniqueArray = array.filter(onlyUnique);
  return uniqueArray;
}
function onlyUnique(value, index, self) {
  return self.indexOf(value) === index;
}

module.exports = unique;
