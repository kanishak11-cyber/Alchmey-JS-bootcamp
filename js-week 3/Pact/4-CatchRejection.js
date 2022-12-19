// Your Goal: Catch the Rejection
// Let's give our Pact users the ability to handle a reject callback as well as a resolve.

// Similar to our last example, except now we'll want to handle reject with catch:

// const pact = new Pact((resolve, reject) => {
//     setTimeout(() => {
//         reject(42);
//     }, 500);
// });

// pact.catch((value) => {
//     console.log(value); // 42
// });

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