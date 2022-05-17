//first in last out
const LinkedList = require("../lib/linked-list.js");


class Stack {
    constructor() {
        this.store = new LinkedList();
    }

    push(element) {
        return this.store.addLast(element);
    }

    pop() {
        const removeItem = this.store.getLast();
        this.store.delete(removeItem);
        return removeItem;

    }

    isEmpty() {
        return this.store.length() === 0;
    }

    toString() {
        JSON.stringify(this.store);
    }
}

module.exports = Stack;