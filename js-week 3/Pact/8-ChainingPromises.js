// our Goal: Chaining Promises
// Here it is! Time for promises inside promises. 

// Similar to the last stage, except we're going to add one last addition:

// const pact = new Pact((resolve, reject) => {
//     setTimeout(() => {
//         resolve(42);
//     }, 100);
// }).then((val) => {
//     console.log(val); // 42

//     // instead of returning a value, we'll return a promise
//     return new Pact((resolve, reject) => {
//         setTimeout(() => {
//             // we're still doubling the resolve value here
//             resolve(val * 2);
//         }, 100);
//     });
// }).then((val) => {
//     console.log(val); // 84
//     return val * 2;
// });

// pact.then((val) => {
//     console.log(val); // 168
// });
// This is going to be difficult!

// You'll need to check if the value returned from .then callback is a Pact or not.

//  You can check the result with result instanceof Pact or check to see if it has a .then on it typeof result.then.

// You may need to create a new Pact inside the code to handle the asynchronous callback chaining.

class Pact {
    constructor(executor) {
        let resolve, reject;
        this.promise = new Promise((res, rej) => {
            resolve = res;
            reject = rej;
        });
        this.resolve = resolve;
        this.reject = reject;
        try {
            executor(resolve, reject);
        } catch (e) {
            reject(e);
        }
    }
    then(onFulfilled, onRejected) {
        return this.promise.then(onFulfilled, onRejected);
    }
    catch(onRejected) {
        return this.promise.catch(onRejected);
    }
}