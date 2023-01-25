let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
input.shift();
const num = input.pop();
let cnt = 0;
input
  .shift()
  .split(" ")
  .map((d) => {
    if (d === num) cnt++;
  });
console.log(cnt);