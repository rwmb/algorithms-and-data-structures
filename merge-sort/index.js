function mergeSort(arr) {
  if (arr.length < 2) return arr;

  const middleIndex = Math.floor(arr.length / 2);

  const leftArr = arr.slice(0, middleIndex);
  const rightArr = arr.slice(middleIndex, arr.length);

  return merge(mergeSort(leftArr), mergeSort(rightArr));
}

function merge(leftArr, rightArr) {
  const resultArr = [];
  let leftIndex = 0;
  let rightIndex = 0;

  while (leftIndex < leftArr.length && rightIndex < rightArr.length) {
    if (leftArr[leftIndex] < rightArr[rightIndex])
      resultArr.push(leftArr[leftIndex++]);
    else
      resultArr.push(rightArr[rightIndex++]);
  }

  // Here I did differently than concatenating values because concat is O(N)
  // increasing complexity to O(a + b + c) or O(3N), while push is O(1)
  // doing it this way will add all elements that were left to the resulting array
  while(leftIndex < leftArr.length) resultArr.push(leftArr[leftIndex++]);
  while(rightIndex < rightArr.length) resultArr.push(rightArr[rightIndex++]);

  return resultArr;
}

module.exports = mergeSort;