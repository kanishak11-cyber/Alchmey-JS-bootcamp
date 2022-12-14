// Largest Value
// Now it's time to find the largest value in an array!

// For an array [1,4,2,5] the largest value would be 5. Let's see how reducing this would look illustrated:

// Reduce Largest

//  You can see we run 3 iterations. Each time we are taking the largest value and returning it.

// First 4 is greater than 1 so we return 4.
// Then 4 is greater than 2 so we return 4.
// Finally 5 is greater than 4 so we return 5.
//  If you're wondering about the (x > y ? x : y) syntax, the question mark is called the ternary operator. It's a shortened version of if else where if the condition is true the first value is taken, otherwise the second is.

//  Your Goal: Complete the Largest Value function
// It's time to complete the largest value function! Determine which is larger, the accumulator or the currentValue. Whichever is larger, return it! Then it will become the accumulator for the next iteration.

// Use the ternary operator mentioned above for bonus points! 

function largest(numbers) {
    return numbers.reduce((accumulator, currentValue) => accumulator > currentValue ? accumulator : currentValue)
}