
const a = [-4, 3, -9, 0, 4, 1]
function plusMinus(arr) {
  let pos = 0
  let neg = 0
  let zero = 0
  let numString = ""
  for(let i = 0; i<arr.length; i++) {
    if(arr[i] > 0) {
      pos += 1
    } else if ( arr[i] < 0 ) {
      neg += 1
    } else {
      zero += 1
    }
  }
  
  numString += (pos / arr.length).toFixed(6) + "\n"
  numString += (neg / arr.length).toFixed(6) + "\n"
  numString += (zero / arr.length).toFixed(6) + "\n"

  return numString
}


console.log(plusMinus(a))
