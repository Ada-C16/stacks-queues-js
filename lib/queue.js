class Queue {
    constructor() {
        this.store = [];
    }

    enqueue(element) {
        // adds element to the end of the queue
        this.store.push(element)

        
    }
//removes and returns element form the front of queue and none if queue is empty
    dequeue() {

        return this.store.shift()
    }

    front() {
        return this.store[0]
    }

    size() {
        return this.store.length;
    }

    isEmpty() {
        return this.store.length === 0;
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