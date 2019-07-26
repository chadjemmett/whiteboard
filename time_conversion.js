
const time = "07:05:45PM"
const noon = "12:05:20PM"
const midnight = "12:05:20AM"
function timeConvert(s) {
  // const newString = s.substring(2, s.length - 2)
  let newString;
  let hour = parseInt(s.substring(0, 2))
  const ampm = s.substring(s.length - 2, s.length)




}


console.log(timeConvert(time))
console.log(timeConvert(noon))
console.log(timeConvert(midnight))
