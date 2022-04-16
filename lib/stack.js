class Stack {
    constructor() {
        this.store = []
    }

    push(element) {
        this.store.push(element);
        return;
    }

    pop() {
        return this.store.pop();
    }

    isEmpty() {
        if (!this.store.length) return true;
        return false;
    }

    toString() {
        JSON.stringify(this.store);
    }
}

module.exports = Stack;