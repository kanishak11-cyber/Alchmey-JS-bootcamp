// Character Casing
// Often with strings we want to ignore the character casing. We want to find "x" whether it is lower-case "x" or upper-case "X".

// Fortunately, there are two convenient methods to manipulate casing for a string:

// console.log( "Hello".toLowerCase() );// hello
// console.log( "Hello".toUpperCase() ); // HELLO
// Notice how these functions will affect the entire string. If we wanted to check if a string said "hello" regardless of it's casing we could use either of these functions:

// console.log( "Hello".toUpperCase() === "HELLO" ); // true
// console.log( "Hello".toLowerCase() === "hello" ); // true
//  Your Goal: Handle x and X
// Let's update our startsWithX function to return true for an upper-case X as well as a lower-case x.

//  Some examples!

// console.log( startsWithX("Xylophones") ); // true
// console.log( startsWithX("x") ); // true
// console.log( startsWithX("spaceX") ); // false

function startsWithX(string) {
    if (string.charAt(0) == 'x' || string.charAt(0) == 'X') {
        console.log(string.charAt(0))
        return true
    }
    return false
 }
 
 module.exports = startsWithX;