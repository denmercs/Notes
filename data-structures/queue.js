/**
 * First in and first out
 * used widely in searching and sorting algorithm (breadth first search)
 *
 * enqueue
 * dequeue
 * getFront
 * isEmpty
 * size
 */

class Queue {
  constructor() {
    this.items = [];
  }

  isEmpty() {
    return this.items.length === 0;
  }

  getFront() {
    if (!this.isEmpty()) {
      return this.items[0];
    } else {
      return null;
    }
  }

  size() {
    return this.items.length;
  }

  enqueue(element) {
    this.items.push(element);
  }

  dequeue() {
    if (this.isEmpty()) {
      return null;
    } else {
      return this.items.shift();
    }
  }
}
