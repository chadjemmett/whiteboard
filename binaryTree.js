
const directions = ["E", "N", "S", "W"]

class Tree {
  constructor (value, mommy=null) {
    this.value = value
    this[directionOne] = null
    this[directionTwo]= null
    this.mommy = mommy
  }

  insert(value) {
    // check the value vs the current value
    if (value < this.value) {
      // if smaller go left
      // If there's nothing there then add it
      if (this.left === null) {
        this.left = new Tree(value, this) 
      } else {
        // otherwise recursively insert the value
        // So it goes deeper in the tree
        this.left.insert(value)
      }
    } else {
      // if the value is larger it goes right
      // Repeat the same as above.
      if (this.right === null) {
        this.right = new Tree(value, this)
      } else {
        this.right.insert(value)
      }
    }

  }

  searchTree(target) {
    // if the target is equal to the value then we've found it
    // what about null?
    if (target === this.value) {
      return `found it ${this.value}`
    }

    else if (target < this.value) {
      if (this.left !== null) {
        return this.left.searchTree(target)
        // return `found the left one ${this.left.value}`
      } else {
        return `Not here on the left`
      }
    }
    else if (target > this.value) {
      if (this.right !== null) {
        return this.right.searchTree(target)
        // return `found the right one ${this.right.value}`
      } else {
        return 'Not here on the right'
      }
    }
  }

  numberOfNodes() {
    let nodeCount = 0
    const queue = [this] //create a  queue.
   let currentNode = queue[0]

    while(queue.length > 0) {
      // console.log("Traversing", queue.length)
      if(currentNode.left) {
        queue.push(currentNode.left)
      }
      if(currentNode.right) {
        queue.push(currentNode.right)
      }

      nodeCount += 1
      queue.shift()
      currentNode = queue[0]
    }



    return nodeCount 



  }

  printTree() {
    // you would need to do a breadth first traverse to print all the nodes
    const queue = [this] //create a  queue.
   let currentNode = queue[0]

    while(queue.length > 0) {
      // console.log("Traversing", queue.length)
      if(currentNode.left) {
        queue.push(currentNode.left)
      }
      if(currentNode.right) {
        queue.push(currentNode.right)
      }

      console.log(currentNode.mommy)
      // this.storage.push(currentNode.value)
      queue.shift()
      currentNode = queue[0]
    }



    return queue



  }

  dft_print() {
    const stack = [this]
    let currentNode = null 
    while(stack.length > 0) {

      currentNode = stack.shift()
        // currentNode.mommy ? console.log("cur node", currentNode.value, "mommy: None") : console.log("cur node", currentNode.value, "mommy", currentNode.mommy)
      if(currentNode.left) {
        stack.unshift(currentNode.left)
      }
      if(currentNode.right) {
        stack.unshift(currentNode.right)
      }
    }
  }
}


const t = new Tree(Math.floor(15));
  // for(let i= 0; i<1000; i++ ) {
  //   t.insert(Math.floor(Math.random() * 100))
  // }



t.insert(1)
t.insert(20)
// t.insert(20)
// t.insert(17)
// t.insert(11)
// t.insert(9)
// t.insert(99)
// t.insert(98)
// t.insert(17)
// t.insert(22)
// t.insert(32)
// t.insert(3)
// t.insert(7)
// t.insert(6)
// t.insert(0)
// t.insert(1000)
// t.dft_print()
// t.printTree()
console.log(t["test"])
// console.log("value of current node", t.value,  "right mommy", t.right.mommy.value)
// console.log("Node count", t.numberOfNodes())
// console.log("root", t.value)
// console.log("left", t.left.value)
// console.log("right", t.right.value)
// // console.log('the whole tree', t)
// console.log("size of tree", t.size)
// console.log(t.searchTree(10), 10)
// console.log(t.searchTree(11), 11)
// console.log(t.searchTree(9), 9)
// console.log(t.searchTree(999), 999)
// console.log(t.searchTree(1000), 1000)
// console.log("queue", t.printTree())
