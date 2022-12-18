// Your Goal: Throw Errors
// Ok, let's throw errors for stack overflows and underflows within our Stack class.

// If executing push will exceed the MAX_STACK_SIZE, throw an Error.
// MAX_STACK_SIZE is a number value. The number of elements in the items array cannot exceed this number.

// If a pop is attempted on a stack with zero elements, throw an Error.
//  To throw an Error, you can throw new Error("any error message"). For more on errors, you can refer back to the Exceptions lesson or the MDN documentation.

const { MAX_STACK_SIZE } = require('./config');

class Stack {
    constructor() {
        this.items = [];
    }
    
    push(item) {
        // Push the item into the items array
        if (this.items.length < MAX_STACK_SIZE) {
        this.items.push(item);
        } else {
        throw new Error("Stack overflow");
        }
    }
    
    pop() {
        // Remove the last item
        if (this.items.length > 0) {
        return this.items.pop();
        } else {
        throw new Error("Stack underflow");
        }
    }
    
    peek() {
        // Return the last item without removing it
        return this.items[this.items.length - 1];
    }
}

module.exports = Stack;
