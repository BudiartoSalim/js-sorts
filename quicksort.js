const fs = require('fs');
let data = JSON.parse(fs.readFileSync('./datas/unsorted/random.json', 'utf-8'));
console.time("Finishes sorting in");
let sorted = quicksort(data, 0, data.length - 1);
console.timeEnd("Finishes sorting in");

fs.writeFileSync('./datas/results.json', JSON.stringify(sorted, null, 2));

function quicksort(arr, leftIndex, rightIndex) {
  //basecase
  if (leftIndex >= rightIndex) {
    return;
  }
  let partitionIndex = partition(arr, leftIndex, rightIndex);
  quicksort(arr, leftIndex, partitionIndex - 1);
  quicksort(arr, partitionIndex + 1, rightIndex);

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
