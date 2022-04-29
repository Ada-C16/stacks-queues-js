//last in first out
const LinkedList = require("../lib/linked-list.js");


class Stack {
    constructor() {
        this.store = new LinkedList()
    }

    push(element) {
        this.store.addLast(element)
    }

    pop(element) {
        const removeItem = this.store.getFirst(element)
        return this.store.delete(removeItem)

    }

    isEmpty() {
        return this.store.length === 0;
    }

    toString() {
        JSON.stringify(this.store);
    }
}

module.exports = Stack;