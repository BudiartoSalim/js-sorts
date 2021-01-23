const fs = require('fs');
let data = JSON.parse(fs.readFileSync('./datas/unsorted/random.json', 'utf-8'));

console.time("Finishes sorting in");
let sorted = quicksortIterative(data);
console.timeEnd("Finishes sorting in");

fs.writeFileSync('./datas/results.json', JSON.stringify(sorted, null, 2));


function quicksortIterative(arr) {
  let stack = [];
  let leftIndex = 0;
  let rightIndex = arr.length - 1;
  stack.push([leftIndex, rightIndex]);

  while (stack.length) {
    let range = stack.pop();
    leftIndex = range[0];
    rightIndex = range[1];
    if (leftIndex < rightIndex) {
      let partitionIndex = partition(arr, leftIndex, rightIndex);
      stack.push([leftIndex, partitionIndex - 1]);
      stack.push([partitionIndex + 1, rightIndex]);
    }
  }
  return arr;
}


function partition(arr, leftIndex, rightIndex) {
  let pivot = arr[rightIndex];
  let i = (leftIndex - 1);

  for (let j = leftIndex; j <= rightIndex - 1; j++) {
    if (arr[j] < pivot) {
      i++;
      swap(arr, i, j);
    }
  }
  swap(arr, i + 1, rightIndex);
  return i + 1;
}

function swap(arr, i, j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}
