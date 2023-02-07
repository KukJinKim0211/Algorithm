let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const [N, arrayN, M, arrayM] = input;
const arrayObj = {};
for (const n of arrayN.split(" ")) {
  arrayObj[n] = arrayObj[n] === undefined ? 1 : arrayObj[n] + 1;
}
const answer = [];
for (const m of arrayM.split(" ")) {
  answer.push(arrayObj[m] === undefined ? 0 : arrayObj[m]);
}

console.log(answer.join(" "));