// Binding
// Rather than relying on a function to be called with the correct this at the time of invocation, we can bind functions:

// function thisName() {
//     return this.name;
// }

// const newFunction = thisName.bind({ name: 'Ted' }); 

// console.log(newFunction()); // Ted
// console.log(thisName()); // undefined
//  Notice that bind does not change the nature of the original function. It creates a new function that is bound with the provided this.

// Once a function is bound, the binding cannot be overwritten. Let's say we tried to bind newFunction from above:

// const newFunction2 = newFunction.bind({ name: 'Walt' });

// console.log(newFunction2()); // Ted
//  The method bind can also bind arguments!

//  Your Goal: Bind it Bob
// Create a new function from thisName that is bound to an object with the name "Bob".

// Export this new function instead of thisName.

// When it is called, it should return "Bob":

// const result = newFunction();

// console.log(result); // "Bob"

function thisName() {
    return this.name;
}

const newFunction = thisName.bind({ name: 'Bob' })


module.exports = newFunction;