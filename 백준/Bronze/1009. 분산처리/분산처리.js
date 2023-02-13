let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
const T = parseInt(input.shift());
let answer = [];
for (let i = 0; i < T; i++) {
  const [a, b] = input
    .shift()
    .split(" ")
    .map((d) => +d);
  let num = a;
  for (let j = 0; j < b - 1; j++) {
    num = (num * a) % 10;
  }
  if (b === 1) answer.push(num % 10 === 0 ? 10 : num % 10);
  else answer.push(num === 0 ? 10 : num);
}
console.log(answer.join("\n"));