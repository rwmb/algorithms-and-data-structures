const searchBinary = require('./index');

const arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const arr2 = [10, 32, 54, 70, 85, 92, 500, 1000, 3120, 14570];
const arr3 = [5, 8, 22, 46, 74, 2311, 7142, 16424, 16923];
const arr4 = [];

for(let i = 1; i < 1000000; i++) {
  arr4.push(i);
}

test('search binary', () => {
  expect(searchBinary(arr1, 5)).toBe(4);
  expect(searchBinary(arr2, 54)).toBe(2);
  expect(searchBinary(arr2, 501)).toBe(null);
  expect(searchBinary(arr3, 16923)).toBe(8);
  expect(searchBinary(arr4, 952131)).toBe(952130);
})
