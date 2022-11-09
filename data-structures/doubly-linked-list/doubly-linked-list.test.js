const data = require('./doubly-linked-list');

describe('DoublyLinkedList', () => {

  test('nodes', async () => {
    const zero = new data.Node('zero');
    const first = new data.Node('first');
    const second = new data.Node('second');
    first.prev = zero;
    first.next = second;
  
    expect(first.val).toBe('first');
    expect(first.next.val).toBe('second');
    expect(first.prev.val).toBe('zero');
  });
  
  test('push', async () => {
    const list = new data.DoublyLinkedList();
    expect(list.head).toBe(null);
    expect(list.tail).toBe(null);
    expect(list.length).toBe(0);
  
    const first = list.push('first');
    expect(first.val).toBe('first');
    expect(list.head).toBe(first);
    expect(list.tail).toBe(first);
    expect(list.tail.val).toBe('first');
    expect(list.length).toBe(1);
  
    const second = list.push('second');
    expect(second.val).toBe('second');
    expect(list.head).toBe(first);
    expect(list.tail).toBe(second);
    expect(list.tail.val).toBe('second');
    expect(list.tail.prev.val).toBe('first');
    expect(list.length).toBe(2);
  
    const third = list.push('third');
    expect(third.val).toBe('third');
    expect(list.head).toBe(first);
    expect(list.head.next).toBe(second);
    expect(list.tail).toBe(third);
    expect(list.tail.val).toBe('third');
    expect(list.get(1).prev.val).toBe('first');
    expect(list.length).toBe(3);
  });
  
  test('pop', async () => {
    const list = new data.DoublyLinkedList();
    const push = list.push('test');
    const pop = list.pop();
  
    expect(list.head).toBe(null);
    expect(list.length).toBe(0);
    expect(pop).toBe(push);
  
    const undefinedPop = list.pop();
    expect(undefinedPop).toBe(undefined);
  
    const first = list.push('first');
    list.push('second');
    list.pop();
  
    expect(list.head).toBe(first);
    expect(list.tail).toBe(first);
    expect(list.length).toBe(1);
  
    const second = list.push('second');
    const third = list.push('third');
    const fourth = list.push('fourth');
    const popped = list.pop();
  
    expect(list.head).toBe(first);
    expect(list.tail.prev.val).toBe('second');
    expect(list.tail).toBe(third);
    expect(popped).toBe(fourth);
    expect(list.head.next).toBe(second);
    expect(list.length).toBe(3);
  });
  
  test('shift', async () => {
    const list = new data.DoublyLinkedList();
  
    const undefinedShifted = list.shift();
    expect(undefinedShifted).toBe(undefined);
  
    const push = list.push('test');
    const shifted1 = list.shift();
  
    expect(list.head).toBe(null);
    expect(list.length).toBe(0);
    expect(shifted1).toBe(push);
  
    const first = list.push('first');
    const second = list.push('second');
    const shifted2 = list.shift();
  
    expect(list.length).toBe(1);
    expect(list.head).toBe(second);
    expect(list.head).toBe(list.tail);
    expect(shifted2).toBe(first);
  
    const third = list.push('third');
    const fourth = list.push('fourth');
    const fifth = list.push('fifth');
    const shifted3 = list.shift();
    
    expect(list.length).toBe(3);
    expect(shifted3).toBe(second);
    expect(list.head).toBe(third);
    expect(list.head.prev).toBe(null);
    expect(list.head.next).toBe(fourth);
    expect(list.head.next.next).toBe(fifth);
    expect(list.tail).toBe(fifth);
  
    list.shift();
    list.shift();
    list.shift();
  
    expect(list.length).toBe(0);
  });
  
  test('unshift', async () => {
    const list = new data.DoublyLinkedList();

    const first = list.unshift('first');
  
    expect(list.head).toBe(first);
    expect(list.tail).toBe(first);
    expect(list.head.next).toBe(null);
  
    const second = list.unshift('second');

    expect(list.head).toBe(second);
    expect(list.tail).toBe(first);
    expect(list.head.next).toBe(first);
    expect(list.tail.prev).toBe(second);
  });
  
  test('get', async () => {
    const list = new data.DoublyLinkedList();
  
    list.push('0');
    list.push('1');
    list.push('2');
    list.push('3');
    list.push('4');
  
    expect(list.get(0).val).toBe('0');
    expect(list.get(4).val).toBe('4');
    expect(list.get(5)).toBe(null);
    expect(list.get(-1)).toBe(null);
  });
  
  test('set', async () => {
    const list = new data.DoublyLinkedList();
  
    const first = list.push('first');
    const second = list.push('second');
    const third = list.push('third');
    list.set(0, 0);
    list.set(1, '1');
    const worked = list.set(2, true);
    const wrong = list.set(3, 3);
  
    expect(first.val).toBe(0);
    expect(second.val).toBe('1');
    expect(third.val).toBe(true);
    expect(worked).toBe(true);
    expect(wrong).toBe(false);
  });

  test('insert', async () => {
    const list = new data.DoublyLinkedList();

    list.push('first');
    list.push('second');
    list.push('fourth');

    let result = list.insert(-1, 'nope');

    expect(result).toBe(false);
    expect(list.length).toBe(3);

    result = list.insert(4, 'nope too');

    expect(result).toBe(false);
    expect(list.length).toBe(3);

    list.insert(0, 'head');
    list.insert(3, 'middle');
    list.insert(5, 'tail');

    expect(list.head.val).toBe('head');
    expect(list.head.next.val).toBe('first');
    expect(list.get(3).val).toBe('middle');
    expect(list.get(3).next.val).toBe('fourth');
    expect(list.get(3).prev.val).toBe('second');
    expect(list.tail.val).toBe('tail');
    expect(list.tail.prev.val).toBe('fourth');
  });

  test('remove', async () => {
    const list = new data.DoublyLinkedList();

    list.push('first');
    list.push('second');
    list.push('third');
    list.push('fourth');

    expect(list.remove(-1)).toBe(undefined);
    expect(list.remove(5)).toBe(undefined);

    const result = list.remove(1);

    expect(result.val).toBe('second');
    expect(list.get(1).prev.val).toBe('first');
    expect(list.length).toBe(3);

    list.remove(0);
    expect(list.length).toBe(2);
    expect(list.head.val).toBe('third');

    list.remove(1);
    expect(list.head).toBe(list.tail);
    expect(list.tail.val).toBe('third');
  });

  test('reverse', async () => {
    const list = new data.DoublyLinkedList();
  
    list.push('0');
    list.push('1');

    list.reverse();
    expect(list.head.val).toBe('1');
    expect(list.get(0).val).toBe('1');
    expect(list.tail.val).toBe('0');
    expect(list.tail.prev.val).toBe('1');
    expect(list.get(1).val).toBe('0');

    list.reverse();
    list.push('2');
    list.reverse();

    expect(list.head.val).toBe('2');
    expect(list.get(0).val).toBe('2');
    expect(list.get(1).val).toBe('1');
    expect(list.tail.val).toBe('0');
    expect(list.tail.prev.val).toBe('1');
    expect(list.get(2).val).toBe('0');

    list.reverse();
    list.push('3');
    list.push('4');
    list.reverse();

    expect(list.head.val).toBe('4');
    expect(list.get(0).val).toBe('4');
    expect(list.get(1).val).toBe('3');
    expect(list.tail.val).toBe('0');
    expect(list.get(4).val).toBe('0');
  });
});
