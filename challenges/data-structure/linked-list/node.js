'use strict';

// this is a node for a singly linked list 
// it has data and next, it can only go forward
class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

module.exports = Node;