// Second Case
// Okay, now that we've established a base case we're doing pretty good. No call stack overflow for us!

// Next, let's handle our second case. What if we called factorial(2)?

// The factorial for an integer is itself multiplied by every positive integer below it. The factorial for 2 is 2 * 1.

// Well, we know we want to make this recursive and we also know that factorial(1) is equal to 1. So, we should also be able to write this as:

// 2 * factorial(1);
//  Now we're on our way to a recursive function!

//  Your Goal: Handle Factorial < 2
// Keep the base case that we established in the first stage. Now create logic for when n is not 1. Let's start by making it work for 2.

// Be sure that factorial works for both 1 and 2!

// factorial(1); // 1
// factorial(2); // 2


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