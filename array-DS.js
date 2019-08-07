
const ar = [1, 4, 3, 2]
function reverseArray(a) {
  let numbers = ""
  for(let i = a.length - 1; i>=0; i--) {
    // console.log("index", i, "item", a[i])
    numbers += a[i] + " "
  }


  console.log(numbers)
  return numbers
}

console.log(reverseArray(ar))
