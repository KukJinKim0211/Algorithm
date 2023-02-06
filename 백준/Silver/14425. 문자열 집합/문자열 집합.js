let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const [N, M] = input
  .shift()
  .split(" ")
  .map((d) => +d);

const arrayN = new Set(input.slice(0, N));
const arrayM = input.slice(N);
let answer = 0;
for (const m of arrayM) {
  if (arrayN.has(m)) answer++;
}

console.log(answer);