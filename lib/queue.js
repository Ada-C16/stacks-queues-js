class Queue {
    #front;
    #rear;

    constructor() {
        this.store = new Array(20);
        // front and rear are index refs
        this.#front = this.#rear = 0;
    }

    enqueue(element) {        
        if (
            (this.#front === 0 && this.#rear === this.size() - 1)
        ) {
            throw 'QueueFullException'
        }
        else if (this.isEmpty()) {
            this.store[this.#front] = element;
        } else {
            this.#rear += 1;
            this.store[this.#rear] = element;
        }

        return;
    }

    dequeue() {
        if (this.isEmpty()) {
            throw 'QueueEmptyException'
        }

        const data = this.store[this.#front];
        this.store[this.#front] = null;

        if (this.#front === this.#rear) {
            this.#front = this.#rear = -1;
        } else if (this.#front === this.size() - 1) {
            this.#front = 0;
        } else {
            this.#front += 1
        }

        return data;
    }

    front() {
        return this.store[this.#front];
    }

    size() {
        return this.store.length;
    }

    isEmpty() {
        if (this.#front === this.#rear && !this.store[this.#front]) return true
        return false;
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