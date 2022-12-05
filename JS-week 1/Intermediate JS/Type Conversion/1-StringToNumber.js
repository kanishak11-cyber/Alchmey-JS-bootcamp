// Strings to Numbers
// In JavaScript, there are several ways to convert a string into a number.First, there is explicit conversion:

// const string = "2"
// console.log(Number(string)); // 2

// const string = "hello"
// console.log(Number(string)); // NaN
//  You can also convert strings to numbers with parseInt and parseFloat.Be aware these two methods will chop off non - numeric characters at the end of the string.

// And there is implicit conversion:

// const string = "2";
// console.log(+string); // 2

// const string2 = "hello";
// console.log(+string2); // NaN
// You can see with the + operator the string is implicitly converted to a number.

//  Best practice is to use explicit conversion in most cases.Explicit conversion will make your intentions obvious to your fellow programmers when they review / maintain your code! 

//  Your Goal: Convert to Number
// Given a string, convert it to a number.

// If the string is not a number, return 0.

//  You will be able to tell if the string is not a number if it converts to NaN.It might be helpful to know that NaN is falsey! Additionally, you can use the typeof operator.


function toNumber(string) {
    return Number(string) || 0;
}

module.exports = toNumber;