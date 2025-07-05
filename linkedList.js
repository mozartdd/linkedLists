class LinkedList {
  constructor() {
    this.size = 0;
    this.head = null;
    this.tail = null;
    // Class to hold each individual node element
    this.node = class Node {
      constructor(value = null, nextNode = null) {
        this.value = value;
        this.nextNode = nextNode;
      }
    }
  }
  // Adds node to end of linked list
  append(value) {
    let node = new this.node(value);
    if (this.size === 0) { // If size is 0 node is head and tail at same time
      this.head = node;
    } else {
      this.tail.nextNode = node;
    }
    this.size++;
    this.tail = node;
  }
}


const li = new LinkedList();
li.append('dog');
li.append('cat');

console.log(li);

