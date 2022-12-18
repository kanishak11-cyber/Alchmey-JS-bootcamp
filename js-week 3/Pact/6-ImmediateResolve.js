// Your Goal: Immediate Resolve
// Now we're cooking. 

// We're adding in features that take Pact from simply working to developer-friendly! 

// One feature we'll certainly want is the ability to resolve immediately if a pact has already resolved/rejected.

// Think of it this way: if you passed a pact to another piece of code, that code would expect to be able to wire up a .then callback regardless of whether the pact has resolved or not yet (check out a real-world example).

// We'll want to accomplish this:

// const pact = new Pact((resolve, reject) => {
//     // notice this happens synchronously, no timeout!
//     resolve(42);
// });

// pact.then((val) => {
//     // this should be called immediately 
//     // since pact is already resolved
//     console.log(val); // 42
// });
//  The resolve should occur before the .then has even wired up. All .then callbacks should run immediately with the resolve value.
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