const a = [3, 2, 1, 3]


// const birthdayCandles = (ar) => {
//   const candles = {}
//   for(let i = 0 ; i<ar.length; i++) {
//     if(ar[i] in candles) {
//       candles[ar[i]] += 1
//       console.log(candles)
//     } else {
//       candles[ar[i]] = 1
//     }
//   }
// }

const birthdayCandles = (ar) => {
  let a = [], b = [], prev;
  ar.sort()
  for(let i = 0; i < ar.length; i ++) {
    if(ar[i] !== prev) {
      a.push(ar[i])
      b.push(1)
    } else {
      b[b.length-1]++
    }
    prev = ar[i]

  }
  console.log(a, b)
  return Math.max(b)
}

console.log(birthdayCandles(a))
