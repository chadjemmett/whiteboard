// Dex Mills <= nice presentation on promises
// promises object that is returne in a function call. Success or fail.
// promise.all goes through an array of promises
// promise.race returns things first come first serve.
// helps undestand the call stack.
//
let thing = new Promise((resolve, reject) => {
  console.log('initial')
    setTimeout(()=> {
      resolve();
      console.log("promise filled")}, 2000)})



async function newThing() {
  console.log('new thing initial')
    setTimeout(() => {
      console.log("new thing promise filled")
    }, 2000)
}

newThing()

  const arrowThing = async () => {

  }

arrowThing()
