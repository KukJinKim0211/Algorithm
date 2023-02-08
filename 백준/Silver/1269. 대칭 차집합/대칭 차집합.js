let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const arrayA = new Set(input[1].split(" ").map((d) => +d));
const arrayB = new Set(input[2].split(" ").map((d) => +d));

let answer = 0;
for (const a of arrayA) {
  if (!arrayB.has(a)) answer++;
}

for (const b of arrayB) {
  if (!arrayA.has(b)) answer++;
}

console.log(answer);