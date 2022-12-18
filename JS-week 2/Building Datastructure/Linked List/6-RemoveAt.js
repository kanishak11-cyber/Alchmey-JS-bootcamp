// Remove At
// Okay, time for the trickiest method yet! It's going to be like linked-list surgery. 

// We will need to remove a node from the list and then stitch the node before it to the node it was pointing to!

// Let's again consider multiple scenarios:

// Remove the Head Node
// If we're removing the node at index 0 (the head node), we can simply set the new head node to the next node that the original head node was pointing to.

// If the original head node had no next reference, the head reference becomes null. This is an empty list, so it works! 
// If the original head node had a next reference, it would become the new head node, which is exactly what we want! 
// Removing a Non-Head Node
// If we're removing a node in between other nodes, we will need to connect the previous node to the next node:

// Connect

// Once we make this connection, we've successfully removed the node from the linked list!

//  Your Goal: Remove At
// Add a method removeAt on LinkedList.

// This method will take a number index and remove the node in the list corresponding to that index position.

class LinkedList {
    constructor() {
        this.head = null;
    }   
    addFirst(node) {
        if (this.head) {
            node.next = this.head;
            this.head = node;
        } else {
            this.head = node;
        }
    }
    addLast(node) {
        if (this.head) {
            let current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = node;
        } else {
            this.head = node;
        }
    }
    indexOf(node) {
        let current = this.head;
        let index = 0;
        while (current) {
            if (current === node) {
                return index;
            }
            current = current.next;
            index++;
        }
        return -1;
    }
    removeAt(index) {
        if (index === 0) {
            this.head = this.head.next;
            return;
        }
        
        let nodelndex = 0;
        let ptrNode = this.head;
        while(nodelndex < (index - 1)) {
            ptrNode = ptrNode.next;
            nodelndex++;
        }
        ptrNode.next = ptrNode.next.next;

    }
}


module.exports = LinkedList;