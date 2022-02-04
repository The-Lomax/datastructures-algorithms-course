// it's a list that contains links to previous and next nodes

// very similar to single link list. twice more efficient for access but takes twice more extra storage

class Node {
    constructor(val, prev=null, next=null) {
        this.prev = prev;
        this.val = val;
        this.next = next;
    }
}

class DoublyLinkedList {
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    // push
    push(itm) {
        let newNode = new Node(itm)
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        }
        else {
            newNode.prev = this.tail;
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
    }
    // pop
    pop() {
        if (!this.head) return undefined;
        let poppedItem = this.tail;
        if (this.length === 1) {
            this.clear();
        }
        else {
            this.tail = this.tail.prev;
            this.tail.next = null;
        }
        this.length--;
        return poppedItem.val;
    }
    // shift
    shift() {
        if (!this.head) return undefined;
        let shiftedItem = this.head;
        if (this.length === 1) {
            this.clear();
            return shiftedItem.val;
        }
        this.head = this.head.next;
        this.head.prev = null;
        this.length--;
        return shiftedItem.val;
    }
    // unshift
    unshift(itm) {
        let newNode = new Node(itm);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        }
        else {
            newNode.next = this.head;
            this.head.prev = newNode;
            this.head = newNode;
        }
        this.length++;
    }
    // get
    get(idx) {
        if (idx <= 0) return this.head.val;
        if (idx >= this.length) return this.tail.val;

        let current = this.traverse(idx);
        return current.val;
    }
    // set
    set(idx, itm) {
        if (idx < 0) return this.unshift(itm);
        if (idx >= this.length) return this.push(itm);

        let current = this.traverse(idx);
        current.val = itm;
    }
    // insert
    insert(idx, itm) {
        if (idx <= 0) return this.unshift(itm);
        if (idx >= this.length) return this.push(itm);

        let newNode = new Node(itm);
        let current = this.traverse(idx);
        newNode.prev = current.prev;
        current.prev.next = newNode;
        current.prev = newNode;
        newNode.next = current;
        current = newNode;
        this.length++;
    }
    // remove
    remove(idx) {
        if (idx <= 0) return this.shift();
        if (idx >= this.length - 1) return this.pop();

        let current = this.traverse(idx);
        let removedItem = current;
        current.prev.next = current.next;
        current.next.prev = current.prev;
        this.length--;
        return removedItem.val;
    }
    // reverse
    reverse() {
        if (this.length <= 1) return;

        let current = this.head;
        for (let i = 0; i < this.length; i++) {
            [current.prev, current.next] = [current.next, current.prev];
            current = current.prev;
        }
        [this.head, this.tail] = [this.tail, this.head];
    }
    // print all elements
    print() {
        if (!this.head) return undefined;
        let current = this.head;
        let i = 0;
        while (current) {
            console.log(`[${i}]`, current.val);
            current = current.next;
            i++;
        }
    }
    // empty list
    clear() {
        if (!this.head) return undefined;
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    // traverse to index
    traverse(idx) {
        let itm = null;
        if (idx < Math.floor(this.length / 2)) {
            // index in left half, traverse from beginning
            itm = this.head;
            for (let i = 0; i < idx; i++) {
                itm = itm.next;
            }
        }
        else {
            // index in right half, traverse from end
            itm = this.tail;
            for (let i = 1; i < this.length - idx; i++) {
                itm = itm.prev;
            }
        }
        return itm;
    }
}

// test drive code
let list = new DoublyLinkedList();
for (let i = 0; i < 14; i++) {
    list.push(i + 100);
}
console.log("Before: ")
list.print();

// test commands go here
// console.log("Pop: ", list.pop());
// console.log("Shift: ", list.shift());
// list.unshift(99);
// console.log("Get: ", list.get(39));
// list.set(99, 1);
// list.insert(2, "----");
// console.log("Remove: ", list.remove(2));
// list.reverse();

// console.log("After:")
// list.print();