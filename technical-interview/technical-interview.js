/**
 * Complete fibronacci function below
 */

/**
 * * Return an array containing the n integer
 * * Understand: integer, the length of Fibonacci series to return
 * * [0, 0] = 0
 * * [0, 1] = 1 --> start
 * * [0, 1] = 1
 * * [1, 1] = 2
 * * [1, 2] = 3
 * * [3, 2] = 5
 * * [3, 5] = 8
 * * [5, 8] = 13
 * *
 * * Plan:
 * * - make an array which starts at [0, 1]
 * * - loop the sequence base on the number of n
 * * - first index will be arr[i - 2]
 * * - second index will be arr[- 1]
 * */

function fibronacci(n) {
  let newArr = [0, 1];

  if (n === 1) {
    newArr = [0];
    return newArr;
  } else {
    for (let i = 2; i < n - 1; i++) {
      newArr.push(newArr[i - 2] + newArr[i - 1]);
    }
  }
  return newArr;
}

console.log(fibronacci(10));

/* * Complete the 'balancedBrackets' function below.
 *
 * QUESTION 2
 *
 * The function is expected to return a BOOLEAN.
 * The function accepts STRING string as parameter. */

function balancedBrackets(string) {
  /**
   * * Understand:
   * *  - every bracket should be balance or has it's other end value (1)
   * *  - if one is missing then it should be 0
   * *  - if there's no bracket at all then it should be 1
   * *
   * *  Plan:
   * * - have an object that will have corresponding brackets {}, [], (), ||
   * * - have a second object that will check if it has second pair or not
   * * - use data algo of stack (last in - first out) to check each item
   * * - then compare them to the open and close object
   * */

  // use data algo of stack (last in - first out) to check each item
  let stack = [];
  // have an object that will have corresponding brackets {}, [], (), ||
  let firstBracket = {
    "[": "]",
    "(": ")",
    "{": "}",
    "|": "|",
  };
  // have a second object that will check if it has second pair or not
  let secondBracket = {
    "]": true,
    ")": true,
    "}": true,
    "|": true,
  };

  // then compare them to the open and close object
  for (let i = 0; i < string.length; i++) {
    if (firstBracket[string[i]]) {
      stack.push(string[i]);
    } else if (secondBracket[string[i]]) {
      if (firstBracket[stack.pop()] !== string[i]) return false;
    }
  }
  // Note that HackerRank exepected output from your code will be 0 inidicating false or a 1 indicating true
  // if the still has an item on the stack then return false or 0 and then if none then true or 0
  if (stack.length === 0) {
    return 1;
  } else {
    return 0;
  }
}

console.log(balancedBrackets("{[)](}"));

function removeKthLinkedListNode(head, k) {
  /* * Complete the 'removeKthLinkedListNode' function below.
   * * The function is expected to return an INTEGER_SINGLY_LINKED_LIST.
   * The function accepts following parameters:
   * *  1. INTEGER_SINGLY_LINKED_LIST head
   * *  2. INTEGER k
   * */

  /* * For your reference:
   * * SinglyLinkedListNode {
   *     int data;
   *     SinglyLinkedListNode next;
   * }
   * */
  /**
   * * Understand:
   * *  - receives head node of a linked list
   * * - remove the kth node from the end of the linked list
   * * - return head node of the updated list
   * *  - if k is longer than the linked list -> same list
   * *
   * * Plan:
   * *  - K is from the END
   * *  - if k is between last and first node of linked list
   * *      [] - [] - x - []
   * *               --------|
   * *      [] - [] | x     []
   * *
   * *  - reconnect the previous node of k to the next node of k
   * *  - if the k to be removed is at the first node of linked list
   *      x - [] - []
   * *
   * *  - if k is to be removed at t he last node of the linked list
   * *      [] - [] - x
   * */

  let list = [];
  let currentNode = head;
  // if the next current is not null
  while (currentNode.next !== null) {
    // push the node to our list
    list.push(currentNode);
    // point the current node to the next node
    currentNode = currentNode.next;
  }
  list.push(currentNode);

  // console.log(list)
  // if k is between last and first node of linked list
  // check the length of the list if
  // in test 0 remove the 6 node
  // console.log(list.length - k - 1) --> returns 5 in test case 0
  // console.log(list.length - k + 1); --> return 7 in test case 0
  if (list.length - k - 1 >= 0 && list.length - k + 1 < list.length) {
    // set the node to the next node
    // console.log(list[list.length - k - 1]) --> 15
    // console.log(list[list.length - k + 1]) --> 13
    list[list.length - k - 1].next = list[list.length - k + 1];
    return list[0];
  }

  // if the k to be removed is at the first node of linked list
  // console.log(list.length - k - 1) --> returns -1 in test case 3
  if (list.length - k - 1 < 0) {
    return list[1];
  }

  // if the node to be removed at the last node
  // console.log(list.length - k + 1) --> returns 5 in test case 2
  // console.log(list.length) --> return 5 in test case 2

  if (list.length - k + 1 >= list.length) {
    // console.log(list.length - k - 1); --> returns 3 in test case 2
    // set the next node to null which is 4
    list[list.length - k - 1].next = null;
    return list[0];
  }
}
