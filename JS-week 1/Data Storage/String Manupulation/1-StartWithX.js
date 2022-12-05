// Looking up Characters
// In JavaScript, you can look up characters in strings by index. There are two ways to do this: with charAt or square brackets ([]).

// Let's see some examples:

// "Hello".charAt(1); // e
// "Hello"[1]; // e
//  In both of these examples we are looking up the character at the 1 index, which turns out to be the character e.

// Hello

// Strings use zero-based indexing. This means the index of the first character is 0 and moves up 1 for each subsequent character.

//  Your Goal: Complete the Function
// Complete the startsWithX function to determine if the first character of the string argument is the lower-case x.

// If the first character is x return true. If not, return false.

// console.log( startsWithX("x") ); // true
// console.log( startsWithX("zyx") );  // false

function startsWithX(string) {
    if (string.charAt(0) == 'x' || string.charAt(0) == 'X') {
        console.log(string.charAt(0))
        return true
    }
    return false
 }
 
 module.exports = startsWithX;