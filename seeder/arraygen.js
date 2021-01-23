const fs = require('fs');

const random = createRandom();
fs.writeFileSync('./data/datasets/random.json', JSON.stringify(random, null, 2));
const sorted = createSorted();
fs.writeFileSync('./data/datasets/sorted.json', JSON.stringify(sorted, null, 2));
const almostSorted = createAlmostSorted(sorted);
fs.writeFileSync('./data/datasets/almost_sorted.json', JSON.stringify(almostSorted, null, 2));


console.log('finish seeding data to test');

function createAlmostSorted(arr) {
  for (let i = 0; i < 20; i++) {
    let randomIndex1 = Math.floor(Math.random() * arr.length);
    let randomIndex2 = Math.floor(Math.random() * arr.length);
    if (randomIndex1 != randomIndex2) {
      let temp = arr[randomIndex1];
      arr[randomIndex1] = arr[randomIndex2];
      arr[randomIndex2] = temp;
    }
  }
  // extra manual assignment to make sure the created array always almost sorted in case random gives sorted
  arr[30] = 1000000;
  arr[394] = 30394;
  arr[3] = 44;

  return arr;
}

function createRandom() {
  let arr = [];
  for (let i = 0; i < 100000; i++) {
    let temp = Math.round(Math.random() * 100000);
    arr.push(temp);
  }
  return arr;
}

function createSorted() {
  let arr = [];
  for (let i = 0; i < 100000; i++) {
    arr.push(i);
  }
  return arr;
}

