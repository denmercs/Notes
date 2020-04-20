/**
 * Stack - last in, First out
 * Time complexity:         average     worst     worst (space)
 * Get, Search              O(n)        O(n)        O(n)
 * Insertion, Deletion      O(1)        O(1)
 */

class Stack {
  constructor() {
    this.stack = [];
  }

  push(data) {
    this.stack.push(data);
  }

  pop() {
    this.stack.pop();
  }

  printStack() {
    let str = "";
    for (let i = 0; i < this.stack.length; i++) {
      str += this.stack[i] + "\n";
    }
    return str;
  }
}

let myStack = new Stack();
myStack.push(2);
myStack.push(3);
myStack.push(9);
myStack.push(1);

//print stack
console.log("Your stack is:\n" + myStack.printStack()); //printStack discussed later in this lesson

//pop items from the stack
myStack.pop();
//print stack
console.log("Your stack after popping is:\n" + myStack.printStack());
