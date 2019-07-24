
const a = [-4, 3, -9, 0, 4, 1]
function plusMinus(arr) {
  let pos = 0
  let neg = 0
  let zero = 0
  for(let i = 0; i<arr.length; i++) {
    if(arr[i] > 0) {
      pos += 1
    } else if ( arr[i] < 0 ) {
      neg += 1
    } else {
      zero += 1
    }
  }
    return [pos / arr.length, neg / arr.length, zero / arr.length]
}


console.log(plusMinus(a))
