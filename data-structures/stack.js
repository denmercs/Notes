/**
 * Stack - follows the last in first out ordering
 *
 * push(element)
 * pop
 * isEmpty
 * getTop
 *
 */

class Stack {
  constructor() {
    this.items = [];
    this.top = null;
  }

  getTop() {
    if (this.item.length === 0) {
      return null;
    }
    return this.top;
  }

  isEmpty() {
    return this.items.length === 0;
  }

  isSize() {
    return this.items.length;
  }

  push(element) {
    this.items.push(element);
    this.top = element;
  }

  pop() {
    if (this.items.length !== 0) {
      if (this.items.length === 1) {
        this.top = null;
        return this.items.pop();
      } else {
        this.top = this.items[this.itemslength - 2];
        return this.items.pop();
      }
    }
  }
}
