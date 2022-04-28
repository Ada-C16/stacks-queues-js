class Queue {
    constructor() {
        this.capacity = 20;
        this.head = 0;
        this.tail = 0;
        this.store = Array(this.capacity).fill(null);
    }

    enqueue(element) {
        if (this.size()!==this.capacity) {
            this.store[this.tail] = element;
            this.tail = (this.tail + 1) % this.capacity;
        }
    }

    dequeue() {
        if (this.head !== this.tail) {
            const dequeued = this.store[this.head];
            this.store[this.head] = null;
            this.head = (this.head + 1) % this.capacity;
            return dequeued;
        }
    }

    front() {
        return this.head
    }

    size() {
        let size;
        if (this.head > this.tail) {
            size = this.capacity - this.head + this.tail;
        } else {
            size = this.tail - this.head;
        }
        return size;
    }

    isEmpty() {
        return this.head === this.tail;
    }

    toString() {
        let arr;
        if (this.head > this.tail) {
            arr = this.store
                .slice(this.head, this.capacity)
                .concat(this.store.slice(0, this.tail));
        } else {
            arr = this.store;
        }
        return JSON.stringify(arr.filter((v) => v !== null));
    }
}

module.exports = Queue;
