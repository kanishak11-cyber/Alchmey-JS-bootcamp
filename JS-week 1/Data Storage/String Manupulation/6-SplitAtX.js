// Slicing Strings
// Let's learn about another string method: slice!

// Slice allows us to pass two parameters: a start index and an end index.

// The resulting string will be a sliced string between those two indexes, not including the character located at the end index. Let's see some examples:

// "An apple".slice(0,2); // An
// "The 40 Thieves".slice(4,8); // 40 T
// If the last index is not provided, slice will continue until the end of the string:

// "Please Slice Me".slice(7); // Slice Me
//  Slice works with negative arguments too!

// Your Goal: Find the Longer Half
// Let's find the longer half of the string before and after the x!

// First, you'll need to find the lower-case x.

// Once you've found the x, split the string in half. The first half will be the string before the x, the second half will be the string after the x.

// Take the longer string and return it!

// This will be a tough function to write! Using everything you learned, you will be able to accomplish it. (You got this! )

// Examples:

// splitAtX("Happyxdays"); // "Happy"
// splitAtX("10xDeveloper"); // "Developer"

function splitAtX(string) {
  let x = string.length;

  for (let i = 0; i < x; i++) {
    if (string[i] === "x" || string[i] === "X") {
      // console.log(i)
      // console.log(x)
      if (i < x - i - 1) {
        return string.slice(i + 1, x);
      } else {
        // console.log(string.slice(0,i))
        return string.slice(0, i);
      }
      // console.log(string.slice(0,i))

      // return string.slice(0,i)
    }
  }
}

module.exports = splitAtX;
