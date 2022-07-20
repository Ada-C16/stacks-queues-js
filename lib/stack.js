const LinkedList = require("./linked-list.js");

class Stack {
    constructor() {
        this.store = new LinkedList();
    }

    push(value) {
        this.store.addLast(value);
    }

    pop() {
        let last = this.store.getLast();
        this.store.delete(last);
        return last;
    }

    isEmpty() {
        return this.store.isEmpty();
    }

    toString() {
        this.store.toString();
    }
}

module.exports = Stack;