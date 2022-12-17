// Push & Pop
// Time to build a stack! A stack is a LIFO data structure. This means that when we retrieve elements from our stack, the most recently added element will be removed first.

//  Let's take a closer look at LIFO in details.

// Let's implement two methods, push and pop, to begin forming our stack. First let's see illustrations of both:

// Push

//  Push is this the only way to add elements to our stack. We add them to the "top" of the stack.

// Pop

//  Pop is the only way to retrieve elements from our stack. We remove the element from the top of the stack, retrieving the most recently added stack element.

//  Your Goal: Implement the Methods
// In our Stack class, you can see we already have a constructor with an items array.

// In the push function, let's add a new item to our items.

// In the pop function, let's remove the last item from items and return it.

//  Feel free to use JavaScript array methods with similar names. 

const { MAX_STACK_SIZE } = require('./config');

class Stack {
    constructor() {
        this.items = [];
    }
    push(item) {
        
        this.items.push(item)
    }
    pop() {
     const x =this.items.pop()
      return x
    }
    isEmpty() {
        
    }
    peek() {
        
    }
}

module.exports = Stack;
