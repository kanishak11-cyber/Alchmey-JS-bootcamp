// our Goal: Chaining Callbacks
// Another feature of Promise is that it allows you to chain .then callbacks.

// Doing so allows you to transform the result in each subsequent callback. Let's take a look at an example:

// const pact = new Pact((resolve, reject) => {
//     setTimeout(() => {
//         resolve(42);
//     }, 100);
// }).then((val) => {
//     console.log(val); // 42
//     return val * 2;
// }).then((val) => {
//     console.log(val); // 84
//     return val * 2;
// });

// pact.then((val) => {
//     console.log(val); // 168
// });
//  Notice how the value passed into the second .then has been doubled by the first .then callback. This happens again for our third .then callback. In regards to .then and the callbacks wired up, order matters.

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