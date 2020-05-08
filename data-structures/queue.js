/**
 * Queue --> First in, First Out
 *  Time Complexity       Average       Worst       Worst(space)
 *  Get, Search           O(n)          O(n)          O(n)
 *  Insertion             O(1)          O(1)
 */

class Queue {
  constructor() {
    this.queue = [];
  }

  enqueue(data) {
    this.queue.push(data);
  }

  dequeue() {
    this.queue.shift();
  }

  printQueue() {
    let str = "";
    for (let i = 0; i < this.queue.length; i++) {
      str += this.queue[i] + "\n";
    }
    return str;
  }
}

let myQueue = new Queue();
myQueue.enqueue(2);
myQueue.enqueue(3);
myQueue.enqueue(9);
myQueue.enqueue(1);
console.log("Your queue is:\n" + myQueue.printQueue());

myQueue.dequeue();
console.log("Your queue after deletion is:\n" + myQueue.printQueue());
