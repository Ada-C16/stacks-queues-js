// last in in first out
class Queue {
    constructor() {
        this.store = new Array(20);
        this.front = 0;
        this.rear = 0;
        this.size = 0;
        this.bufferSize = 20
    }

    enqueue(element) {
        // adds element to the end of the queue
        
        if (this.size === this.bufferSize){
            return;
        }

        this.store[this.rear] = element;
        this.rear = (this.rear + 1) % this.bufferSize;
        this.size += 1;
    }
//removes and returns element form the front of queue and none if queue is empty
    dequeue() {

        if (this.front === this.rear) {
            return;
        }
        const firstElement = this.store[this.front];
        this.store[this.front] = null;
        this.front = (this.front + 1) % this.bufferSize;
        this.size -= 1;

        return firstElement;
    }

    front() {
        return this.store[this.front]
    }

    size() {
        return this.size;
    }

    isEmpty() {
        return this.size === 0;
    }

    toString() {
        let arr;
        if (this.front > this.rear) {
            arr = this.store.slice(this.front, this.capacity).concat(this.store.slice(0, this.rear));
        } else {
            arr = this.store
        }
        return JSON.stringify(arr.filter((v) => v !== null));
    }
}

module.exports = Queue;