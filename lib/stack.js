const LinkedList = require("./linked-list");

class Stack {
    constructor() {
        this.store = new LinkedList();
    }

    push(element) {
        this.store.addLast(element);
        return;
    }

    pop() {
        const toRemove = this.store.getLast();
        this.store.delete(toRemove);

        return toRemove;
    }

    isEmpty() {
        return this.store.isEmpty();
    }

    toString() {
        JSON.stringify(this.store);
    }
}

module.exports = Stack;