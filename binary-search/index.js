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

function searchStupid(arr, target) {
  return arr.indexOf(target);
}

module.exports = searchBinary;

// start 5 + end 7 = 13 / 2 = mid 6.5 = 6
// 5 5


const arr4 = [];

for(let i = 1; i <= 100000000; i++) {
  arr4.push(i);
}

let start = performance.now();

searchStupid(arr4, 100000000);

let end = performance.now();

console.log('time using stupid', end - start);

start = performance.now();

searchBinary(arr4, 10000000);

end = performance.now();

console.log('time using binary', end - start);
