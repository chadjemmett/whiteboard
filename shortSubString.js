const str = "dabbcabcd"
const allChar = ["a", "b", "c", "d"]
let tempArr =[]


  /* 1. add the first char to the temp array
   * 2. loop through the allChar array. Check to see if all of the items are in the temp arr. If we get a single false, 
   * 3. increment the index. Then set serching to true.
   * 4. If we get all true. Then switch searching to false *
   */
let totalTrue = 0

for(let i = 0; i<str.length - 1; i++) {
  for(let k = i; k<str.length; k++) {
    tempArr.push(str[k])
      for(let q = 0; q<allChar.length; q++) {
        console.log("arr", tempArr, tempArr.includes(allChar[q]))
      }
    // console.log(tempArr)
  }

  tempArr = []


}


// let newMap = new Map()
// for(let i = 0; i<str.length; i++) {
//   if(newMap.has(str[i])) {
//     newMap.set(str[i], (newMap.get(str[i])+ 1))
//   } else {
//     newMap.set(str[i], 1)
//   }
// }

// console.log(newMap)
