// Add Last
// In the last stage, we added a node to the front of the list. Now it's time to add one to the back of the list. As you might imagine, this one is a bit trickier.

// We can divide it into the same two scenarios again:

// No Existing Head Node
// If there is no existing head node, this actually works just the same as the addFirst logic.

// Since there's no other nodes, whether you are adding first or last boils down to the same logic… A new head node:

// No Head

// Existing Head Node
// It's a bit trickier with an existing head node. Let's say we have a list of size 2:

// Add Last

// We need to start at the head and continue down the list until we reach a point in the list where there is no next node. Once we reach this point, we set the next to our new node.

//  Your Goal: Add Last
// Create a method addLast on LinkedList which takes a node and adds it to the end of our linked list.

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
}