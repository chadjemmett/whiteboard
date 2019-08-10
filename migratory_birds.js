
// 0. create a bird hash
// 1. loop through the array.
// 2. Check to see if the number of bird is in the hash.  If not add it with one.
// 3. If it is in the hash, increment by one.
// 4. Loop through the hash. Find the largest value. return that key.
//
//
//
const a = [1, 1, 2, 2, 3]
const b = [1, 4, 4, 4, 5, 3]

const migratoryBirds = (arr) => {
  const birds = {};
  let maxBirds = {bird: 0, number: 0};
  for(let i =0; i<arr.length; i++) {
     birds[arr[i]] ? birds[arr[i]] += 1 : birds[arr[i]] = 1
  }

  for(const key in birds  ) {
    // console.log('bird', birds[key], "Max bird number", `bird: ${key}: number: ${birds[key]}`) ;
    if(birds[key] > maxBirds.number) {
      maxBirds.numer = birds[key]
      maxBirds.bird = key
    }
  }


  return maxBirds.key


}


console.log(migratoryBirds(a))
console.log(migratoryBirds(b))
