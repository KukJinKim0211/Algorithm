let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((d) => +d);

const sum = input.reduce((curr, result) => curr + result, 0);
input.sort((a, b) => a - b);
console.log(sum / input.length);
console.log(input[2]);