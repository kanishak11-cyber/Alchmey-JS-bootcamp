// Creating a Promise
// In the last couple stages, we learned how to handle a returned promise. In this stage we create a promise!

// Most modern JavaScript environments have a built-in Promise object that can be use to create a new Promise:

// const promise = new Promise(function(resolve, reject) {
//     resolve('resolve successful!');
// });
//  The function provided to the promise is called an executor function. This function is called immediately and typically will be set to resolve after something asynchronous has happened.

//  You can find documentation for Promise on MDN.

// promise.then(function(message) {
//     console.log(message);
// });
//  See a more practical example of using a promise in Details.

//  Your Goal: Return a Resolved Promise
// Within the timer function, return a new resolved promise.

//  There is no need to do anything inside the executor function other than invoke the resolve function

function timer() {
    return new Promise((resolve, reject) => {
        resolve();
    });
}