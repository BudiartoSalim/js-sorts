const fs = require('fs');
let data = JSON.parse(fs.readFileSync('./data/datasets/random.json', 'utf-8'));

console.time("Finishes sorting in");
let sorted = insertionSort(data);
console.timeEnd("Finishes sorting in");
fs.writeFileSync('./data/results.json', JSON.stringify(sorted, null, 2));

function insertionSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j > 0; j--) {
      if (arr[j] < arr[j - 1]) {
        let temp = arr[j];
        arr[j] = arr[j - 1];
        arr[j - 1] = temp;
      } else {
        break;
      }
    }
  }
  return arr;
}