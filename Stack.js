// a LIFO data structure - Last In First Out

// Linked List implementation
class Node {
    constructor(val, next=null) {
        this.val = val;
        this.next = next;
    }
}

class Stack {
    constructor() {
        this.top = null;
        this.length = 0;
    }
    // add item to the beginning of the list. Time complexity O(1)
    push(itm) {
        if (!this.top) return this.top = new Node(itm);
        this.top = new Node(itm, this.top);
        this.length++;
    }
    // remove item from the beginning of the list. Time complexity O(1)
    pop() {
        if (!this.top) return undefined;
        let removedItem = this.top.val;
        this.top = this.top.next;
        this.length--;
        return removedItem.val;
    }
}

// test drive code
let stack = new Stack();
for (let i = 0; i < 5; i++) {
    stack.push("a" + i);
}