
// hash function
//
//
//
//
function Pair(key, value) {
  this.key = key
  this.value = value
  this.next = null
}


hashFunction = (string, length) => {
  let valueTotal = 0
    for(let i = 0; i<string.length; i++) {
      console.log(string.charCodeAt(i))
      valueTotal += string.charCodeAt(i)
    }
  return valueTotal % length
}




class HashTable {
  constructor(capacity) {
    this.capacity = capacity
    this.size = 0
    this.storage = new Array(capacity)
  }

  hashFunc = (key) => {
    let valueTotal = 0
      for(let i = 0; i<key.length; i++) {
        // console.log(key.charCodeAt(i))
        valueTotal += key.charCodeAt(i)
      }
    return valueTotal % this.capacity
  }

  insert = (key, value) => {
    let index = this.hashFunc(key)
      if(this.storage[index]) {
        let curNode = this.storage[index]
          while(curNode.next) {
            curNode = curNode.next
          }
        curNode.next = new Pair(key, value)
      }
    this.storage[index] = new Pair(key, value)

    // first we hash the key.
    // first we check to see if the index is in the array
  }

  retrieve = (key) => {

    const index = this.hashFunc(key)
      if(this.storage[index]) {
        return this.storage[index]
      }
      return "nothing here"
  }

  remove = (key) => {
    const index = this.hashFunc(key)
      if(this.storage[index]) {
        this.storage[index] = null
        return "Removed 1 item"
      }
     return "nothing there"
  }

  resize = () => {
    const oldStorage = this.storage
    this.capacity = this.capacity * 2
    this.storage = new Array(capacity)
    let curNode = null

    for(let i = 0; i<oldStorage.length; i++) {


    }
  }
}


const h = new HashTable(10)
// console.log(h)
h.insert("a", "0")
h.insert("b", "1")
h.insert("a", "2")
console.log("retrieve", h.retrieve("a"))
// h.insert("a", "3")
// h.insert("a", "4")
// h.insert("a", "5")
// h.insert("a", "6")
// h.insert("a", "8")
// h.insert("a", "9")
let node = h.storage[1]
console.log(node)
// console.log("storage", h.storage, "length", h.storage.length)
// console.log("the node at 0", node) 
// while(node) {
//   console.log(node.value)
//   node = node.next
// }
// h.insert("b", "world")
// h.insert("c", "foobar")
// h.insert("supercalifragilisticexpialidocious")

// console.log(h.retrieve("a"))
// console.log(h.retrieve("x"))
// console.log(h.remove("b"))
// console.log(h.retrieve("b"))
// console.log(h.remove("b")) // console.log( h.storage[0] ? "something here" : "Nuttin!")
// console.log(h.resize())
// h.insert("Chad")
// h.insert("things")
// h.insert("what hat")
