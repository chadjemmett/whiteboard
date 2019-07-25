const a = [3, 2, 1, 3]


const birthdayCandles = (ar) => {
  const candles = {}
  for(let i = 0 ; i<ar.length; i++) {
    if(ar[i] in candles) {
      candles[ar[i]] += 1
      console.log(candles)
    } else {
      candles[ar[i]] = 1
    }
  }
}


console.log(birthdayCandles(a))
