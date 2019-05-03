
class BufferRing {
  constructor(size) {
    this.size = size
    this.buffer = []
    this.age = 0
  }

  appendBuffer(value) {
    if( this.buffer.length >= this.size ) {
        let oldest = 0 
        let old = 0;
      for(let i = 0; i< this.buffer.length; i++) {
        if(this.buffer[i].age < oldest) {
          oldest = this.buffer[i].age
          old = i;
        }
        console.log("old", old)
      }
      this.buffer[old] = {age: this.age, value}

    } else {
      this.buffer.push({age: this.age, value});
      this.age += 1
        console.log("added one")
    }
  }
}

const b = new BufferRing(3);
b.appendBuffer(1)
b.appendBuffer(2)
b.appendBuffer(3)
b.appendBuffer(4)
b.appendBuffer(4)
b.appendBuffer(4)
// console.log(b);

