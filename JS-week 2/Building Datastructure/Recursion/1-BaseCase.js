// Recursion
// A recursive function is a function that calls itself. For instance:

// function countdown(n) {
//     countdown(n - 1);
// }
//  There's some trouble with this recursive function! Can you spot it?

// We can invoke it: countdown(3). This would call countdown(2), countdown(1), countdown(0), countdown(-1)… with no end in sight! 

//  The results in a call stack overflow!

// It's important to add a base case in a recursive function. The base case is where you stop recursing.

// function countdown(n) {
//     if(n === 0) {
//         console.log('countdown complete!');
//         return;
//     }

//     countdown(n - 1);
// }
//  Great! Our countdown stops when it reaches 0.

//  Your Goal: Base Case
// Let's add a base case to the function factorial. A factorial is an integer times every positive integer below it.

// factorial (4); // 4 * 3 * 2 * 1 = 24
// Let's start with the base case for a factorial function: 1.

// Your task for this stage is simple: If n is equal to 1 return 1.

// console.log( factorial(1) ); // 1

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