let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const [N, k] = input
  .shift()
  .split(" ")
  .map((d) => +d);
const array = input
  .shift()
  .split(" ")
  .map((d) => +d);
array.sort((a, b) => b - a);
console.log(array[k - 1]);