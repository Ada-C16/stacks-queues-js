// first in first out
class Queue {
    constructor() {
        this.store = [] * 20;
        this.front = -1;
        this.rear = -1;
        this.size = 0;
        this.bufferSize = 20
    }

    enqueue(element) {
        // adds element to the end of the queue
        if (this.size == this.bufferSize){
            throw new Error("This Queue is full!");
        }

        if (this.size == 0) {
            this.front = 0;
            this.rear = 0;
        }

        this.store[this.rear] = element;
        this.rear = (this.rear + 1) % this.bufferSize;
        
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