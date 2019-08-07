a = [ 10, 12, 11, 15 ]


const findMissing = (arr) => {
  const hash = {}

  for(let i = 0; i<arr.length; i++) {
    if()
    if(hash.hasOwnProperty(arr[i])) {
      hash[arr[i]] += 1
    } else {
      hash[arr[i]] = 1
    }
  }



  return hash
}


console.log(findMissing(a))
