// Dex Mills <= nice presentation on promises
// promises object that is returne in a function call. Success or fail.
// promise.all goes through an array of promises
// promise.race returns things first come first serve.
// helps undestand the call stack.
//
// let thing = new Promise((resolve, reject) => {
//   console.log('initial thing promise')
//     setTimeout(()=> {
//       resolve();
//       console.log(" from teh thing promise filled")}, 2000)})



//  async const newThing = () => {
//   console.log('new thing initial')
//     setTimeout(() => {
//       console.log("new thing promise filled")
//     }, 2000)
// }

// async function newThing() {
// }

// newThing()

//   const arrowThing = async () => {

//   }

// arrowThing()
//


new Promise((resolve, reject) => {
  console.log("initial")
  resolve()

})
.then(() => {
  throw new Error("Something failed")
  console.log("Do this")
})
.catch(()=> {
  console.log("do that")

})
.then(() => {
  console.log("Do this no matter what happens before")
})


