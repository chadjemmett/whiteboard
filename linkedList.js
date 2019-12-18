function Node(value) {
  this.value = value
  this.next = null
}



class LinkedList {
  constructor(value) {
    this.head = new Node(value)
    this.length = 1
  }

  addToTail = (value) => {
    let currentNode = this.head

      while(currentNode.next) {
        currentNode = currentNode.next
      }

    currentNode.next = new Node(value)

    this.length += 1
  }

  removeFromHead = () => {
    // keep track of the head.next
    let nextNode = this.head.next
    // keep track of the old head
    let oldNode = this.head
    // change head to the old head.next node
    this.head = nextNode
    // set old node next to null
    oldNode.next = null
    // return the old node
    this.length -= 1
    return oldNode
  }

  addToHead = (value) => {
    // keep track of the old head
    let oldHead = this.head
      // create a new head
    this.head = new Node(value)
    // set the head.next to the old head
    this.head.next = oldHead
    this.length += 1
  }

  length = () => {
    return this.length
  }

  insertInto = (value) => {
    console.log("working")
    let curNode = this.head
      while(curNode) {
        if(curNode.value < value) {
          let prevNode = curNode
          let nextNode = curNode.next
          
          console.log("prevNode", prevNode, "nextNOde", nextNode)
        }

        curNode = curNode.next
      }



  }



}


const ll = new LinkedList(5)
ll.addToTail(8)
ll.addToTail(9)
ll.addToTail(1)
ll.addToTail(11)
ll.addToHead(99)
ll.insertInto(12)
// console.log(ll.removeFromHead().value)
// console.log("Length", ll.length)

  let node = ll.head
  while(node) {
    console.log("traversing list", node.value)
    node =  node.next
  }

// 5
// 8
// 9
// 1

