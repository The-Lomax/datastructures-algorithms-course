// FIFO data structure (First In, First Out). 
// First element to come in will be first to come out.

class Node {
    constructor(val, next=null) {
        this.val = val;
        this.next = next;
    }
}

class Queue {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(itm) {
        let newNode = new Node(itm);
        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
        }
        else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
    }
    pop() {
        if (!this.head) return undefined;
        let removedItem = this.head.val;
        this.head = this.head.next;
        this.length--;
        return removedItem;
    }
    print() {
        if (!this.head) return undefined;
        let current = this.head;
        let i = 0;
        while (current) {
            console.log(`[${i}]:`, current.val);
            current = current.next;
            i++;
        }
    }
}

// test drive code
let que = new Queue();
for (let i = 0; i < 5; i++) {
    que.push("a" + i);
}

console.log(que.pop());
console.log(que.pop());
console.log(que.pop());
que.print();