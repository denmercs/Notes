class Node {
  constructor(data) {
    this.data = data;
    this.nextElement = null;
  }
}

/**
 * insertAtTail(data)
 * insertAtHead(data)
 * delete(data)
 * deleteAtHead(data)
 * search(data)
 * isEmpty()
 */

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

  /** INSERTION
   * 3 types
   * insertion at the head
   * insertion at the tail
   * insertion at the N-th index
   */

  insertAtHead(data) {
    // insert node
    // create a new node
    let node = new Node(data);
    // point node to the next element
    node.nextElement = this.head;

    // insert the head to the new node (beginning)
    this.head = node;

    // return list
    return this;
  }

  insertAtTail(data) {
    // create a new node
    let node = new Node(data);

    if (this.isEmpty()) {
      this.head = node;
      return this;
    }

    // start from head
    let currentNode = this.head;

    // iterate to the last element
    while (currentNode.nextElement != null) {
      currentNode = currentNode.nextElement;
    }

    currentNode.nextElement = node;
    return this;
  }

  searchNode(value) {
    // [head] --> [data] --> [search] --> null
    let currentNode = this.head;

    while (currentNode !== null) {
      if (currentNode.data === value) {
        return true;
      } else {
        currentNode = currentNode.nextElement;
      }
    }
    return false;
  }

  // delete at the head
  // delete by search
  // delete by tail
}

let listHead = new LinkedList();
let listTail = new LinkedList();

for (let i = 0; i < 5; i++) {
  list = list.insertAtHead(i);
  listTail = listTail.insertAtTail(i);
}
list.printList();
listTail.printList();
console.log(list.searchNode(8));
