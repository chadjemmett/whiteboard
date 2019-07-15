const getCheapestCost = (rootNode) => {
  let currentNode = rootNode
  const visited = []
  const pathValues = []
  const stack = [];
  stack.push(rootNode)
  
  while (stack.length > 0) {
    console.log("The stack", stack)
    if(visited.includes(currentNode) === false) {
      visited.push(currentNode)
    }

    if(currentNode.children.length === 0) {
      console.log("No children")
    }
    else {
      for(let i = 0; i<currentNode.children.length; i++) {
        stack.push(currentNode.children[i])
      }
    }


  }
  // 0. while the stack is not empty, we do this:
  // 1. check the root node. See if it's in the visited list. If not, add it.


  // 2. check to see if the node has children. If there are children. Then add them to teh stack. If there are no children. Then we have to check the value of this path. We have to store it.
  //   2a. if there's chidlren. WE add those to the stack. Then add the current node to it's path.
  //   2b. If there are no children. We add the last node to it's current path. Then take the next item from the stack.
  // 4. Take the next item from the stack.
  //


}



function Node(cost) {
   this.cost = cost;
   this.children = [];
}



const root = new Node(0)
root.children.push(new Node(1))
root.children.push(new Node(2))
// root.children.push(new Node(6))
// root.children[0].children.push(new Node(4))
// root.children[1].children.push(new Node(2))
// root.children[1].children.push(new Node(0))
// root.children[2].children.push(new Node(1))
// root.children[2].children.push(new Node(5))


getCheapestCost(root)




