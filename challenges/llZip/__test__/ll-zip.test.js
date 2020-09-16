const LinkedList  = require('../../data-structure/linked-list/linkedlist');
const zipLists  = require('../ll-zip');

describe('zip two lists together function', () => {
    it('should zip Linked Lists together when the list lengths are equal', () => {
  
      const list1 = new LinkedList();
      const list2 = new LinkedList();
  
  
      list1.insert(2);
      list1.insert(3);
      list1.insert(1);
  
      list2.insert(4);
      list2.insert(9);
      list2.insert(5);
  
      const zipper = zipLists(list1, list2);
      expect(zipper.toString()).toBe('{ 1 } -> { 5 } -> { 3 } -> { 9 } -> { 2 } -> { 4 } -> NULL');
    })
    it('should zip lists when the bottom list is longer', () => {
  
      const list1 = new LinkedList();
      const list2 = new LinkedList();
    
      list1.insert(2);
      list1.insert(3);
      list1.insert(1);
    
      list2.insert(12);
      list2.insert(4);
      list2.insert(9);
      list2.insert(5);
    
    
      const zipped = zipLists(list1, list2);
    
      expect(zipped.toString()).toBe('{ 1 } -> { 5 } -> { 3 } -> { 9 } -> { 2 } -> { 4 } -> { 12 } -> NULL');
    
    });
    
    it('should zip lists when the top list is longer', () => {
    
      const list1 = new LinkedList();
      const list2 = new LinkedList();
    
      list1.insert(15);
      list1.insert(12);
      list1.insert(2);
      list1.insert(3);
      list1.insert(1);
    
    
      list2.insert(4);
      list2.insert(9);
      list2.insert(5);
    
    
      const zipped = zipLists(list1, list2);
    
      expect(zipped.toString()).toBe('{ 1 } -> { 5 } -> { 3 } -> { 9 } -> { 2 } -> { 4 } -> { 12 } -> { 15 } -> NULL');
    
    });
    
  });