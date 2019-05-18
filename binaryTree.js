

class Tree {
  constructor (value) {
    this.value = value
    this.left = null
    this.right = null
  }

  insert(value) {
    // check the value vs the current value
    if (value < this.value) {
      // if smaller go left
      // If there's nothing there then add it
      if (this.left === null) {
        this.left = new Tree(value)
      } else {
        // otherwise recursively insert the value
        // So it goes deeper in the tree
        this.left.insert(value)
      }
    } else {
      // if the value is larger it goes right
      // Repeat the same as above.
      if (this.right == null) {
        this.right = new Tree(value)
      } else {
        this.right.insert(value)
      }
    }
  }

  searchTree(target) {
    // the search checks the root value to see if it matches.
    if (target === this.value) {
      return this.value
    }

    return "not found"
  }
}


const t = new Tree(10)
t.insert(1)
t.insert(4)
t.insert(5)
t.insert(20)
t.insert(11)
t.insert(9)
t.insert(99)
t.insert(98)
t.insert(3)
t.insert(7)
t.insert(6)
t.insert(0)
t.insert(1000)
// console.log('the whole tree', t)
console.log("search result: ", t.searchTree(10))
console.log("search result: ", t.searchTree(100))

