//first in first out

class Stack {
    constructor() {
        this.store = []
    }

    push(element) {
        this.store.unshift(element)
    }

    pop() {
        return this.store.shift()
    }

    isEmpty() {
        return this.store.length === 0;
    }

    toString() {
        JSON.stringify(this.store);
    }
}

module.exports = Stack;