class Node {
  constructor(data) {
    this.data = data;
    this.nextElement = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.count = 0;
  }

  isEmpty() {
    return this.head === null;
  }

  printList() {
    if (this.isEmpty()) {
      console.log("empty");
      return false;
    } else {
      let temp = this.head;

      while (temp !== null) {
        process.stdout.write(String(temp.data));
        process.stdout.write(" -> ");
        temp = temp.nextElement;
      }
      console.log("null");
      return false;
    }
  }

  insertAtHead(data) {
    let node = new Node(data);

    // [node] -> [head] -> [data] -> [tail]
    node.nextElement = this.head;

    this.head = node;
    return this;
  }

  insertAtTail(data) {
    let node = new Node(data);

    // [head] -> [data] -> [tail] --> [node]
    let currentNode = this.head;

    if (this.isEmpty()) {
      return this;
    }

    if (currentNode.nextElement === null) {
      currentNode.nextElement = node;
      return this;
    }

    while (currentNode.nextElement !== null) {
      // while it's not null move to the next element
      currentNode = currentNode.nextElement;
    }

    currentNode.nextElement = node;
    return this;
  }

  search(value) {
    let currentNode = this.head;

    if (this.isEmpty()) {
      return this;
    }
    while (currentNode.nextElement !== null) {
      if (currentNode.data === value) {
        return "at index: " + this.count;
      }

      currentNode = currentNode.nextElement;
      this.count++;
    }

    return this;
  }

  // delete at the head, delete at tail, delete search
  deleteAtHead() {
    // [node] -> [head] -> [v] -> [v] -> [tail]
    let currentNode = this.head;

    if (this.isEmpty()) {
      return this;
    }

    this.head = currentNode.nextElement;

    return this;
  }

  deleteAtTail() {
    // [head] -> [v] -> [v] -> [tail]

    let currentNode = this.head;

    if (this.isEmpty()) {
      return this;
    }

    while (currentNode.nextElement.nextElement !== null) {
      currentNode = currentNode.nextElement;
    }

    currentNode.nextElement = null;
    return this;
  }

  deleteAtSearch(value) {
    // [node] -> [x] -> [x] -> [tail]
    let currentNode = this.head;

    if (this.isEmpty()) {
      return this;
    }

    while (currentNode.nextElement !== null) {
      if (currentNode.nextElement.data === value) {
        currentNode.nextElement = currentNode.nextElement.nextElement;
      }
      currentNode = currentNode.nextElement;
    }

    return this;
  }
}
