
const a = [1 ,2 ,3 ,4 ,5]

const miniMaxSum = (arr) => {
  let total = 0;
  let highestNumber = 0;
  let lowestNumber = 0;
  for(let i = 0; i<arr.length;i++) {
    total += arr[i]

  }

  lowestNumber = total

  for(let i = 0; i<arr.length; i++) {
    if (total - arr[i] > highestNumber) {
      highestNumber = total - arr[i]
    }
    if(total - arr[i] < lowestNumber) {
      lowestNumber = total - arr[i]
    }
  }

  console.log(highestNumber, lowestNumber)



}

console.log(miniMaxSum(a))

// 1. get the total of the array. Loop through it to find the toatal. Or Reduce it.
//  1a. Set the low, to the total.
//  1b. set the high to zero.

// 2. loop through the array.
// 3. Subtract each element in the array from the total. 
// 4. For the high, if the difference is greater than the hi. Change high to the new number. In this case the high should be 14.
// 5. For the low, the low has to be set to the first number. 
// 6. Then we check the numbers. If the number is higher than the hi. Change the high to the new number.
//  If it's lower than the low. Change it to the new number.
//  return the hig and low numbers.

 
