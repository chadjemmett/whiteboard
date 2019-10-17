

class DoublyLinkedList {
  constructor() {
  }


}

class Stack {
  constructor() {
    this.size = 0
    this.storage = new DoublyLinkedList()

  }

  push(value) {
    // put on top of stack
    this.size += 1

  }

  pop() {
    // take off the top
    this.size -= 1

  }

  len() {
    return this.size
  }
}



class Queue {
  constructor() {
    this.size = 0
    this.storage = new DoublyLinkedList()
  }

  enqueue(value) {
    // add to the end
    this.size += 1
  }

  dequeue() {
    // remove from head
   this.size -= 1
  }

  len() {
    return this.size
  }

}
