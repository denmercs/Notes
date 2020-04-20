class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  printList() {
    if (this.length === 0) {
      console.log("Empty List");
      return false;
    } else {
      let temp = this.head;
      while (temp != null) {
        process.stdout.write(String(temp.data));
        process.stdout.write(" -> ");
        temp = temp.next;
      }
      console.log("null");
      return true;
    }
  }

  push(data) {
    let newNode = new Node(data);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  pop() {
    if (!this.head) return undefined;

    let current = this.head;
    let newTail = current;

    while (current.next) {
      newTail = current;
      current = current.next;
    }
    this.tail = newTail;
    this.tail.next = null;
    this.length--;

    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }

    return this;
  }

  shift() {
    if (!this.head) return undefined;
    let current = this.head;
    this.head = current.next;
    this.length--;

    if (this.length === 0) {
      this.tail = null;
    }

    return this;
  }

  unshift(data) {
    let node = new Node(data);

    if (!this.head) {
      this.head = node;
      this.tail = this.head;
    } else {
      // let the pointer point to the head
      node.next = this.head;
      this.head = node;
      this.length++;
    }

    return this;
  }

  get(value) {
    let index = 0;

    if (value < 0 || value > this.length) return null;

    let current = this.head;
    while (index !== value) {
      current = current.next;
      index++;
    }

    return current;
  }

  set(data, index) {
    let foundNode = this.get(index);

    if (foundNode) {
      foundNode.data = data;
      return true;
    }

    return false;
  }

  insert(data, index) {
    let counter = 0;
    let node = new Node(data);
    let current = this.head;
    let prev = null;

    if (index < 0 || index > this.length) return null;

    while (counter !== index) {
      prev = current;
      current = current.next;
      counter++;
    }

    prev.next = node;
    node.next = current;
    this.length++;
    return this;
  }

  remove(index) {
    if (index < 0 || index > this.length) return null;

    let counter = 0;
    let current = this.head;
    let prev = null;

    if (index === 0) {
      this.shift();
    } else if (index === this.length - 1) {
      this.pop();
    } else {
      while (index !== counter) {
        prev = current;
        current = current.next;
        counter++;
      }
      prev.next = current.next;
    }
    this.length--;
    return this;
  }

  reverse() {
    let current = this.head;
    let prevNode = null;
    let nextNode = null;

    while (current !== null) {
      nextNode = current.next;
      current.next = prevNode;
      prevNode = current;
      current = nextNode;
    }

    this.head = prevNode;

    return this;
  }
}

const list = new SinglyLinkedList();

list.push(23);
list.push(15);
list.push(2);
list.pop();
list.shift();
list.unshift(50);
list.push(35);
list.push(40);
list.get(2);
list.set(60, 2);
list.insert(20, 3);
list.printList();
list.remove(3);
list.printList();
list.reverse();
list.printList();
