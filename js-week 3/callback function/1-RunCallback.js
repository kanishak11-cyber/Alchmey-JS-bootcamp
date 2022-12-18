// Running a Callback Function
// In JavaScript, functions are first-class objects. This means, just like objects, functions can be stored in variables, returned from functions, and passed into other functions as arguments.

// With callback functions, we will be passing functions into other functions to be called at a very specific time.

// Let's think of a very simple case:

// function simpleFunction(fn) {
//     // invoke the callback function
//     fn();
// }

// simpleFunction(function callbackFunction() {
//     console.log('hi');
// });
//  In the above example, callbackFunction is passed to simpleFunction as an argument and then invoked immediately. The result is that 'hi' is logged once to the console.

//  Your Goal: Complete Run Callback
// Let's try this out for ourselves! Complete the function runCallback to invoke callbackFunction immediately.

function runCallback(callbackFunction) {
    // invoke callbackFunction here
    callbackFunction();
}