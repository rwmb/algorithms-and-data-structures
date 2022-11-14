const MaxBinaryHeap = require('./max-binary-heap');

describe('MaxBinaryHeap', () => {
  test('insert', async () => {
    const heap = new MaxBinaryHeap();

    let result = heap.insert(41);
    expect(result).toBe(0);
    expect(heap.values).toEqual([41]);

    heap.insert(39);
    expect(heap.values).toEqual([41, 39]);

    heap.insert(33);
    expect(heap.values).toEqual([41, 39, 33]);

    heap.insert(18);
    heap.insert(27);
    heap.insert(12);
    expect(heap.values).toEqual([41, 39, 33, 18, 27, 12]);

    heap.insert(55);
    expect(heap.values).toEqual([55, 39, 41, 18, 27, 12, 33]);
  });

  test('remove', async () => {
    const heap = new MaxBinaryHeap();

    const result = heap.remove();
    expect(result).toBe(null);

    heap.insert(41);
    heap.remove();
    expect(heap.values).toEqual([]);

    heap.insert(41);
    heap.insert(39);
    heap.insert(33);
    heap.insert(18);
    heap.insert(27);
    heap.insert(12);
    expect(heap.values).toEqual([41, 39, 33, 18, 27, 12]);

    heap.remove();
    expect(heap.values).toEqual([39, 27, 33, 18, 12]);
  });
});
