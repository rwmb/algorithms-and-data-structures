const mergeSort = require('./index');

const arr1 = {
  unsorted: [1, 5, 3, 18, 22],
  sorted: [1, 3, 5, 18, 22]
};

const arr2 = {
  unsorted: [5, 4, 3, 2, 1, 9, 8, 7, 6, 15, 13, 12, 14, 11, 10, 18, 16, 17, 0],
  sorted: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18],
};

const arr3 = {
  unsorted: [1],
  sorted: [1]
};

const arr4 = {
  unsorted: [],
  sorted: []
};

test('merge sort', () => {
  expect(mergeSort(arr1.unsorted)).toEqual(arr1.sorted);
  expect(mergeSort(arr2.unsorted)).toEqual(arr2.sorted);
  expect(mergeSort(arr3.unsorted)).toEqual(arr3.sorted);
  expect(mergeSort(arr4.unsorted)).toEqual(arr4.sorted);
})
