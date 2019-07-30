
const m = ["give", "me", "one", "grand", "today", "night"]
const n = ["give", "one", "grand", "today"]
const checkMagazine = (magazine, note) => {
  // loop through the note.
    // check each one against the name in the magazine array O(n^2)
    // If the word appears in the magazine, check for lowercase/uppercase
    //o
      let counter = 0
      const words = []
      for(let i = 0; i< note.length; i++) {
        for(let k = 0; k< magazine.length; k++) {
          if(note[i] === magazine[k]) {
            console.log("mag words", magazine[k])
            words.push(magazine[k])
          }
        }
      }
      console.log(words)

    if( note.sort() === words.sort()) {
      return "YES"
    } else {
      return "NO"
    }

}



console.log(checkMagazine(m, n))


  // loop through both arrays.
  // Check each note against the magazine words.
  // Keep looping if 
  //
  console.log("Apple" === "apple")
