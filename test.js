let items = [1, 4, 2, 3, 6, 8, 9, 9, 0, 10, 35, 5, 3]
let stack = [];
let low = 0;
let high = items.length - 1;
stack.push([low, high]);
let range = stack.pop();

let newitem = items.pop();

console.log(newitem)