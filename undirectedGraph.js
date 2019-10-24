const cardinalDirections = ["east", "west", "north", "south"]
// const rand = cardinalDirections[Math.floor(Math.random() * cardinalDirections.length)]
// console.log("Random", Math.floor(Math.random() * 4))
const opposite = {west: "east", east: "west", south: "north", north: "south"}
// console.log(opposite["east"])

const random = () => {
  let num1 = null
  let num2 = null
  while( num1 === num2 ) {
    num1 = Math.floor(Math.random() * 4)
      console.log('Num 1', num1)
    num2 = Math.floor(Math.random() * 4)
  }
  return [num1, num2]

}

class UndirectedTree {
  constructor(value, mommy=null) {
    // const rando = random()
    // const door1 = rando[0]
    // const door2 = rando[1]

    this.value = value
    this.left = null
    this.right = null
    this.mommy = mommy 
    // this.doors = { [cardinalDirections[door1]]: this.left, [cardidnalDirections[door2]]: this.right}
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

  doorAssignment() {
    const stack = [this]
    let currentNode = null
    let direction1 = null
    let direction2 = null
    let direction3 = null

    while(stack.length > 0) {
      currentNode = stack.shift()
        if(currentNode.left) {
          stack.unshift(currentNode.left)
        }
        if(currentNode.right) {
          stack.unshift(currentNode.right)
        }
    }
  }

  navigate(direction) {
    if(direction === "r\n") {
      if( this.right ) {
        return this.right
      } else {
        return this
      }
    }
  }

  printGraph() {
    const stack = [this]
    let currentNode = null

    while(stack.length > 0) {
      currentNode = stack.shift()
        // we could put all the items in the DB.
        console.log(currentNode.value)
        if(currentNode.left) {
          stack.unshift(currentNode.left)
        }
        if(currentNode.right) {
          stack.unshift(currentNode.right)
        }
    }


  }
}




const t = new UndirectedTree(50)
  for(let i= 0; i<1000; i++ ) {
    t.insert(Math.floor(Math.random() * 100))
  }
// console.log(random())
// t.insert(50)
// t.insert(100)
// t.insert(200)
// t.insert(300)
// t.insert(1)
// t.insert(75)
// console.log(t.right)
t.printGraph()
// t.navigate()
let input = process.stdin
input.setEncoding('utf-8')
console.log("Please input text")
console.log("YOu are at", t.value)
let currentNode = t

input.on('data', data => {


    if( data === "r\n" ) {
      if(currentNode.right) {
        currentNode = currentNode.right
        console.log("You are at: ", currentNode.value)
      } else {
        console.log("Dead end. Can't go that way")
      }
    }

    if( data === "l\n" ) {
      if(currentNode.left) {
        currentNode = currentNode.left
        console.log("You are at: ", currentNode.value)
      } else {
        console.log("Dead end. Can't go that way")
      }
    }

    if( data === "m\n" ) {
      if(currentNode.mommy) {
        currentNode = currentNode.mommy
        console.log("You are at: ", currentNode.value)
      } else {
        console.log("Dead end. Can't go that way")
      }
    }

})
// console.log(t)
