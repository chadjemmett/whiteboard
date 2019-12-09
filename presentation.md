


Today we'll talk about data structures and algorithms.

Why do we want to talk about algorithms?

Why do we want to talk about data structutes?

So here's a DS.


Raise  your hand if you've used a DS?
You all have, you've used Javascript, so you've used a data structure.

Data structues come from the limitations of memory.

When you go into the ram each address has some piece of data  in it. All that data you need for the particular piece of data you see on your screen.

Arrays are a data structrue that occupy a block of memory. 
If you create an array in C, you have to specify what kind of data  you are going to store in that array. Integers are a different size in memory than strings. So you need to specify if you are using a different language.

Javascript, Ruby, Python and other interpreted languages abstract this away from you. So you don't have to worry about it.

So it's not a concern for you when developing in Javascript.


So here's a data structure. It's called a linked list.
It's a visualization of a linked list.
Here's what the code for a linked list.
A linked takes advantage of a limitation of memory, in that you don't need  a contiguous block of memory.
The only thing you need is a reference to the NEXT node. 
So let's take a look at the code.

The tradeoff is you need to know wehre the head of the node is. That you have to keep track of.

Here's a visualisation of an array in memory. When languages like javasctip creatge an array they block out some piece of memory for that array. If they need to resize it, they do. And they have to copy the old array into a new array.

This consumes time and energy when using languages that abstract away from you. Now if you use a language like C. You are able to use more efficiently. However, it takes a lot more steps. We just want to make websites and servers. We don't want to write things from the ground up. 

But it's important to understand the limitations of things like arrays.  Especially when you start using inputs of a lot of data.

This is where we talk about RUNTIME. 
Here is the O, it's the Big O that helps us understand how much time and effort data structures can take up.

So lets look at Array's.

Lets search for an element in an array. 

[1, 2, 3, 4, 5, 6, 7, 8, 99, "five"]

Lets imagine we don't have Array.prototype.includes.
How do we find the '5'?


We have to go through each item in the array to check and see if it's in there. In fact, javascript is doing somethign behind the scenes that will do this when you use `includes`
So we have to search, and how long will that take?
For this example, micro seconds. Instant.
But what if we have an array filled with a million elements? Ten million?

Here's where we have this O and we multiply the O by the number of inputs.
So we get this notation here O(n) O(1) O(n^2)


1. Intro.
  a. My name and github linked in and website.
2. Why DS and algo?
  a. Because it helps us get jobs.
  b. Because it will help us be better programmers.
  c. Increase the efficency of programs and make it easier and better for our users.
  d. All these things are connected.
    1. Show slide of connected DS Algo, and big O.
3. Dive into algorithms.
  a. What are algorighms?
  b. How to solve them?
4. Polya
5. Summarize Polya.
6. Example Even numbers.
7.??? 
8. ??
9. Data structures.
  a. what are data strcutures?
    1. look at types of DS.
    2. 
  b. Data structures are generally based on the ability of a computer to fetch and store data at any place in its memory...
  c. The implementation of a data structure usually requires writing a set of procedures that create and manipulate instances of that structure.
  d.  Usually, efficient data structures are key to designing efficient algorithms.
10. Why and How.
  b. How much data do you need to store?
  c. How often do you need to access that data?
  d. What is the purpose of the data?
    * Do you need access?
    * Do you need to insert?
    * Sort?
    * Delete?
11. Show linked list.
  a. Visual.
  b. Code snippet.
  c. Share the GH repository of my LL.
12. Doubly linked list.
13. Understanding LL means...
  a. YOu can use DLL
  b. Binary search tree.
  c. BST turns into graphs.
  d. Then you have access and usnderstaning of some poweful data structures that are used all the time.
14. Big O.
  a. Lets explain Big O notatoin.
    1. Big O notation is used to describe the performance or complexity of an algorithm.
    2. Specifically describes the worst-case scenario. In time or space.
  b. O(n)
  c. O(1)
  d. O(n^2)
    1. Searching an array of arrays. Nested for loops.
  e. O(n)

  b. Look at big O cheat sheet.
  c. Tips for looking at inefficient algoritms. Nested `For` Loop.
15. Wrap up. Questions?




[intro do data structutes by Aakash Varshney](https://medium.com/swlh/introduction-to-data-structures-9134b7d064a6)
[Big O, by Rob Bell](https://rob-bell.net/2009/06/a-beginners-guide-to-big-o-notation/)


