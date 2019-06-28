// node {name: "A", }
// node {name: "A", connections: ['b', 'c'] }

class Graph {
  constructor() {
    this.nodes = {}
  }

  addNodes(node) {
    this.nodes[node] = []
  }

  addEdges(fromNode, toNode, distance) {
    this.nodes[fromNode].push(toNode)
    this.nodes[toNode].push(fromNode)
  }


}


const d = new Graph
d.addNodes("a")
d.addNodes("b")
d.addNodes("c")
d.addNodes("d")
d.addNodes("e")
d.addNodes("f")
d.addNodes("g")
d.addNodes("h")

d.addEdges("a", "b")
d.addEdges("b", "c")
d.addEdges("b", "d")
d.addEdges("d", "h")
d.addEdges("d", "e")
d.addEdges("d", "f")
d.addEdges("f", "g")
d.addEdges("e", "g")
console.log(d)
