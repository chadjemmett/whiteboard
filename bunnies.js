bunnieEars = (bunnies)  => {
  if (bunnies === 0) {
    return 0
  }
  console.log(bunnies)
  return 2 + bunnieEars(bunnies - 1)
}


console.log(bunnieEars(10))

