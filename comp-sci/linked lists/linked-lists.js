/* eslint-disable max-classes-per-file */
/* eslint-disable consistent-return */
/* eslint-disable class-methods-use-this */
/* eslint-disable max-classes-per-file */
class Node {
  constructor(value = 'null', next = 'null') {
    this.value = value;
    this.next = next;
  }
}

class LinkedList {
  constructor(head = 'null') {
    this.head = new Node(head);
  }

  append(value) {
    const newNode = new Node(value);

    if (this.head.value === 'null') {
      this.head = newNode;
    } else {
      let currentNode = this.head;
      while (currentNode.next !== 'null') {
        currentNode = currentNode.next;
      }
      currentNode.next = newNode;
    }
  }

  prepend(value) {
    const newNode = new Node(value);

    if (this.head.value === null) {
      this.head = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
  }

  size() {
    let currentNode = this.head;
    let counter = 0;

    while (currentNode !== 'null') {
      currentNode = currentNode.next;
      counter++;
    }
    return counter;
  }

  head() {
    return this.head;
  }

  tail() {
    let currentNode = this.head;

    while (currentNode.next !== 'null') {
      currentNode = currentNode.next;
    }
    return currentNode;
  }

  nodeAt(index) {
    if (this.size() <= index) return `${index} is beyond the size of this linked list.`;

    let currentNode = this.head;
    let counter = 0;

    while (counter < index) {
      currentNode = currentNode.next;
      counter++;
    }
    return currentNode;
  }

  pop() {
    let previousNode;
    let currentNode = this.head;
    while (currentNode.next !== 'null') {
      previousNode = currentNode;
      currentNode = currentNode.next;
    }
    previousNode.next = null;
  }

  contains(value) {
    let currentNode = this.head;
    while (currentNode !== 'null') {
      if (currentNode.value === value) {
        return true;
      }
      currentNode = currentNode.next;
    }
    return false;
  }

  indexOf(value) {
    if (!this.contains(value)) return null;

    let currentNode = this.head;
    let counter = 0;

    while (currentNode.value !== value) {
      currentNode = currentNode.next;
      counter++;
    }
    return counter;
  }

  toString() {
    let currentNode = this.head;
    let string = '';
    while (currentNode !== 'null') {
      string += `( ${currentNode.value} ) -> `;
      currentNode = currentNode.next;
    }
    string += 'null';
    return string;
  }

  insertAt(value, index) {
    if (this.size() <= index) return `${index} is beyond the size of this linked list.`;

    const tempNode = new Node(null, this.nodeAt(index));
    const newNode = new Node(value);

    this.nodeAt(index - 1).next = newNode;
    newNode.next = tempNode.next;
    tempNode.next = null;
  }

  removeAt(index) {
    if (this.size() <= index) return `${index} is beyond the size of this linked list.`;

    const previousNode = this.nodeAt(index - 1);
    const nodeToRemove = previousNode.next;

    previousNode.next = nodeToRemove.next;
    nodeToRemove.next = null;
  }
}
