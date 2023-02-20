let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map((d) => +d);

const [M, N] = input;
const answer = [];

for (let i = M; i <= N; i++) {
  if (i === 1) continue;
  let sosu = true;
  for (let j = 2; j <= Math.sqrt(i); j++) {
    if (i % j === 0) {
      sosu = false;
      break;
    }
  }
  if (sosu) {
    answer.push(i);
  }
}

console.log(answer.join("\n"));