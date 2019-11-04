


const a = [["a", "a", "b","b", "a"],
["a", "a", "b", "b", "a"], ["a", "a", "a", "c", "b"]]


const dir = [1, -1]

const coordinates = []
// that's assuming there's a 2D array
const q = [[0, 0]]
const visited = []
// let curValue = a[0][0]
// let curNode = null 
// console.log(curValue, curNode)

  // console.log(a[0 + 1][0 - 1])

  // for(let i = 0; i< 7; i++) {
  //   // console.log(a[])
  // }

checkAdjacent = (coordinates, arr) => {
  const adjacent = []
  // coordinates is an arr [0, 1].
  const x = coordinates[1]
  const y = coordinates[0]
  if(y > arr.length - 1 || y < 0) {
    return false
  } else if( x > arr[y].length  || x < 0) {
    return false
  }

  return true
}

for(let y = 0 ; y<a.length; y++) {
  for(let x = 0; x<a[y].length; x++) {
    if(checkAdjacent([y, x], a) && a[y][x] === "a") {
      console.log(a[y][x])
    }
  }
}

console.log(checkAdjacent([0, 0], a))
  while(q.length > 0) {


  }




// while(q.length > 0) {
//   let curCell = q[0]
//   console.log(q)


// }


// const u = undefined
// console.log(u ? "It's here" : "not here")

// if(a[5] && a[0-1][5]) {
//   console.log("something")
// } else {
//   console.log("nothing")
// }
// console.log( a[0][0] ? a[1][5] : "nothign there" )

// console.log(checkAdjacent([0,0], a))
// while(q.length > 0) {
  //   curNode = q.unshift()




  // }
// visited.includes(curNode) ? null : visited.push(curNode)


/*
 * 1. get the value of the first cell
 * 2. add the first cell to the visited list.
 * 3. chedk the next cell.
 */


// for(let i = 0; i<a.length; i++) {
//   for(let k = 0; k<a[i].length; k ++) {
//     coordinates.includes([i, k]) ? null : coordinates.push([i, k])
//   }
// }
