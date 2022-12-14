// Array Reduce
// Let's talk about Array.prototype.reduce! 

// This function is primarily meant to take an array and reduce it down to a single value.

// In a simple case, this could be taking an array of numbers, say [1,2,3], summing all the numbers together, and returning the resulting value (6).

//  You could imagine in a more complex case, we could be taking an array of objects and reducing it down to a different array or object.

// Let's focus on summing numbers. In the reduce function, two arguments are provided, an accumulator and the current value. In the case of summing numbers, the accumulator is the sum after each iteration. The current value will be each element in turn.

//  The best way to explain reduce is to break it down by iteration.

//  Your Goal: Complete the function
// Applying what you've learned, complete the function sum by adding together the accumulator and the currentValue.



function sum(numbers){
    return numbers.reduce((accumulator, currentValue) => accumulator + currentValue)
    
}