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
        this.top = this.items[this.items.length - 2];
        return this.items.pop();
      }
    } else return null;
  }

  peek() {
    this.items[this.items.length - 1];
    return this;
  }
}

let stack = new Stack();
stack.push("dennis");
stack.push("mercado");
stack.push("full stack developer");

console.log(stack.peek());
