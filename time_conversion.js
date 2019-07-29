
const time = "07:05:45PM"
const noon = "12:05:20PM"
const midnight = "12:05:20AM"
function timeConvert(s) {
  // const newString = s.substring(2, s.length - 2)
  let newString;
  let hour = s.substring(0, 2)
  const ampm = s.substring(s.length - 2, s.length)

  if(ampm === "AM") {
    if(hour === 12) {
      return "00" + s.substring(2, s.length - 2)
    } else {
      return hour + s.substring(2, s.length - 2)
    }
  } else {
    if(hour === 12) {
      return hour + s.substring(2, s.length - 2)
    } else {
      return hour + s.substring(2, s.length - 2)

    }

  }

  // if (hour === 12 && ampm === "AM") {
  //         return "00" + s.substring(2, s.length - 2)

  //     } else if (hour === 12 && ampm === "PM") {
  //         return hour + s.substring(2, s.length - 2)
  //     } else {
  //         hour = (hour + 12).toString()
  //         return hour + s.substring(2, s.length - 2)
  //     }


  }


console.log(timeConvert(time))
console.log(timeConvert(noon))
console.log(timeConvert(midnight))
console.log(timeConvert("06:40:03AM"))
console.log(timeConvert("11:40:03AM"))
