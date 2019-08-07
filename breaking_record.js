const scores = [12, 24, 10, 24]
const scores2 = [ 10, 5, 20, 20, 4, 5, 2, 25, 1 ]

// loop through the scores. Keep track of the mimimum and maximum score.
// So 12,  whould be the mimimum and the maxmimum.
// 24 would become the max. This broke the record. So we log one Max record break
// 10 would become the new minimum. Logging one for the record breakign the lowest score.
// 24 would be nieiter greater than the max or less than the min. So this doesn't get tracked.
//
//
 
// index 0 is for the high score. Index 1 is for the low score


// 1. establish a min, max, highScore, lowScore variables. highScore and lowScore should be set to the first element in the array.
// 2. for each element in the array check to see if it is higher than the highScore.
// 3. If it is, update highScore. And increment max.
// 4. If is is lower, then update the lowScore, and inccrement the min.
// 5. return an array with [max, min]
//
//


function breakingRecords(s) {
  let max = 0
  let min = 0
  let highScore = s[0]
  let lowScore = s[0]
  for(let i = 1; i<s.length; i++) {
    if(s[i] > highScore) {
      max += 1
      highScore = s[i]
    }
    if(s[i] < lowScore) {
      min += 1
      lowScore = s[i]
    }
  }





  return [max, min]

}



console.log(breakingRecords(scores))
console.log(breakingRecords(scores2))
