class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
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
    let node = new Node(data);

    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      node.prev = this.tail;
      this.tail = node;
    }
    this.length++;
    return this;
  }

  pop() {
    if (!this.head) return null;

    let popped = this.tail;

    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = popped.prev;
      this.tail.next = null;
      popped.prev = null;
    }
    this.length--;
    return this;
  }

  unshift(data) {
    let node = new Node(data);

    if (!this.head) {
      this.head = node;
      this.tail = node;
    }

    this.head.prev = node;
    node.next = this.head;
    this.head = node;
    this.length++;
    return this;
  }

  shift() {
    if (!this.head) {
      this.head = null;
      this.tail = null;
    }

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    }

    let popped = this.head;

    this.head = popped.next;
    popped.next = null;
    this.head.prev = null;
    this.length--;
    return this;
  }

  get(index) {
    if (index < count || count >= this.length) return null;

    if (index <= this.length / 2) {
      let count = 0;
      let current = this.head;
      while (current !== index) {
        current = current.next;
        count++;
      }
      return current.data;
    } else {
      let count = this.length - 1;
      let current = this.tail;
      while (count !== index) {
        current = current.prev;
        count--;
      }
      return current.data;
    }
  }
}

let list = new DoublyLinkedList();

list.push(1);
list.push(2);
list.push(3);
list.push(4);
list.push(5);
list.pop();
list.shift();
list.unshift(21);

list.printList();
