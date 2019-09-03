const words = "the quick brown fox jumped aaaaaa over the lazy dog."


const longestWord = (sen) => {
  const sentence = sen.split(' ')
  let longest = ""
  let longestCount = 0
  for(let i = 0; i<sentence.length; i++) {
    if(sentence[i].length > longestCount) {
      longest = sentence[i]
      longestCount = sentence[i].length
    }
  }

  return longest

}


console.log(longestWord(words))
