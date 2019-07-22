
// The first number in the array is the number of rows and columns
//
//
const a = [[11, 2 , 4], [4, 5, 6], [10, 8, -12]]
  const diagonalDiff = (ar) => {
  let ltor = 0
  let rtol = 0
  let k = ar.length - 1;
    for(let i = 0; i < ar.length; i ++ ) {

      ltor += ar[i][i];
      rtol += ar[i][k]
      k --;

    }


  // console.log("left to right", ltor)
  // console.log("right to left", rtol)
  return rtol - ltor;





}

console.log(diagonalDiff(a))


