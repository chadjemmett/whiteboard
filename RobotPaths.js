class MakeBoard {
  constructor(sizeN) {
    this.board = []
      for(let i = 0; i < sizeN; i++) {
        this.board.push([])
          for(let k = 0; k< sizeN; k++) {
            this.board[i].push(false)
          }
      }
    this.board[sizeN - 1][sizeN - 1] = "E"
    this.board[0][0] = "S"
  }

  toggle(y, x) {
    this.board[y][x] = !this.board[y][x]
  }

  hasBeenVisited(y, x) {
    return this.board[y][x]
  }

}


class Robot {
  constructor(size) {
    this.stack = []
    this.visited = []
    this.paths = []
    this.board = new MakeBoard(size)
    this.location = {y: 0, x: 0}
  }


  search() {
    this.stack.push([this.y, this.x])
    while(this.board.hasBeenVisited(this.stack[0].y, this.stack[0].x) != "E") {
      // console.log("searching")
      if(this.board.hasBeenVisited(this.location.y, this.location.x) === "E") {
        return this.visited
      } else {
        this.visited.push({x: this.location.x, y: this.location.y})
        this.stack.push({})
      }

      this.stack.shift()

    }
    return this.visited
    // 1. check the current node? Is it E?
    // 2. if it's not, add it to the visted array
    // 3. Look at the spaces next to the current array.
    // 4. Add them to the stack.



  }
}

const r = new Robot(3)

console.log(r.search())

