const binarySearches = require('./index');
const recursiveSearch = binarySearches.recursion;
const whileSearch = binarySearches.while;

const arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const arr2 = [10, 32, 54, 70, 85, 92, 500, 1000, 3120, 14570];
const arr3 = [5, 8, 22, 46, 74, 2311, 7142, 16424, 16923];
const arr4 = [];

for(let i = 1; i < 1000000; i++) {
  arr4.push(i);
}

test('search binary with recursion', () => {
  expect(recursiveSearch(arr1, 5)).toBe(4);
  expect(recursiveSearch(arr2, 54)).toBe(2);
  expect(recursiveSearch(arr2, 501)).toBe(null);
  expect(recursiveSearch(arr3, 16923)).toBe(8);
  expect(recursiveSearch(arr4, 952131)).toBe(952130);
});

test('search binary with while loop', () => {
  expect(whileSearch([1,2,3,4,5],2)).toBe(1);
  expect(whileSearch([1,2,3,4,5],3)).toBe(2);
  expect(whileSearch([1,2,3,4,5],5)).toBe(4);
  expect(whileSearch([1,2,3,4,5],6)).toBe(-1);
  expect(whileSearch([
    5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 
    40, 44, 64, 79, 84, 86, 95, 96, 98, 99
  ], 10)).toBe(2);
  expect(whileSearch([
    5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 
    40, 44, 64, 79, 84, 86, 95, 96, 98, 99
  ], 95)).toBe(16);
  expect(whileSearch([
    5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 
    40, 44, 64, 79, 84, 86, 95, 96, 98, 99
  ], 100)).toBe(-1);
});
