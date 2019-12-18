const numbers = [4, 3, 8, 2, 5, 0]
const things = [22, 8, 6, 10, 12, 16, 3, 99, 0, 1, 50]
// console.log("Array", numbers)
const selectionSort = (ar) => {
  // set a variable to be lowest
  let lowest;
  // loop through the array from i to the lenght of the array
  for(let i = 0; i<ar.length; i++) {
    // set lowest to i
    lowest = i;
    // loop through the array from i to the end of the array
    for(let k = i; k<ar.length; k++) {
      // k is set to i. This eliminates the sorted part of the array
      // check to see if the k element is less than the lowest element.
      if(ar[lowest] > ar[k]) {
        // if it is, set lowest to k
        lowest = k
      }
      console.log("lowest", ar[lowest], "current", ar[i])
    }
    // swap the elements
      let temp = ar[i]
      ar[i] = ar[lowest]
      ar[lowest] = temp
  }
  // return the array
  return ar
}

console.log(selectionSort(numbers))
// console.log(selectionSort(things))
