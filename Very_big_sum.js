
const veryBigSum = (arr) => {
  let total = 0
  for(let i = 0; i<arr.length; i++ ) {
    total += arr[i]
  }

  return total
}

const nums = [1000000001, 1000000002, 1000000003, 1000000004, 1000000005]



console.log(veryBigSum(nums))
