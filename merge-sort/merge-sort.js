const mergeArrays = require("./merge-arrays");

function mergeSortRecursive(arr) {
  if (arr.length < 2) return arr;

  const middle = Math.floor(arr.length / 2);
  const left = arr.slice(0, middle);
  const right = arr.slice(middle);

  return mergeArrays(mergeSortRecursive(left), mergeSortRecursive(right));
}

module.exports = mergeSortRecursive;