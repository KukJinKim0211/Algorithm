let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
const total = +input.shift();
const count = input.shift();
const data = input
  .map((d) => parseInt(d.split(" ")[0]) * parseInt(d.split(" ")[1]))
  .reduce((acc, cur) => acc + cur, 0);
console.log(total === data ? "Yes" : "No");