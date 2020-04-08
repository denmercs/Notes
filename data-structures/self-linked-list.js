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
    // create node
    let node = new Node(data);

    // move the node to the next element
    node.nextElement = this.head;
    this.head = node;

    return this;
  }
}

let list = new LinkedList();

for (let i = 0; i < 5; i++) {
  list.insertAtHead(i);
}

console.log(list.printList());
