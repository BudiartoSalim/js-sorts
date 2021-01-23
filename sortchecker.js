const fs = require('fs');
const data = JSON.parse(fs.readFileSync('./data/results.json', 'utf-8'));

let isSorted = true;
for (let i = 0; i < data.length - 1; i++) {
  if (data[i] > data[i + 1]) {
    isSorted = false;
    break;
  }
}

console.log(isSorted);