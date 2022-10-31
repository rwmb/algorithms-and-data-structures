// search with recursion
function binarySearchWithRecursion(arr, start, end, target) {
  const middle = Math.floor((start + end) / 2);

  if (start > end) return null; // or -1

  if (arr[middle] === target) return middle;

  if (arr[middle] > target) return binarySearchWithRecursion(arr, start, middle - 1, target);

  return binarySearchWithRecursion(arr, middle + 1, end, target);
};

function searchBinaryWithRecursion(arr, target) {
  return binarySearchWithRecursion(arr, 0, arr.length - 1, target);
};

// search with for loop
function binarySearchWithWhile(arr, val) {
  let start = 0, end = arr.length - 1;

  while (start <= end) {
    const middle = Math.floor((start + end) / 2);

    if (arr[middle] === val) return middle;

    if (arr[middle] < val) start = middle + 1;

    if (arr[middle] > val) end = middle - 1;
  }

  // in case not found
  return -1;
}

module.exports = {
  recursion: searchBinaryWithRecursion,
  while: binarySearchWithWhile
};