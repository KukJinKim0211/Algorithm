let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((d) => d.split(" "))
  .map((d) => d.map((c) => +c));

let max = 0;
let pos = [1, 1];
for (let i = 0; i < 9; i++) {
  for (let j = 0; j < 9; j++) {
    if (input[i][j] > max) {
      max = input[i][j];
      pos = [i + 1, j + 1];
    }
  }
}

console.log(max);
console.log(pos.join(" "));