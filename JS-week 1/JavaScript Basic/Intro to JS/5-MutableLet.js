// Changing a Variable
// Let's say we want to change a value stored inside of a variable. As mentioned in the first stage, the keyword const declares our variable as a constant. So if we tried to change our variable:

// const a = 3;

// a = 5;
// This is going to throw an error! You can try it right now by running tests. You'll get an ugly TypeError: Assignment to constant variable.. Constants are immutable, meaning their value cannot change.

// Turns out there are other keywords for declaring variables! Using the keyword let instead of const will allow us to make the value mutable.

//  Your Goal: Use the keyword let
// Change the code to use the keyword let instead of const so the value can be re-assigned.

let a = 3;

a = 5;

module.exports = a;