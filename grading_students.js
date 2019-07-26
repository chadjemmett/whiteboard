
const g =[73, 67, 38, 33]
function gradingStudents(grades) {
  for ( let i = 0; i<grades.length;i++ ) {
    // 1. find the next closet 5.
    let nearestFive= Math.ceil(grades[i]/5)*5
    // 2. check to see if there is a difference of less than 3 between number and nearest five
    if(nearestFive > 38) {
      if(nearestFive - grades[i] < 3) {
        console.log(nearestFive)
      } else {
        console.log(grades[i] )
      }

    } else {
      console.log(grades[i]) 
    }




  }


  return grades


}

gradingStudents(g)

