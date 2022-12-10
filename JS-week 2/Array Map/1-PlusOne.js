// Map Function
// The map function is stored on the Array.prototype. This means that every new array we create has access to the method!

// By passing a function to map, we apply it to every element in the array. For example:

// const array = [1, 3, 5];

// const result = array.map(function(x) {
//     return x * 2;
// });

// console.log(result); // [2, 6, 10]
// In this example, we pass an anonymous function returning x doubled. This function is applied to every element in the array. 1 becomes 2, 3 becomes 6 and 5 becomes 10.

//  Your Goal: Map Add One
// Take the array arr and add one to every element, return the resulting array.



function plusOne(arr) {
    const mappedArr = arr.map(x => x + 1);
    return mappedArr
}

module.exports = plusOne;