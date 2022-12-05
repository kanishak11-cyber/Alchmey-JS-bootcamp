// Modifying the Array
// Let's filter an array by modifying it directly!

// We'll need a method to remove elements from an array. Luckily, we have such a method. It's called splice!

//  Be sure to check out the MDN documentation on splice!

// Let's remove any element greater than five from our array:

// function greaterThanFive(array) {
//     for(let i = array.length - 1; i >= 0; i--) {
//         if(array[i] <= 5) {
//             array.splice(i, 1);
//         }
//     }
// }
//  We're using the splice function with two arguments.

// The first argument is the starting index where we'd like to start the removal of elements.

// The second argument is the number of elements we'd like to remove beginning at the starting index. In this case we're removing a single element starting at the index of the element we'd like to remove.

//  Wondering why we're counting down in the for loop? Let's see how splice can affect our index.

//  Your Goal: Remove the Occurrences
// Given an array of integers and a number, num, find all the occurrences of the number and remove it from the array.

// Modify the array directly and do not return anything from this function.

// An example:

// const array = [1, 2, 3, 1];
// removeOccurrences(array, 1);
// console.log( array ); // [2, 3]

function removeOccurrences(array, num) {
  for (var i = 0; i < array.length; i++) {
    // console.log(array)
    if (array[i] == num) {
      array.splice(i, num);
      i--;
      console.log(array);
    }
  }
}

module.exports = removeOccurrences;
