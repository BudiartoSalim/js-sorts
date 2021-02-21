const fs = require('fs');
let data = JSON.parse(fs.readFileSync('./data/datasets/random.json', 'utf-8'));

console.time("Finishes sorting in");
let sorted = gnomeSort(data);
console.timeEnd("Finishes sorting in");
fs.writeFileSync('./data/results.json', JSON.stringify(sorted, null, 2));

function gnomeSort(arr) {

}