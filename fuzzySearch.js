

fuzzySearch = (pattern, str) => {
  let match = 0
  let stringCopy = ""
  let tempString  = ""
  const vowels = ["a", "e", "i", "o", "u", "y"]
  for(let i = 0; i<str.length;i++) {
    if(vowels.includes(str[i].toLowerCase())) {
      stringCopy += "0"
    } else {
      stringCopy += "1"
    }
  }


  for(let i = 0; i<str.length; i++) {
    for(let k = i; k< i + pattern.length; k ++) {
      tempString += stringCopy[k]
    }
    if(tempString === pattern) {
      // console.log("tempstring", tempString, "pattern", pattern)
      match += 1
    }
    // console.log(tempString)
    tempString = ""
  }
  return match
}


console.log(fuzzySearch("010", "amazing"))
console.log(fuzzySearch("010", "ama"))
console.log(fuzzySearch("11", "bbbbbbbbb"))
console.log(fuzzySearch("00", "bbbbbbbbb"))
console.log(fuzzySearch("000", "aaaaaaaaa"))
console.log(fuzzySearch("111", "aaaaaaaaa"))

