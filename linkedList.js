class LinkedList {
  constructor() {
    this.size = 0;
    this.head = null;
    this.tail = null;
    // Class to hold each individual node element
    this.node = class Node {
      constructor(value = null, next = null) {
        this.value = value;
        this.next = next;
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
    let node = new this.node(value)
    if (this.size === 0) {
      this.tail = node;
    } else {
      node.next = this.head;
    }
    this.size++;
    this.head = node;
  }
}


const li = new LinkedList();

li.append('dog');
li.append('cat');
li.append('elephant');
li.append('mouse');
li.append('rat');
li.prepend('bat');

console.log(li);