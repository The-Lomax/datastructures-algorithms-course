// Singly linked list is a data structure that contains a head, a tail and length properties.
// Linked lists consist of nodes and each node has a value and a pointer to another node.
// They are ordered.

// lists:
// Dont have indexes
// Are built of nodes, that point to the next element
// Random access is not allowed

// Node stores value and ref to next node

class Node {
    constructor(val, next=null) {
        this.val = val;
        this.next = next;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    // add item to the end of the list. Time complexity O(1)
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
    // remove item from the end of the list. Time complexity O(1)
    pop() {
        if (!this.head) return undefined;
        let current = this.head;
        for (let i = 0; i < this.length - 2; i++) {
            current = current.next;
        }
        this.tail = current;
        let poppedItem = current.next;
        this.tail.next = null;
        this.length--;
        return poppedItem.val;
    }
    // add item to the beginning of the list. Time complexity O(1)
    unshift(itm) {
        if (!this.head) this.push(itm);
        let newHead = new Node(itm, this.head);
        this.head = newHead;
        this.length++;
    }
    // remove item from the beginning of the list. Time complexity O(1)
    shift() {
        if (!this.head) return undefined;
        let removedItem = this.head.val;
        this.head = this.head.next;
        this.length--;
        return removedItem;
    }
    // update value at index with new value. Time complexity O(n)
    set(idx, val) {
        if (idx < 0 || idx >= this.length) return null;
        let current = this.head;
        for (let i = 0; i < idx; i++) {
            current = current.next;
        }
        current.val = val;
    }
    // insert item at index. Time complexity O(n)
    insert(idx, val) {
        if (idx <= 0) {
            this.unshift(val);
            return;
        }
        if (idx >= this.length) {
            this.push(val);
            return;
        }
        let newNode = new Node(val);
        let current = this.head;
        for (let i = 0; i < idx - 1; i++) {
            current = current.next;
        }
        newNode.next = current.next;
        current.next = newNode;
        this.length++;
    }
    // remove item at index and returns it. Time complexity O(n)
    remove(idx) {
        if (idx < 0 || idx >= this.length) return null;
        if (idx === 0) return this.shift();
        if (idx === this.length - 1) return this.pop();

        let current = this.head;
        for (let i = 0; i < idx - 1; i++) {
            current = current.next;
        }
        let removedItem = current.next;
        current.next = removedItem.next;
        this.length--;
        return removedItem.val;
    }
    // retrieve item at index. Time complexity O(n)
    get(idx) {
        if (idx < 0 || idx >= this.length) return null;
        let current = this.head;
        for (let i = 0; i < idx; i++) {
            current = current.next;
        }
        return current.val;
    }
    // reverse the list. Time complexity O(n)
    reverse() {
        let node = this.head, prev = null, next = null;
        [this.head, this.tail] = [this.tail, this.head];
        for (let i = 0; i < this.length; i++) {
            next = node.next;
            node.next = prev;
            prev = node;
            node = next;
        }
    }
    // display all values in the list. Also prints indexes for debugging. Time complexity O(n)
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
let list = new SinglyLinkedList();
// list.print()
// console.log("Removed: ", list.pop());
for (let i = 1; i <= 5; i++) {
    list.push(i);
}
// console.log("Before:")
list.print();
// list.unshift("Aloha");
// console.log("retrieve item:", list.get(3));
// console.log("Shifted: ", list.shift());
// list.set(3, "Merry xmas!");
// list.insert(88, "--------");
// console.log("Removed:", list.remove(3));
// list.reverse();
// console.log("After:")
// list.print();