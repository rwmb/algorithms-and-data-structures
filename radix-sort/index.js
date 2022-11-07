
function getDigit(num, i) {
  return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}

function countDigit(num) {
  if (num === 0) return 1;

  return Math.floor(Math.log10(Math.abs(num))) + 1;
}

function mostDigits(arr) {
  let maxLength = 0;

  for (let i = 0; i < arr.length; i++) {
    const most = countDigit(arr[i]);
    if (maxLength < most) maxLength = most;
  }

  return maxLength;
}

// STEPS
// get the most digits
// loop as many times as there are most digits
  // create buckets numbered from 0 to 9
  // loop all numbers, assigning each to it's corresponding bucket
  // loop through all buckets, adding their items to new array
//return new array

Array.prototype.radixSort = function () {
  if (this.length < 2) return this;

  const most = mostDigits(this);

  for (let i = 0; i < most; i++) {
    const buckets = [[], [], [], [], [], [], [], [], [], []];
    for (let j = 0; j < this.length; j++) {
      const entry = this[j];
      buckets[getDigit(entry, i)].push(entry);
    }

    let index = 0;
    for (let j = 0; j < buckets.length; j++) {
      for (let k = 0; k < buckets[j].length; k++) {
        this[index++] = buckets[j][k];
      }
    }

  }

  return this;
}

module.exports = { getDigit, countDigit, mostDigits};