
//s integers startin point of sams house
//t ending point of sams house
//a location of apple tree
//b location of orange tree.
const applesOranges = (s, t, a, b, apples, oranges) => {
  let applesLanding = 0
  let orangesLanding = 0
 // Apples
 //   if the number is greater than A plus the fruit number, then check to see if it is greater than or equal to S.
 //     If it is increment the apple number.
 // Oranges.
 //  if the number is less than or B plus fruit number, then check to see if it's less than or equal to T.
 //    If it is increment the orange number

  for (let i = 0 ; i< apples.length; i++) {
    if(apples[i] + a >= s ) {
      applesLanding += 1
    }
  }
  
  for (let i = 0 ; i< oranges.length; i++) {
    if(oranges[i] + b <= t ) {
      orangesLanding += 1
    }
  }

  console.log("apples", applesLanding)
  console.log("oranges", orangesLanding)

}



console.log(applesOranges(7, 11, 5, 15, [-2, 2, 1], [5, -6]))
