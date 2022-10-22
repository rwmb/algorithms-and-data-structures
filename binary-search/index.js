function search(arr, start, end, target) {
  let middle = Math.floor((start + end) / 2);

  if (start > end) return null;

  if (arr[middle] === target) return middle;

  if (arr[middle] > target) return search(arr, start, middle - 1, target);

  return search(arr, middle + 1, end, target);
};

function searchBinary(arr, target) {
  return search(arr, 0, arr.length - 1, target);
};

// this is stupid because indexOf runs with linear time
// which is stupid for sorted arrays
function searchStupid(arr, target) {
  return arr.indexOf(target);
};

module.exports = searchBinary;

// start 5 + end 7 = 13 / 2 = mid 6.5 = 6
// 5 5

// const arr = [];

// for(let i = 1; i <= 100000000; i++) {
//   arr.push(i);
// }

// let start = performance.now();

// searchStupid(arr, 100000000);

// let end = performance.now();

// console.log('time using stupid', end - start);

// start = performance.now();

// searchBinary(arr, 845932);

// end = performance.now();

// console.log('time using binary', end - start);
