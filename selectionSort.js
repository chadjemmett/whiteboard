const numbers = [4, 3, 8, 2, 5, 0]
const things = [22, 8, 6, 10, 12, 16, 3, 99, 0, 1, 50]
console.log("Array", numbers)
const selectionSort = (ar) => {
  let lowest;
  for(let i = 0; i<ar.length; i++) {
    lowest = i;
    for(let k = i; k<ar.length; k++) {
      if(ar[lowest] > ar[k]) {
        lowest = k
      }
    }
      let temp = ar[i]
      ar[i] = ar[lowest]
      ar[lowest] = temp
  }
  return ar
}

console.log(selectionSort(numbers))
console.log(selectionSort(things))
