const LinkedList = require("./linked-list");

class Stack {
    constructor() {
        this.store = new LinkedList();
    }

    push(value) {
        this.store.addFirst(value);
    }

    pop() {
        const first = this.store.getFirst();
        this.store.delete(first);
        return first;
    }

    isEmpty() {
        const first = this.store.getFirst();
        return first ? false : true;
    }

    toString() {
        JSON.stringify(this.store);
    }
}

module.exports = Stack;
