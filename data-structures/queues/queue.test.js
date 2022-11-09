const Queue = require('./queue');

describe('Queue', () => {
  test('dequeue', async () => {
    const queue = new Queue();
    queue.enqueue('first');

    expect(queue.length).toBe(1);
    expect(queue.first.val).toBe('first');
    expect(queue.first).toBe(queue.last);

    queue.enqueue('second');
    
    expect(queue.length).toBe(2);
    expect(queue.first.val).toBe('first');
    expect(queue.last.val).toBe('second');

    queue.enqueue('third');

    expect(queue.length).toBe(3);
    expect(queue.last.val).toBe('third');
  });

  test('queue', async () => {
    const queue = new Queue();
    const result = queue.dequeue();

    expect(result).toBe(undefined);
    expect(queue.length).toBe(0);
    
    queue.enqueue('first');
    const first = queue.dequeue();

    expect(queue.length).toBe(0);
    expect(first.val).toBe('first');
    expect(queue.first).toBe(null);
    expect(queue.last).toBe(null);

    queue.enqueue('first');
    queue.enqueue('second');
    queue.enqueue('third');

    queue.dequeue();

    expect(queue.length).toBe(2);
    expect(queue.first.val).toBe('second');
    expect(queue.last.val).toBe('third');

    queue.dequeue();

    expect(queue.length).toBe(1);
    expect(queue.first).toBe(queue.last);
    expect(queue.first.val).toBe('third');
  });
})
