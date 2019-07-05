
const oddCount = (n) => {
  const numbers = []
  for(let i = n - 1; i>0; i--) {
    if(i % 2 === 1) {
      numbers.push(i)
      console.log(i)
    }


  }
  return numbers.length


}

console.log(oddCount(15))
