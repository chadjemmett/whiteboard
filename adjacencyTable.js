

function Graph() {
  this.table = {}

  this.insert = (value) => {
    if(!this.table[value]){
      this.table[value] = []
    }
    return null
  }

  this.connect = function(node1, node2){
    // check to see if the nodes exist
    if(node1 === node2) {
      return null
    }


    if(this.table.hasOwnProperty(node1) && this.table.hasOwnProperty(node2)) {
      if(!this.table[node1].includes(node2)) {
        this.table[node1].push(node2)
      }
      if(!this.table[node2].includes(node1)) {
        this.table[node2].push(node1)
      } 
    }
  }

  this.dftRecursive = (startingNode) => {}

  this.dft = (startingNode) => {
    if(!this.table.hasOwnProperty(startingNode)) {
      return "No node found"
    }
    const stack = [startingNode]
    const visited = []
    const longest = []
    let curNode = stack[stack.length - 1]

    while(stack.length > 0) {
      console.log("s", stack)
      visited.push(curNode)
      stack.pop()
      if(this.table[curNode].length > 0) {
        for(let i = 0; i<this.table[curNode].length; i++) {
          if(!stack.includes(this.table[curNode][i]) && !visited.includes(this.table[curNode][i])) {
            // add the node to teh queue
            stack.push(this.table[curNode][i])
          }
        }
      }
      curNode = stack[stack.length - 1]
    }
    return visited
  }

  this.bft = (nodeValue) => {
    // first check to see if node exists
    if(!this.table.hasOwnProperty(nodeValue)) {
      return "No node found"
    }
    // create a queue that has the first value in it
    const queue = [nodeValue]
    // create a visited list
    const visited = []
    // set the current node to the first thing in the queue
    let curNode = queue[0]
    // Start a loop
    while(queue.length > 0) {
      // if the current node has children, then go to the next step
      if(this.table[curNode].length > 0) {
        // loop through the children of teh current nodes
        for(let i = 0; i<this.table[curNode].length; i++) {
          // if they are NOT in the visited or the queue, add them to the queue
          if(!queue.includes(this.table[curNode][i]) && !visited.includes(this.table[curNode][i])) {
            // add the node to teh queue
            queue.push(this.table[curNode][i])
          }
        }
      }
      // add the current node to the queue
      visited.push(curNode)
      // drop the current node from the queue
      queue.shift()
      // set the current node to the next item in the queue
      curNode = queue[0]
    }
    return visited
  }
}



const g = new Graph()
g.insert("A")
g.insert("B")
g.insert("C")
g.insert("D")
g.insert("E")
g.insert("F")
g.insert("G")
g.insert("H")
g.insert("I")
g.insert("J")
g.insert("K")
g.connect("A", "C")
g.connect("A", "B")
g.connect("C", "B")
g.connect("H", "B")
g.connect("C", "D")
g.connect("F", "D")
g.connect("E", "D")
g.connect("E", "F")
g.connect("F", "K")
g.connect("B", "I")
g.connect("J", "I")
g.connect("J", "K")

// console.log(g.bft("G"))
// console.log(g.bft("A"))
console.log("DFT", g.dft("A"))
