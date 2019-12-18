// pick a pivot. Like the first element.
// then loop through the remaining elements.
// If the element is larger than pivot leave it
// if the element is smaller then swap it toward the beginning.
// when the loop ends, swap the pivot with the small element. that makes everything
//
//

const numbers = [7,5,22,8,0,12,1,3,4,9]

const quickSort = (arr) => {
  let pivot = arr[0]
    for(let i = 1; i<arr.length;i++) {
      if(arr[i] < pivot) {
        console.log("True", arr[i])

      }
    }




  return arr
}


console.log(quickSort(numbers))

