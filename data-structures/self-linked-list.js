class Node {
  constructor(data) {
    this.data = data;
    this.nextElement = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  isEmpty() {
    return this.head === null;
  }

  printList() {
    if (this.isEmpty()) {
      console.log("Empty");
      return false;
    } else {
      let temp = this.head;
      while (temp != null) {
        process.stdout.write(String(temp.data));
        process.stdout.write(" -> ");
        temp = temp.nextElement;
      }
      console.log("null");
      return true;
    }
  }

  insertAtHead(data) {
    // [data] --> [head]
    let node = new Node(data);

    node.nextElement = this.head;

    this.head = node;

    return this;
  }

  insertAtTail(data) {
    let node = new Node(data);

    // [head] --> [data] --> [data] --> [tail]

    if (this.isEmpty()) {
      this.head = node;
      return this;
    }

    let currentNode = this.head;

    while (currentNode.nextElement !== null) {
      currentNode = currentNode.nextElement;
    }

    currentNode.nextElement = node;

    return this;
  }

  searchNode(value) {
    // [head] --> [data] --> [search] --> [tail]

    let currentNode = this.head;

    while (currentNode !== null) {
      if (currentNode.data === value) {
        return true;
      }
      currentNode = currentNode.nextElement;
    }
    return false;
  }
}

let link = new LinkedList();
let linkTail = new LinkedList();

for (let i = 0; i < 5; i++) {
  link = link.insertAtHead(i);
  linkTail = linkTail.insertAtTail(i);
}

link.printList();
linkTail.printList();
console.log(link.searchNode(3));
