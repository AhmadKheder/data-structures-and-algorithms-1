'use strict';
let LL = require('../linked-list/linkedlist.js');

describe('Linked List Module', () => {

    it('Can successfully instantiate an empty linked list', () => {
        let list = new LL();
        expect(list.head).toBeNull();
    });

    it('insert()', () => {
        let list = new LL();
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
        let list = new LL();
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
        let list = new LL();

        list.insert('c');
        list.insert('b');
        list.insert('a');
        expect(list.toString()).toEqual("{ a } -> { b } -> { c } -> NULL");
    });

})