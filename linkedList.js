function Node(value) {
  this.value = value
  this.next = null

}



const head = new Node(1)
head.next = new Node(2)
head.next.next = new Node(3)
head.next.next.next = new Node(4)
// console.log(head)


let curNode =  head

while(curNode) {
  console.log("cur node value", curNode.value)
  curNode = curNode.next
}
