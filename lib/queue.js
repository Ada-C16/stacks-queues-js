class Queue {
    constructor() {
        this.store = [];
        this.length = 0;
        this.capacity = 20;
        this.head = 0;
        this.tail = -1;
    }

    enqueue(element) {
        if (this.length >= this.capacity) return;

        this.tail = this.tail + 1;
        this.store[this.tail % this.capacity] = element;
        this.length++;
        
    }

    dequeue() {
        if (this.isEmpty()) return;

        let result = this.store[this.head % this.capacity];

        this.store[this.head % this.capacity] = null;

        this.head =this.head + 1
        this.length--;
        return result;
    }

    front() {
        throw new Error("This method has not been implemented!");
    }

    size() {
        throw new Error("This method has not been implemented!");
    }

    isEmpty() {
        return this.length === 0;
    }

    isFull() {
        return this.length === this.capacity;
    }

    toString() {
        let arr;
        if (this.head > this.tail) {
            arr = this.store.slice(this.head, this.capacity).concat(this.store.slice(0, this.tail));
        } else {
            arr = this.store
        }
        return JSON.stringify(arr.filter((v) => v !== null));
    }
}

module.exports = Queue;