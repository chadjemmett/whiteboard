
const arr = [1,2,1,3,2]
const day = 3
const month = 2

const birthday = (s, d, m) => {
  let subArray = 0;
  let total = 0
  for(let i = 0; i<s.length;i++) {
    console.log(i + m)
    // if(i + m - i < s.length) {
    //   for(let k = i;k< i + m - i; k++ ) {
    //     total += s[k]
    //     console.log(total)
    //       if(total === d) {
    //         subArray += 1
    //       }
    //   }
    // }
    // console.log("i + m - i", i + m - i, "i + m - i < s.length", i + m - i < s.length)
  }
  return subArray
}

console.log(birthday(arr, day, month)) 



// we want a sub array where the length equals m. and the total inside the array equals d

// starting with 0
// 0 is 1.
// We count forward m
// We add all the elements in the m range.
// If they equal day. Then we count up one.


// start the function with a variable called subArray
// start looping through the array.
// take the first element.
// Count forward m where m includes i. If that number is less than the lenght of the array. Then start another loop. 
// that gives us 1 & 2. Add those together.
// We see that both criteria are satisfied. So we incrment subArray by one.
// Go to element to
// Count forward by m
// That gives us 1 & 2
// We have to start another loop.
// from i to m.
// We add those up. Store the total in a variable.


// subArray = 0
// for loop that goes through the whole loop.
// for loop that goes from i to i + m.
// if i + m is less than the lenght of the array... then accumulate the numbers at the index between i and i  + m.
// if they equal d. Incrment subArray.
// if they don't, move on to the next element in the outer array.


