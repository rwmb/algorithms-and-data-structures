const Stack = require('./stack');

describe('Stack', () => {
  
  test('pop', async () => {
    const stack = new Stack();
  
    const undefinedPopped = stack.pop();
    expect(undefinedPopped).toBe(undefined);
  
    const push = stack.push('test');
    const popped1 = stack.pop();
  
    expect(stack.first).toBe(null);
    expect(stack.length).toBe(0);
    expect(popped1).toBe(push);
  
    const first = stack.push('first');
    const second = stack.push('second');
    const popped2 = stack.pop();
  
    expect(stack.length).toBe(1);
    expect(stack.first).toBe(first);
    expect(stack.first).toBe(stack.last);
    expect(popped2).toBe(second);
  
    const third = stack.push('third');
    const fourth = stack.push('fourth');
    const fifth = stack.push('fifth');
    const popped5 = stack.pop();
    
    expect(stack.length).toBe(3);
    expect(popped5).toBe(fifth);
    expect(stack.first).toBe(fourth);
    expect(stack.first.next).toBe(third);
    expect(stack.first.next.next).toBe(first);
    expect(stack.last).toBe(first);
  
    stack.pop();
    stack.pop();
    stack.pop();
  
    expect(stack.length).toBe(0);
  });
  
  test('push', async () => {
    const stack = new Stack();
    const first = stack.push('first');
  
    expect(stack.first).toBe(first);
    expect(stack.last).toBe(first);
    expect(stack.first.next).toBe(null);
  
    const second = stack.push('second');
    expect(stack.first).toBe(second);
    expect(stack.last).toBe(first);
    expect(stack.first.next).toBe(first);
  });
  
})