function createAdder(x) {
  return function (y) { return x + y };
}

const add3 = createAdder(3);

const output = add3(1000);
console.log(output);