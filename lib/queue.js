class Queue {
    constructor() {
        this.store = new Array(this.capacity);
        this.length = 0;
        this.capacity = 20;
        this.head = 0;
        this.tail = -1;
    }

    enqueue(element) {
        if (this.length >= this.capacity) return;

        this.tail = (this.tail + 1) % this.capacity;
        this.store[this.tail % this.capacity] = element;
        this.length++;
    }

    dequeue() {
        if (this.isEmpty()) return;

        let result = this.store[this.head % this.capacity];

        this.store[this.head % this.capacity] = null;

        this.head = (this.head + 1) % this.capacity;
        this.length--;
        return result;
    }

    front() {
        return this.head;
    }

    size() {
        return this.length;
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
            arr = this.store.slice(this.head, this.capacity).concat(this.store.slice(0, this.tail + 1));
        } else {
            arr = this.store
        }
        return JSON.stringify(arr.filter((v) => v !== null));
    }
}

module.exports = Queue;