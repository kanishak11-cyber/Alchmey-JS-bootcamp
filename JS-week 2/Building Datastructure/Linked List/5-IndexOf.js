// Index Of
// Let's write an indexOf method like a regular array! It will be zero-based so the head will be 0 and every following index will be incremented by 1:

// Index Of

//  Need a refresher on the indexOf method? You can find more information in the MDN docs.

//  Your Goal: Write Index Of
// Write a method indexOf on LinkedList which takes node and returns a number index that indicates where the node is in the list.

// To determine if a node is equal to another node you can simply compare them with (node1 === node2). This will evaluate to true if they are the same node.

//  Technically when comparing objects, the === operator will return true if they point to same place in memory. For our purposes this will work if they refer to the same node. You can find more on the equality operators here.

// Examples of using indexOf:

// const node1 = new Node(4);
// const node2 = new Node(3);
// const linkedList = new LinkedList();

// linkedList.addLast(node1); // node1 
// linkedList.addLast(node2); // node1 --> node2

// console.log(linkedList.indexOf(node1)); // 0
// console.log(linkedList.indexOf(node2)); // 1
// You can assume that the node is in the list. There is no need to handle the case where it is not found… unless you really want to! 


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
    indexOf(node){
        let current = this.head;
        let index = 0;
        while(current){
            if(current === node){
                return index;
            }
            current = current.next;
            index++;
        }
        return -1;
    }
    
}