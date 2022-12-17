// General Recursion
// Okay great work! So you've handled factorial for both 2 and 1 so far.

// We know that factorial(2) is (2 * 1).

// Let's take this one step further. What is factorial(3)?

// 3 * (2 * 1)
// Or replacing what we know:

// 3 * factorial(2);
// Similarily, factorial(4) is 4 * (3 * 2 * 1) or 4 * factorial(3)!

//  Notice a pattern? The factorial of each number n is the the number n multipled by the factorial of n-1. Written in JavaScript, n * factorial(n - 1).

//  Your Goal: Generalize!
// Let's make factorial work for every positive integer!

// factorial(5); // 120 
//  Factorial of 5 is 5 * 4 * 3 * 2 * 1 or 120.

//  For an example of returning values see summation.

function factorial(n) {
    if (n===0 || n===1){
        return 1
    }
    else{
        return n*factorial(n-1) 
    }
    // return factorial(n-1)*factorial(n)
}

module.exports = factorial;