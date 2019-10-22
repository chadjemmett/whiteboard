const cardinalDirections = ["east", "west", "north", "south"]
const opposite = {west: "east", east: "west", south: "north", north: "south"}
console.log(opposite["east"])


class UndirectedTree {
  constructor(value, mommy=null) {
    this.value = value
    this.left = null
    this.right = null
    this.mommy = mommy 
  }

  insert(value) {
    if(value < this.value) {
      if(this.left === null) {
        this.left = new UndirectedTree(value, this)
      } else {
        this.left.insert(value)
      }
    } else {
      if (this.right === null) {
        this.right = new UndirectedTree(value, this)
      } else {
        this.right.insert(value)
      }
    }

  }
}


const t = new UndirectedTree("n")
t.insert("a")
t.insert("z")

console.log(t)
