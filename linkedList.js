class LinkedList {
  constructor() {
    this.size = 0;
    this.head = null;
    this.tail = null;
    // Class to hold each individual node element
    this.node = class Node {
      constructor(value = null) {
        this.value = value;
        this.next = null;
      }
    }
  }
  // Adds node to end of linked list
  append(value) {
    let node = new this.node(value);
    if (this.size === 0) { // If size is 0 node is head and tail at same time
      this.head = node;
    } else {
      this.tail.next = node;
    }
    this.size++;
    this.tail = node;
  }
  // Adds node to start of linked list
  prepend(value) {
    let node = new this.node(value);
    if (this.size === 0) {
      this.tail = node;
    } else {
      node.next = this.head;
    }
    this.size++;
    this.head = node;
  }
  // Return node at given index
  at(idx) {
    let node = this.head;
    let i = 0;
    if (idx >= this.size) {
      return `List does not have so many elements. Size: ${this.size}`;
    }
    if (idx < 0) {
      return `Please enter positive integer.`;
    }

    // Iterate while loop hasn't reached end of list
    while (i <= this.size - 1) {
      if (idx === i) {
        return node;
      }
      i++;
      // Current node becomes node's next element
      node = node.next;
    }
    return -1;
  }
  // Removes last element from list
  pop() {
    switch (this.size) {
      case 0:
        return 'List is already empty.';

      case 1:
        this.size--;
        this.head = null;
        this.tail = null;
        return 'List is now empty.';

      case 2:
        this.size--;
        this.head.next = null;
        this.tail = this.head;
        return 'List now contains a single element.';

      default:
        let newTail = this.at(this.size - 2);
        this.tail = newTail;
        this.tail.next = null;
        this.size--;
        return this.tail;
    }
  }
}


const li = new LinkedList();

li.prepend('bat');
li.append('dog');
li.append('cat');
li.append('elephant');
li.append('mouse');
li.append('rat');


console.log(li);