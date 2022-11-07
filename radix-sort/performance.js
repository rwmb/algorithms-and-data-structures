const testArray = [];

for (let i = 0; i < 100000000; i++) {
  const entry = Math.round(Math.random() * 1000);
  testArray.push(entry);
}

let start = performance.now();
let max = 0;
for (let i = 0; i < testArray.length; i++) {
  if (testArray[i] > max) max = testArray[i];
}
let end = performance.now();
console.log('time with if assignment', Math.round((end - start) * 100) / 100);

start = performance.now();
max = 0;
for (let i = 0; i < testArray.length; i++) {
  max = testArray[i] > max ? testArray[i] : max;
}

end = performance.now();
console.log('time with ternary assignment', Math.round((end - start) * 100) / 100);

start = performance.now();
max = 0;
for (let i = 0; i < testArray.length; i++) {
  max = Math.max(testArray[i], max);
}

end = performance.now();
console.log('time with Math.max assignment', Math.round((end - start) * 100) / 100);