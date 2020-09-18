'use strict';



const Stack = require('./stacks-and-queues').Stack;
const Queue = require('./stacks-and-queues').Queue;




let stackClass = new Stack();
let queueClass = new Queue();


describe('stacks', ()=>{

  it('push should push a value into the stack',()=>{

    let result = stackClass.push('raphael');
    expect(result.value).toBe('raphael')
  })

  it('Pop should remove value at the top of stack',()=>{

    stackClass.push('a')
    stackClass.push('b')
    stackClass.push('c')
    let result = stackClass.pop();
    expect(result).toBe('c')
  })

  it('Peek should show you the top value of the stack', ()=>{
    stackClass.push('a')
    stackClass.push('b')
    stackClass.push('c')
    let result = stackClass.peek()
    expect(result.value).toBe('c')

  })
  it('isEmpty should return true', ()=>{

    let result = stackClass.isEmpty()
    expect(result).toBe(true)
  })


})


describe('Queues', ()=>{

  it('should do a thing',()=>{

    expect().toBe()
  })
})