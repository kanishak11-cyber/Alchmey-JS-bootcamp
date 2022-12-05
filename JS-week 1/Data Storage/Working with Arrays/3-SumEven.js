// Running Value
// We can keep a running value while we're looping over an array. There are many reasons we might do this. For instance, if we wanted to find the average of many numbers like:

// const result = average([80,90,98,100]);
// console.log( result ); // 92
// The average function will want to loop over the array and keep a running total of the values. Then it will divide by the length of the array to find the average:

// function average(array) {
//     let total = 0;
//     for(let i = 0; i < array.length; i++) {
//         total += array[i];
//     }
//     return (total / array.length);
// }
//  There are a few different ways we could handle writing this function. In a future lesson, this would be a good candidate for the Array Reduce!

//  Your Goal: Find the Sum of Even Values
// Given an array, find the sum of all even values inside the array and return it.

//  Check out these examples

// console.log( sum([1]) ); // 0
// console.log( sum([1, 2, 3, 4]) ); // 6
// console.log( sum([1, 1, 4, 1, 1]) ); // 4

function sumEven(array) {
  let s = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 == 0) {
      s += array[i];
    }
  }
  return s;
}

module.exports = sumEven;
