

const catAndMouse = (x, y, z) => {
  const catA = Math.abs(x - z)
  const catB = Math.abs(y - z)
  if(catA === catB) {
    return "Mouse C"
  }

  if(catA < catB) {
    return "Cat A"
  } else {
    return "Cat B"
  }
}


console.log(catAndMouse(1, 2, 3))
console.log(catAndMouse(1, 3, 2))


// 1. set up two variables. Cat a and cat b.
// 2. These two variables are set to Cat a which equals the absolute value of x - z
// 2a. Cat B is set to the absoute value of y - z
// 3. Check if they are equal. If they are equal return Mouse C
// 4. If Cat A is smaller, return Cat A.
// 5. Othrwise return Cat B.
