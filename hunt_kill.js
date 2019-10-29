
// this is broken. I'm trying to use an array to keep track of a grid. But I really need a 2D array.

 function Node(number){
  this.number = number
  this.north = null
  this.south = null
  this.east = null
  this.west = null
}


// const n = new Node(1)
// console.log(n)
// const directions = [1, -1, 10, -10]
// this creates a 2D array with nodes in it.
let nodeValue = 0
const visited = []
const a = new Array(10)
  for(let i = 0; i< a.length; i++ ) {
    a[i] = new Array(10)
      for(let k = 0; k< a[i].length; k ++) {
        a[i][k] = new Node(nodeValue) 
        nodeValue += 1
      }
  }


north = (arr, curNode) => {



}

console.log(a[0][0])
// outOfBounds = (range, number) => {
//   if(number < 0 || number > range -1) {
//     return true
//   }
//    return false
// }

// canTravel = (range, node, cellArray) => {
//   const nn = node.number
//     if((nn + 1 > range - 1 || nn + -1 < 0 || nn + 10 > range || nn + -10 < 0) && (node.north && node.south && node.east && node.west)) {
//       return false
//     }
//   return true
// }

randomNumber = (range) => {
  return Math.floor(Math.random() * range)
}

// const cells = []
// for(let i = 0; i<100; i++) {
//   cells.push(new Node(i))
// }










// 1. select a random cell.
// const currentCell = a[randomNumber(10)][randomNumber(10)]
// const firstCell = a[0][0]
// 2. add it to the visited list
// 3. pick a cell adacent to current cell. Make sure it is not in the visited list.
// 4.
//
//
//
// console.log(a[1][0])

// visited.push(currentCell)

// console.log(checkForEdge(a, 10, 9))
// console.log(firstCell.number - 10)



