const h = [ 1, 2, 3, 3, 2 ]
const jumpHeight = 1


// 1. set up a highest hurdler varibale set to 0
// 2. loop through the hurdle array.
// 3. Check each element in the array. If the number is greater than the jump height, store it in the highest hurdle.
// 4. At the end, return the highest hurdle minus the jump height2. loop through the hurdle array.
// 3. Check each element in the array. If the number is greater than the jump height, store it in the highest hurdle.
// 4. At the end, return the highest hurdle minus the jump height



function hurdleRace(height, hurdles) {
  let maxHurdle = 0;
  for(let i = 0; i< hurdles.length; i++) {
    if(hurdles[i] > maxHurdle && hurdles[i] > height) {
      maxHurdle = hurdles[i]
      // console.log("max hurdle", maxHurdle)
    }
  }

  if(maxHurdle > 0) {
    return maxHurdle - height
  } else {
    return 0
  }


}



console.log(hurdleRace(jumpHeight, h))
console.log(hurdleRace(4, [1, 6, 3, 5, 2]))
console.log(hurdleRace(7, [2, 5, 4, 5, 2]))
