


const sums = (ar)=> {
  let total = 0;
  for(let i = 1; i< ar.length; i++ ) {
    total += ar[i]
  }
  return total
}



console.log(sums([6, 1, 2, 3, 4, 10, 11]))
