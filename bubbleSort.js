const a = [4, 7, 1, 99, 20, 100, 0]


const bubbleSort = (arr) => {
  let swapped = true
  while(swapped) {
    swapped = false
    // console.log("sorted array ", arr)
    console.log(arr)
    for(let i = 0; i<arr.length - 1; i++) {
      if(arr[i] > arr[i+1]) {
        let temp = arr[i]
        arr[i] = arr[i + 1]
        arr[i + 1] = temp
        swapped = true
      }
    }
  }
  return arr
}

console.log(bubbleSort(a))



// 1. set a sortring var to true. set a pointer to 0
// 2. go through the while loop  as long as sorting is true
// 3. take arr[0] and arr[1].
// 4. If arr[0] is larger. Swap places. Set sorting to true
// check to see if you are at the end. Check to see if pointer is at the length of the array minus 1
// if we are at the end and sorting is false. Then break the loop. return the array.
// 5. Go to arr[1] and get arr[2] 
 
