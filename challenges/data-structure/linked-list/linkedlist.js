'use strict';

const Node = require('./node.js');

class LinkedList {

    constructor() {
        this.head = null;
    }
    insert(value) {
        let node = new Node(value);
        node.next = this.head;
        this.head = node;
        return this;
    }
    includes(value) {
        let node = this.head;
        while (node) {
            if (node.value === value) {
                return true
            } else {
                node = node.next;
            }
        }
        return false
    }
    toString() {

        let result = '';
        let node = this.head;
        while (node) {
            result += `{ ${node.value} } -> `
            node = node.next;
        }
        return (result+ 'NULL')
    }


}

module.exports = LinkedList;