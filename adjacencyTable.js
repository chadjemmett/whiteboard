

function Graph() {
  this.table = {}

  this.insert = function(value){this.table[value] = []}

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
}




const g = new Graph()
g.insert("A")
g.insert("B")
g.insert("C")
g.insert(99)
g.insert("Z")
console.log(g.connect("A", "B"))
console.log(g.connect("A", "Q"))
g.insert("Q")
console.log(g.connect("A", "Q"))
g.connect("Q", "C")
console.log(g.connect("A", "99"))
console.log("same nodes", g.connect("A", "A"))
g.connect("C", "Z")
g.connect("Q", "B")
console.log(g.table) 

