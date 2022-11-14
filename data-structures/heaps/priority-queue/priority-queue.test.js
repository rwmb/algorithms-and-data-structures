const PriorityQueueMin = require('./priority-queue');

describe('PriorityQueueMin', () => {
  test('enqueue', async () => {
    const queue = new PriorityQueueMin();

    let result = queue.enqueue('Bruce', 1);
    expect(result).toBe(0);
    expect(queue.values[0].val).toBe('Bruce');
    expect(queue.values[0].priority).toBe(1);

    queue.enqueue('Clark', 2);
    queue.enqueue('Diana', 5);
    queue.enqueue('Barry', 3);
    queue.enqueue('AQUAMAAAAAN', 0);

    expect(queue.values.length).toBe(5);
    expect(queue.values.map(value => value.priority)).toEqual([0, 1, 5, 3, 2]);
  });

  test('dequeue', async () => {
    const queue = new PriorityQueueMin();

    const result = queue.dequeue();
    expect(result).toBe(null);

    queue.enqueue('Bruce', 1);
    queue.dequeue();
    expect(queue.values.length).toBe(0);

    queue.enqueue('Bruce', 1);
    queue.enqueue('Clark', 2);
    queue.enqueue('Diana', 5);
    queue.enqueue('Barry', 3);
    queue.enqueue('AQUAMAAAAAN', 0);

    queue.dequeue();
    expect(queue.values.length).toBe(4);
    expect(queue.values.map(value => value.priority)).toEqual([1, 2, 5, 3]);
  });
});
