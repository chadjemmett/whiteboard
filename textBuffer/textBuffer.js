
class TextBuffer {
  constructor() {
  }

  printBuffer () {
  }

  append (string) {
  }

  prepend (string) {
  }

  removeFront (chars_to_remove) {
  }

  removeBack (chars_to_remove) {
  }

  copyText (string) {
  }

  joinBuffer (other_buffer) {
  }

  split(split_location) {
  }

  joinString (string_to_join) {
  }

}

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
  }

  append(item) {
    let node = new Node(item);
    if(!this.head) {
      this.head = node;
      this.tail = node;
    } else {
    node.prev = this.tail.next = node;
    this.tail = node
  }
}

}

const dll = new DoublyLinkedList()
  dll.append(99)
  dll.append(00)
  dll.append(01)
console.log(dll)
