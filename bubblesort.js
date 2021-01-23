const { timeLog } = require('console');
const fs = require('fs');
let data = JSON.parse(fs.readFileSync('./datas/unsorted/random.json', 'utf-8'));

console.time("Finishes sorting in");
let sorted = bubblesort(data);
console.timeEnd("Finishes sorting in");
fs.writeFileSync('./datas/results.json', JSON.stringify(sorted, null, 2));

function bubblesort(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (i < arr.length - 1) {
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[i] > arr[j]) {
          let temp = arr[i];
          arr[i] = arr[j];
          arr[j] = temp;
        }
      }
    }
  }
  return arr;
}