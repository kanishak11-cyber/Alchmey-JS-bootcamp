// Your Goal: Multiple Callbacks
// Our Pact class wouldn't be complete if we couldn't wire up multiple .then and .catch callbacks!

// Let's give it a shot. So we're trying accomplish this:

// let pact = new Pact((resolve, reject) => {
//     setTimeout(() => {
//         resolve(42);
//     }, 100);
// });
// pact.then((val) => {
//     console.log(val); // 42
// });
// pact.then((val) => {
//     console.log(val); // 42
// });
// We also want to do the same for catch and reject:

// let pact = new Pact((resolve, reject) => {
//     setTimeout(() => {
//         reject(42);
//     }, 100);
// });
// pact.catch((val) => {
//     console.log(val); // 42
// });
// pact.catch((val) => {
//     console.log(val); // 42
// });
//  This could be a bit of a tricky re-factor. Instead of storing one function with catch and reject, we'll want to be able to hold any number of functions and callback each of them with the resolve/reject value. How do we hold multiple values? 

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
