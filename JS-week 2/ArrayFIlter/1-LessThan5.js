// Array Filtering
// When filtering arrays, we want to come up with some boolean condition (true/false) that will determine if we should keep the element or not.

// Consider the case where we only want to keep elements whose value is 1.

// const ones = [1,2,3,1,1].filter((function(el) {
//     return (el === 1);
// }));
// Here we are returning elements that are equal to 1. Our resulting ones array will be [1,1,1].

//  Your Goal: Filter Less Than 5
// Given an array of elements, find the elements whose value is less than 5. Return the resulting array

function lessThanFive(array) {
    const five = array.filter(n => n <5)
    return five 
}

module.exports = lessThanFive;