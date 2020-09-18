# Stacks and Queues
Create a class for Stack and class for Queue with methods for adding, removing, and viewing a stack and a queue.

## Challenge
```
- Create a Node class that has value stored in Node and pointer to next node.
- Create a Stack class that has a top property. It creates an empty Stack when instantiated.
- Define a method called push which takes any value as an argument and adds a new node with that value to the top of the stack with an O(1) Time performance.
- Define a method called pop that does not take any argument, removes the node from the top of the stack, and returns the node’s value.
Should raise exception when called on empty stack
- Define a method called peek that does not take an argument and returns the value of the node located on top of the stack, without removing it from the stack.
-Should raise exception when called on empty stack
- Define a method called isEmpty that takes no argument, and returns a boolean indicating whether or not the stack is empty.
```
### Tasks Checklist
- [✓] Node Class
- [✓] push
- [✓] pop
- [✓] peek
- [✓] isEmpty


## Approach & Efficiency
```
Big O for methods will be O(1)
```
## Description Of Methods
### Stack
```
- Push: Takes any value and add a node with that value on the top of the stack.
- Pop: Removes node from top of stack. Does not take arguments.
- Peek: Returns value of top node in a stack.
- isEmpty: Returns a boolean indicating whether a stack is empty.
```
### Queue
- enqueue: Take an argument and adds a new node to the back of a queue.
- dequeue: Removes a node from the front of a queue and returns nodes value.
- Peek: Returns value of the node in the front a the queue without removing from queue. Should raise exception when called on empty queue.
 - isEmpty: Returns boolean indicating whether or not a queue is empty. 

### Tasks Checklist
- [✓]enqueue
- [✓]dequeue
- [✓]peek
- [✓]isEmpty

