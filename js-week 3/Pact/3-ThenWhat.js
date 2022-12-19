// Then... What?
// Now we will implement handling Asynchronous Behavior!

// We want our then callback to be resolved after something happens asynchronously. Let's take a look at what we're trying to accomplish from the outside:

// const pact = new Pact((resolve, reject) => {
//     setTimeout(() => {
//         // after half a second we resolve with 42
//         resolve(42);
//     }, 500);
// });

// pact.then((value) => {
//     // after resolve is called, 42 is passed here
//     console.log(value); // 42
// });
// Seem like a big jump in functionality? Don't be intimidated, you're already almost there! 

//  Your Goal: Resolve Callback
// Let's ensure that resolve calls the .then callback with the resolve value!

// In the last stage, we passed two functions to the executor function. The first of these functions is the resolve function. This function should invoke the callback function passed into the then function.

//  We're going to need to set a class member variable in our then function that will store the function for later.

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
