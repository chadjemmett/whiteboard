

function staircase(n) {
  let stairs = ""
  for(let i = 0; i<n * n; i++) {
    stairs += "."

  }


  return stairs;


}

console.log(staircase(6))
// console.log(new Array(6).join(".") + new Array(1).join("#"))
//
// let s = ""
// for(let i = 0; i<5; i++) {
//   s += "."


// }
// console.log("empty string", s)
// s += "."
// s += "."
// console.log("s", s)
// s += "."
