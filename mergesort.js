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
const mergeArrays = (left, right) => {
  return [left, right]
}

const splitArray = (arr) => {
  // check to see if array is length of 1
  if(arr.length === 1) {
    // if it is, return array
    return arr
  }

  // find the middle of the array
  const middle = Math.round(arr.length / 2)
  // const middle = arr[Math.floor(arr.length / 2)]
  const leftSide = arr.slice(0, middle)
  const rightSide = arr.slice(middle, arr.length)
  leftSorted = splitArray(leftSide)
  rightSorted = splitArray(rightSide)

  // console.log("left", leftSide, "right", rightSide)

  return mergeArrays(leftSorted, rightSorted)


}


// [[3], [5], [1], [9], [4]]
//
// [3, 5, 1][9, 4]
// [3, 5][1][9][4]

// [3][5][1][9][4]
//



// compare the left and right.
// check to see if the left and right are the same.
// if the last element in the left array is larger than the first element in the right array. Merge them. Merge right + left 
// if the last element in the left array is smaller than the first element in the right array. Merge them Merge them left + right.
// because those two arrays will already be sorted.
// do this until there

// const splitArray = splitSet(array)
// const newOne = []

console.log(splitArray(array))


