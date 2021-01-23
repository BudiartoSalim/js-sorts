const fs = require('fs');
let arr = [];
for (let i = 0; i < 100000; i++) {
  let temp = Math.round(Math.random() * 100000);
  arr.push(temp);
}
fs.writeFileSync('./datas/unsorted/random.json', JSON.stringify(arr, null, 2));