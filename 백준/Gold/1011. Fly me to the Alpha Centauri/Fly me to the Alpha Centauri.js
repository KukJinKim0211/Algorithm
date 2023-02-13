let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
const T = parseInt(input.shift());
let answer = [];
for (let tc = 0; tc < T; tc++) {
  const [x, y] = input
    .shift()
    .split(" ")
    .map((d) => +d);
  const distance = y - x;
  let num = 0;
  if (Math.sqrt(y - x) % 1 === 0) {
    num = 2 * Math.sqrt(y - x) - 1;
  } else {
    const a = Math.pow(Math.ceil(Math.sqrt(y - x)), 2);
    const b = Math.pow(Math.ceil(Math.sqrt(y - x)) - 1, 2) + 1;
    if ((a + b) / 2 <= y - x) {
      num = 2 * Math.ceil(Math.sqrt(y - x)) - 1;
    } else {
      num = 2 * Math.ceil(Math.sqrt(y - x)) - 2;
    }
  }
  answer.push(num);
}
console.log(answer.join("\n"));