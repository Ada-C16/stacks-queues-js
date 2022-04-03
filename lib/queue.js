class Queue {
    constructor() {
        this.store = new Array(this.capacity);
        this.length = 0;
        this.capacity = 20;
        this.head = -1;
        this.tail = this.capacity - 1;
    }

    enqueue(element) {
        this.tail = (this.tail + 1) % this.capacity;

        if (this.head === this.tail) return;

        this.store[this.tail] = element;
        this.length++;
        
    }

    dequeue() {
        if (this.isEmpty()) return;

        if (this.head === -1) {
            this.head = 0;
        }

        console.log(this.store);

        let result = this.store[this.head]

        this.head = (this.head + 1) % this.capacity;
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
        return this.first === this.last;
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