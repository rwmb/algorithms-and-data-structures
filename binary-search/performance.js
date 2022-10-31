const binarySearches = require('./index');
const recursiveSearch = binarySearches.recursion;
const whileSearch = binarySearches.while;

// CREATE ARRAY
const arr = [];

for(let i = 1; i <= 100000000; i++) {
  arr.push(i);
}

// this is stupid for sorted arrays
// because indexOf runs with linear time
function searchStupid(arr, target) {
  return arr.indexOf(target);
};

// *********** binary search with stupidity *************
let sum = 0;

for (let i = 0; i < 100; i++) {
  let start = performance.now();
  
  searchStupid(arr, 845932);
  
  let end = performance.now();

  sum += (end - start);
}

const timeLinear = sum / 100;
console.log('time using stupid', timeLinear);

// *********** binary search with recursion *************
sum = 0;

for (let i = 0; i < 100000; i++) {
  let start = performance.now();
  
  recursiveSearch(arr, 8445932);
  
  let end = performance.now();

  sum += (end - start);
}

const timeRecursion = sum / 100000;

console.log('time using recursion', timeRecursion);

// *********** binary search with while loop *************
sum = 0;

for (let i = 0; i < 100000; i++) {
  let start = performance.now();
  
  whileSearch(arr, 8445932);
  
  let end = performance.now();

  sum += (end - start);
}

const timeWhile = sum / 100000;

console.log('time using while loop', timeWhile);

console.log('linear compared to while binary', Math.round((timeLinear / timeWhile) * 100) / 100, 'times worse');
console.log('recursion compared to while', Math.round((timeRecursion / timeWhile) * 100) / 100, 'times worse');
