class Queue {
    constructor() {
        this.store = []
    }

    enqueue(element) {
        this.store.push(element);
        return;
    }

    dequeue() {
        return this.store.shift();
    }

    front() {
        this.dequeue();
    }

    size() {
        let size = 0;
        while (this.store.length) {
            this.dequeue();
            count++;
        }
        return size;
    }

    isEmpty() {
        if (!this.store.length) return true;
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