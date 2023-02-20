let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const answer = [];
const [N, nArray, M, mArray] = input;

const set = new Set(nArray.split(" ").map((d) => +d));

mArray.split(" ").forEach((d) => {
  set.has(+d) ? answer.push(1) : answer.push(0);
});

console.log(answer.join("\n"));