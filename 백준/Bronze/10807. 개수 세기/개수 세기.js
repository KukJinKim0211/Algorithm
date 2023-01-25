let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
input.shift();
const num = input.pop();
let cnt = 0;
const data = input
  .shift()
  .split(" ")
  .filter((d) => d === num);
console.log(data.length);