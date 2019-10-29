class DynamicArray {
  constructor(capacity=0) {
    this.capacity = capacity
    this.count = 0
    this.storage = new Array(capacity)
  }

  insert = (index, value) => {
    if(this.count >= this.capacity) {
      return "Array is full"
    }
  }

}


thing = () => {
  return "hello world"

}

// const dA = new DynamicArray(10)

console.log(thing())



  function Pair(key, value) {
    this.key = key
    this.value = value
    this.next = null
  }

const p = new Pair("hello", "world")
console.log(p)
