 const a = [ 1, 2, 3, 4, 5 ]
const leftRotate = (arr, d) => {
  const newArray = new Array(arr.length).fill(null)
    for(let i = 0; i<arr.length;i++) {
      if(i - d < 0) {
        newArray[arr.length - Math.abs(i - d)] = arr[i]
      } else {
        newArray[i - d] = arr[i]
      }
    }

 return newArray
}

console.log(leftRotate(a, 4))
console.log(leftRotate(a, 2))


  const leftRotateOpt = (arr, d) => {




  }

  // 1. create a new array the length of the incoming array.
  // 2. loop through each number in the passed in array. Subtract the number of rotattions. to find the new spot in the array.
  // 3. If the number is less than zero. Go to the absolute value of those.


