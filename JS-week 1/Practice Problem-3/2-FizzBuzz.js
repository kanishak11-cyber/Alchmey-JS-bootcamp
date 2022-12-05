// Fizz Buzz
// Write a function fizzBuzz that takes an array of numbers and replaces any number divisible by three with the word "fizz" and any number divisible by five with the word "buzz". If a number is divisible by both three and five, replace it with "fizzbuzz"

// Once the appropriate numbers are replaced, return a concatenated string with only the words "fizz" or "buzz" included.

// const numbers = [1, 3, 5, 9, 11, 12, 20];

// fizzBuzz(numbers); // returns "fizzbuzzfizzfizzbuzz"

function fizzBuzz(numbers) {
    let result = "";
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] % 3 === 0 && numbers[i] % 5 === 0) {
            result += "fizzbuzz";
        } else if (numbers[i] % 5 === 0) {
            result += "buzz";
        } else if (numbers[i] % 3 === 0) {
            result += "fizz";
        }
    } return result;
}

module.exports = fizzBuzz;