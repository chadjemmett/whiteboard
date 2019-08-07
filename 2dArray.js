const n = [
[-9,-9,-9, 1,1,1],
[ 0,-9, 0, 4,3,2],
[-9,-9,-9, 1,2,3],
[0, 0, 8, 6,6,0],
[0, 0, 0,-2,0,0],
[ 0, 0, 1, 2,4,0]
]

const hourGlassSum = (arr) => {
  let highestNumber = 0;
  for(let i = 0; i<arr.length - 1; i++) {
    for(let k = 0; k<arr[i].length; k++) {
      if(k + 2 < arr[k].length) {
        let hourGlassNumber = arr[i][k] + arr[i][k + 1] + arr[i][k + 2] + arr[i + 1][k + 1]// + arr[i + 2][k] + arr[i + 2][k + 1] + arr[i + 2][k + 2]
          console.log("Hourglass number", hourGlassNumber)
          // if(hourGlassNumber > highestNumber) {
          //   highestNumber = hourGlassNumber
          // }
        
        console.log(`[${i}], [${k}]`)
        // let hourGlassNumber = arr[i][i] + arr[i][i + 1] + arr[i][i + 2] + arr[i + 1][i + 1] + arr[i+2][i] + arr[i+2][i + 1][]
        // console.log(arr[0][i] + arr[0][i + 1] + arr[0][i + 2])
        // console.log(arr[0][i], arr[0][i + 1], arr[0][i + 2])
      }
    }
  }
  return highestNumber
}

console.log(hourGlassSum(n))
