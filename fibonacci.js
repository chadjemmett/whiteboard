



const fibonacci = ( number ) => {
  let a = 1
  let b = 0
  let temp = 0
  while(number >= 0) {
    temp = a
    a = a + b
    b = temp
    // console.log(b, "is fibonacci number: ", number)
    number --
  }

  return b

}



const fibRecurse = (number) => {
  console.log(number)
  if(number <= 1){
    return 1
  }

  return fibRecurse(number - 1) + fibRecurse(number - 2)


}


const fibMemo = (number, m) => {
  memo = m  || {}
  // console.log(memo)
  if(memo[number]) {
    return memo[number]
  }

  if(number <= 1) {
    return 1
  }

  return memo[number] = fibMemo(number - 1, memo) + fibMemo(number - 2, memo)

}
// console.log(fibonacci(50))
// console.log(fibRecurse(10))
console.log(fibMemo(10))
