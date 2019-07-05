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
    this.path = []
    this.paths = []
    this.board = new MakeBoard(size)
    this.x = 0
    this.y = 0
  }


  search() {

  }
}

const r = new Robot(3)

r.search()


// function makeBoard(n) {
//   let board = [];
//   for (let i = 0; i < n; i++) {
//     board.push([]);
//     for (let j = 0; j < n; j++) {
//       board[i].push(false);
//     }
//   }
//   board.toggle = (i, j) => {
//     board[i][j] = !board[i][j];
//   };
//   board.hasBeenVisited = (i, j) => {
//     return board[i][j];
//   };
//   return board;
// }



// store visited squares in a hash
//
// const b = new MakeBoard(3)
//   b.toggle(1, 2)
// console.log(b.hasBeenVisited(1, 2)) // 1. the robot goes through an iteration.
//   b.toggle(1, 2)
// console.log(b.hasBeenVisited(1, 2)) // 1. the robot goes through an iteration.
// console.log(b.board)
// 2. That iteeration goes in an array or something.
// 3. Clear the board after the iteration.
// 4. The robot does another iteration. It checks to see if the iteration is in the array or something.
// 5. It keeps trying as long as there are no iterations left.
// 6. In order to avoid going through the whole matrix dozends of times. We can check from ONE. Because the first square will either be the left or down square.
//
//
//
//
//
// We know that the start and end are always the same.
// We add that to the matrix. labeling them.
// we do a search. Then add that path to the array. We have to check 

// 1. need a stack.
// 2. check the square the robot is on.
// 3. Is it visited or is it S or E? If yes. then go to the next item in the stack.
// 3. If it's E then put the path we've figured out into the array.

  const robotPaths = (dimensions) => {


  }
