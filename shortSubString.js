const str = "dabbcabcd"
const allChar = ["a", "b", "c", "d"]
const tempArr =[]

let index = 0
let searching = true

  /* 1. add the first char to the temp array
   * 2. loop through the allChar array. Check to see if all of the items are in the temp arr. If we get a single false, 
   * 3. increment the index. Then set serching to true.
   * 4. If we get all true. Then switch searching to false *
   */
for(let i=0;i<allChar.length; i++) {
  console.log(allChar[i] === str[index])
}






console.log(tempArr)
