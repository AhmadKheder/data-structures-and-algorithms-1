/* eslint-disable no-undef */
'use strict';

// eslint-disable-next-line no-redeclare
const Node = require('./node.js');

class LinkedList {

  constructor() {
    this.head = null;
  }
  insert(val) {
    let newNode = new Node(val);
    newNode.next = this.head;
    this.head = newNode;
    return this;
  }
  includes(val) {
    let newNode = this.head;
    while (newNode) {
      if (newNode.val === val) {
        return true;
      } else {
        newNode = newNode.next;
      }
    }
    return false;
  }
  toString() {

    let result = '';
    let newNode = this.head;
    while (newNode) {
      result += `{ ${newNode.val} } -> `;
      newNode = newNode.next;
    }
    return (result + 'NULL');
  }
  append(val) {
    try {
      let newNode = new Node(val);

      if (!this.head) {
        this.head = newNode;
        return this.head;
      }

      let tail = this.head;
      while (tail.next !== null) {
        tail = tail.next;
      }
      tail.next = newNode;
      return this.head;

    } catch (e) {
      throw err;
    }
  }
  insertBefore(val, newVal) {
    try {

      let newNode = new Node(newVal);

      //if list is empty
      if (!this.head) {
        this.head = newNode;
        return this.head;
      }

      let currVal = this.head;

      while (currVal) {
        if (currVal.next.val === val) {
          newNode.next = currVal.next;
          currVal.next = newNode;
          break;
        }
        currVal = currVal.next;
      }

    } catch (e) {
      throw err;
    }
  }

  insertAfter(val, newVal) {
    try {

      let newNode = new Node(newVal);

      //if list is empty
      if (!this.head) {
        this.head = newNode;
        return this.head;
      }

      let currVal = this.head;

      while (currVal) {
        //currVal is 3
        // target is 3, put after 3
        if (currVal.next.val === val) {
          //currVal.next.val is 4
          newNode.next = currVal.next.next;
          currVal.next.next = newNode;
          break;
        }
        currVal = currVal.next;
      }

    } catch (e) {
      throw err;
    }
  }
}





module.exports = LinkedList;
