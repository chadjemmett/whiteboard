
 declare a new `SetOfStacks` where each stack has a capacity of 3
 const stacks = new SetOfStacks(3);

 stacks.push(10);
 stacks.push(9);
 stacks.push(8);
 stacks.push(7);

 console.log(stacks.length);   // should print 2

 console.log(stacks.popAt(0)); // should print 8
 console.log(stacks.pop());    // should print 7
 console.log(stacks.pop());    // should print 9

 console.log(stacks.length);   // should print 1
