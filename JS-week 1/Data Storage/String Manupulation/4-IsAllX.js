// String Looping
// Strings are super easy to loop over!

// We learned about accessing characters using brackets [] and the .length property.

// So, how can we use these new tools to loop over strings?

// const string = "Hello";
// for(let i = 0; i < string.length; i++) {
//     console.log(string[i]);
// }
//  What will this log to the console?

// It will log: H, e, l, l, o in that order after each iteration.

//  Your Goal: Is All X?
// Complete the function isAllX to determine if the entire string is made of lower-case x or upper-case X. Return true if they are, false if not.

// Examples:

// isAllX("Xx"); // true
// isAllX("xAbX"); // false

function isAllX(string) {
  let count = 0;
  // console.log(string.length)
  for (let i = 0; i < string.length; i++) {
    // console.log(string[i])
    if (string[i] === "x" || string[i] === "X") {
      count++;
      // console.log(count)
      if (count == string.length) {
        return true;
      }
    } else {
      if (string[i] !== "x" || string[i] !== "X") count--;
      // console.log(count)
      if (count < string.length) {
        return false;
      }
    }
  }
}

module.exports = isAllX;
