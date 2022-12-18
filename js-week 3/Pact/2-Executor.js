// The Executor
// The function that gets passed in to the promise constructor is often referred to as the executor function:

// new Promise(function executor(resolve, reject) {
//     // inside the executor function!
// });
//  Let's add this functionality to our Pact!

//  Your Goal: Writing the Constructor
// We'll need to declare a new constructor on Pact. This constructor will take an executor function as it's only argument.

// The executor function should be called immediately from the constructor with two arguments of it's own, both of which are new functions.

// Let's take a closer look at the executor function example and consider how we can achieve this functionality.

// For Pact it should look like this:

// const pact = new Pact((resolve, reject) => {
//     console.log(typeof resolve); // function
//     console.log(typeof reject); // function
// });
//  If you can make the above comments true, you'll pass the tests! You'll need to ensure that both resolve and reject are functions passed to the executor.
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
