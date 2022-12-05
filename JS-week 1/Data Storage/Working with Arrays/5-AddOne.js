// Modifying Array Values
// We have learned to  read from array values using square brackets such as array[0].

// Similarly, we can  write new values to those positions using the assignment operator =.

// const array = [1,2,3];
// array[0] = 5;
// console.log(array); // [5,2,3]
//  We changed the element in the 0 index of the array by using the assignment operator.

//  Notice how this example uses const, and yet, we were still able to change the value! For objects and arrays, const only protects from changing the reference.

//  Your Goal: Add One to Each Element
// Complete the addOne function to add 1 to every element within the array. Since we are modifying the array directly do not return it.

// An example:

// const array = [1,2,3];
// addOne(array);
// console.log(array); // [2,3,4]

function addOne(array) {
  for (let i = 0; i < array.length; i++) {
    array[i] += 1;
    console.log(array);
  }
}

module.exports = addOne;
