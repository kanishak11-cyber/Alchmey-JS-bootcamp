// Redo
// Now, let's think about redo. If you had two undos, which would be redone first? 

// It would be the most recent undo!

// Redo

//  Your Goal: Implement Undo and Redo
// Let's go ahead and implement undo and redo within OperationsManager.

// Push and pop your way to victory!

const Stack = require('./Stack');

class OperationManager {
    constructor() {
        this.operations = new Stack();
        this.undos = new Stack();
    }

    addOperation(operation) {
        this.operations.push(operation);

    }

    undo() {
        this.undos.push(this.operations.pop());

    }

    redo() {
        this.operations.push(this.undos.pop());
    }

    redoAll() {
        
    }
}

module.exports = OperationManager;