const fs = require('fs');
let arr = [];
for (let i = 0; i < 10000; i++) {
  let temp = Math.round(Math.random() * 10000);
  arr.push(temp);
}
fs.writeFileSync('./data.json', JSON.stringify(arr, null, 2));