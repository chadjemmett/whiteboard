const compareTriplets = (arr1, arr2) => {
  let userScore1 = 0
  let userScore2 = 0
  for (let i = 0; i<arr1.length; i++) {
    if(arr1[i] > arr2[i]) {
      userScore1 += 1
    } else if (arr1[i] < arr2[i]){
      userScore2 += 1
    }
  }
  return [userScore1, userScore2]
}


console.log("input [17, 28, 30], [99, 16, 8]", compareTriplets([17, 28, 30], [99, 16, 8]))
console.log("input [5, 6, 7], [3, 6, 10]", compareTriplets([5, 6, 7], [3, 6, 10]))
