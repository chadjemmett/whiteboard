

mapToIndex = (index) => {
  const x = Math.floor(index / 3)
  const y = index % 3
  return [x, y]
}
// console.log(mapToIndex(10))

for(let i = 0; i<9; i++) {
  console.log("i: ", i, "x/y", mapToIndex(i))
}
