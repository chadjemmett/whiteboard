const array = [ 3, 5, 1, 9, 4  ]

// go through the array.
// holding array = []
// as long as an array > 1
// the base case is the array.length === 1.
// if the array is greater than one.
// then we would pop then end item.
// Put in it's own aray.
// add that to the holding array.
// call the function again. passing in the    


// ??


// [[3], [5], [1], [9], [4]]
//
// [3, 5, 1][9, 4]
// [3, 5][1][9][4]

// [3][5][1][9][4]
//

const splitSet = (arr) => {
  if(arr.length === 1) {
    return arr.flat(3)
  } else {
    // find the middle
    let middle = Math.floor(arr.length / 2)  //<= 2
    // arr[0] to middle
    // call the method on the first half.
    // Then call the metho on the second half. middel to arr.length -1
    //
      // pop into a new array.
      // starting at 0 then going to the middle.
      // then do that again for second only starting adt the middle and going to the end.
      let firstHalf = arr.slice(0, middle) 
      let secondHalf = arr.slice(middle) 
        // for (let i = 0; i< middle; i++) {
        //   firstHalf.push(arr[i])
        // }

        // for (let i = middle; i < arr.length ; i++) {
        //   secondHalf.push(arr[i])
        // }
   return splitSet(firstHalf)
   // return mergeSort(splitSet(firstHalf), splitSet(secondHalf))

  }

}


compare the left and right.
check to see if the left and right are the same.
if the last element in the left array is larger than the first element in the right array. Merge them. Merge right + left 
if the last element in the left array is smaller than the first element in the right array. Merge them Merge them left + right.
because those two arrays will already be sorted.
do this until there

const splitArray = splitSet(array)
const newOne = []

console.log(splitArray)


