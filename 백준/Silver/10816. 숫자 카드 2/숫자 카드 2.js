let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const arrayN = input[1].split(" ").map((d) => +d);
const arrayM = input[3].split(" ").map((d) => +d);

const map = new Map();

for (const n of arrayN) {
  if (map.has(n)) map.set(n, map.get(n) + 1);
  else map.set(n, 1);
}
const answer = [];
for (const m of arrayM) {
  if (map.has(m)) answer.push(map.get(m));
  else answer.push(0);
}

console.log(answer.join(" "));