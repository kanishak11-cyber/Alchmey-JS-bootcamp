// Operations Manager
// Time to move on to our second JavaScript file: OperationsManager.js.

// In Operations Manager, we'll want to make use of our Stack we created! We'll create two new stacks: operations and undos:

// Operations Manager

// The operations will be our list of actions we have taken. The undos will be the operations we have removed. If we ever wanted to "redo" an operation, we can simply pop it off our undos stack back on to operations!

//  You can think of this like your favorite art program. When you undo your latest operation it might remove that line you just drew. If you wanted your line back you can click redo.

//  Your Goal: Build Stacks
// Let's add two stacks to our OperationsManager constructor: operations and undos.

// You'll notice the Stack file has already been imported for you in OperationsManager.js. To create a new stack you can simply invoke it after the new operator new Stack().

//  We'll store operations and undos on the operations manager instance. Similar to how we stored items on our stack, use this to refer to the instance and create the instance variable for both stacks. (i.e. this.operations).

// Next, implement addOperation. This function will take the operation argument and simply add it to the top of our operations stack.

//  Do you recall how to add a new element to the top of our stack from the previous stage?

// Example use of Operations Manager:

// const manager = new OperationsManager();

// console.log( manager.operations.isEmpty() ); // true

// manager.addOperation({ drawingType: 'dot', x: 50, y: 20 });

// console.log( manager.operations.isEmpty() ); // false


class OperationManager {
    constructor() {
        this.operations = new Stack();
        this.undos = new Stack();
    }

    addOperation(operation) {
        this.operations.push(operation);

    }

    undo() {
               
    }

    redo() {
        
    }

    redoAll() {
        
    }
}
