'use strict';
let LinkedList = require('../linked-list/linkedlist.js');

describe('Linked List Module', () => {

    it('Can successfully instantiate an empty linked list', () => {
        let list = new LinkedList();
        expect(list.head).toBeNull();
    });

    it('insert()', () => {
        let list = new LinkedList();
        expect(list.head).toBeNull();
        let initialValue = 'First One';
        list.insert(initialValue);
        expect(list.head.value).toEqual(initialValue);

        let newValue = 'Second Value';
        list.insert(newValue);
        expect(list.head.value).toEqual(newValue);
        expect(list.head.next).not.toBeNull();
        expect(list.head.next.value).toEqual(initialValue);

    });
    it('includes()', () => {
        let list = new LinkedList();
        let initialValue = 'First One';
        expect(list.includes(initialValue)).toEqual(false);
        list.insert(initialValue);
        expect(list.includes(initialValue)).toEqual(true);

        let newValue = 'Second Value';
        list.insert(newValue);
        expect(list.includes(initialValue)).toEqual(true);
        expect(list.includes(newValue)).toEqual(true);
    });

    it('toString()', () => {
        let list = new LinkedList();

        list.insert('c');
        list.insert('b');
        list.insert('a');
        expect(list.toString()).toEqual("{ a } -> { b } -> { c } -> NULL");
    });

})
describe('Challenge 6: expected pass tests', () => {
  it('1. Can successfully add a node to the end of the linked list', () => {
    let newList = new LinkedList();

    newList.insert('A');
    newList.insert('B');
    newList.insert('C');
    newList.append('D');
    
    expect(newList.toString()).toEqual('{ C } -> { B } -> { A } -> { D } -> NULL');
  });

  it('2. Can successfully add multiple nodes to the end of a linked list', () => {
      let newList = new LinkedList();
  
      newList.insert('A');
      newList.insert('B');
      newList.insert('C');
      newList.append('D');
      newList.append('E');
      expect(newList.toString()).toEqual('{ C } -> { B } -> { A } -> { D } -> { E } -> NULL');
    });

  it('3. Can successfully insert a node before a node located i the middle of a linked list', () => {
      let newList = new LinkedList();
  
      newList.insert('A');
      newList.insert('B');
      newList.insert('C');
      newList.insert('D');
      newList.insertBefore('C', 'BtoC');
      expect(newList.toString()).toEqual('{ D } -> { C } -> { BtoC } -> { B } -> { A } -> NULL');
    });

    it('4. Can successfully insert a node before the first node of a linked list', () => {
      let newList = new LinkedList();
  
      newList.insert('A');
      newList.insert('B');
      newList.insert('C');
      newList.insert('D');
  
      expect(newList.toString()).toBe(console.log('[D], [C], [B], [A]'));
    });

    it('5. Can successfully insert after a node in the middle of the linked list', () => {
      let newList = new LinkedList();
  
      newList.insert('A');
      newList.insert('B');
      newList.insert('C');
      newList.insert('D');
      newList.insertAfter('B', 'BtoC');
  
      expect(newList.toString()).toBe(console.log('[D], [C], [BtoC], [B], [A]'));
    });

    it('6. Can successfully insert a node after the last node of the linked list', () => {
      let newList = new LinkedList();
  
      newList.insert('A');
      newList.insert('B');
      newList.insert('C');
      newList.append('D');
  
      expect(newList.toString()).toBe(console.log('[C], [B], [A], [D]'));
    });
});
