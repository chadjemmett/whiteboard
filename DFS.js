
const dfSearch = (rootNode, target) => {
  const visited = [];
  const stack = [];

  while (stack.length > 0) {

  }


 return false

}




function Node(cost) {
   this.value= cost;
   this.right = null
   this.left = null
}


const root = new Node(10)
root.right = new Node(9)
root.left = new Node(20)
root.right.right = new Node(5)
root.right.left = new Node(11)
root.left.right = new Node(15)
root.left.left = new Node(25)
root.left.left.left = new Node(0)

console.log(dfSearch(root, 9))




