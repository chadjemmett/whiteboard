// interview practice
//


// two strings as inputs.
//
// A = larger string
// B = smaller string 
// How many times the smaller string appears in the largers string.
//
// hello world
// or
// 1
//
//

// loop through the big string.
// check to see where there's a match.
// Go through and check each character.
// check each character from i to i + length of the small string.
// so do a loop from i to the lenght of the small string.
// have a temp string.
// increment the temp string to become the small string, if that's the case. If it is. Increment the string count by one.
// Reset teh temp string.
// 
//

const stringCheck = (strBig, strSmall) => {
  let count = 0
  const bigStrLen = strBig.length
  const smallStrLen = strSmall.length
  let tempString = ""


  for(let i=0; i<bigStrLen - smallStrLen + 1; i++ ) {
    if (strBig[i] === strSmall[0]) {
      tempString = strBig.slice(i, i + strSmall.length)
        if (tempString === strSmall) {
          count += 1
          tempString = ""
        } else {
          tempString = ""
        }
    }
    // console.log(strBig.slice(i, i + strSmall.length))

    }
  return count

}


console.log(stringCheck("hello world", "or")) // <= 1
console.log(stringCheck("momomomomomomomomomo", "mo")) // <= 10
console.log(stringCheck("hello world", "mo")) // <= 0




// loop through the big string.
//   check each char for the first char of the small string.
//
  // let tempString = ""
  // for(let i = 0; i<strBig.length; i++) {
  //   if(strBig[i] === strSmall[0]) {
  //     for(let k = 0; k< strSmall.length; k++) {
  //       tempString += strSmall[k]
  //     }




S ituation

T ask

A ction

R esults


