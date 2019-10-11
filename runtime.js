// let a = 0
// const n = 50

// while(a < n * n * n) {
//   a = a + n * n
//   // console.log(a)
// }


// console.log(n * n * n, n * n, (n * n * n)/ (n * n)) 


let sum = 0
let n = 100 
for( let i=0;i<n; i++  ) {
  let j = 1
    while(j < n) {
      console.log("j", j, "sum", sum)
      j *= 2
      sum += 1
    }
}
